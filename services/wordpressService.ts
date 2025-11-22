
import { Product, Project, BlogPost, BrandType, Category, Testimonial } from '../types';
import { PRODUCTS, PROJECTS, BLOG_POSTS, CATEGORIES, MOCK_PAGES, TESTIMONIALS } from '../constants';

// CẤU HÌNH: Đã cập nhật URL của bạn
export const WP_BASE_URL = 'https://admin.vngpower.vn/wp-json/wp/v2';

// Fallback image constant to check against
const DEFAULT_CAT_IMG = 'https://mayphatdienvietnhat.vn/wp-content/uploads/2025/11/8.png';

// Helper function to strip HTML tags (Used for generating excerpts)
const stripHtml = (html: string) => {
  if (!html) return '';
  // Create a temporary DOM element to extract text
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  let text = tmp.textContent || tmp.innerText || "";
  
  // Clean up extra whitespace
  text = text.replace(/\s+/g, ' ').trim();
  
  // Remove specific phrases like "Read more", "Xem thêm" often added by plugins
  text = text.replace(/Read more/gi, '').replace(/Xem thêm/gi, '').replace(/…/g, '');
  
  return text;
};

// Helper function để gọi API
async function fetchFromWP(endpoint: string, params: Record<string, string> = {}) {
  try {
    const url = new URL(`${WP_BASE_URL}${endpoint}`);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    
    const res = await fetch(url.toString());
    if (!res.ok) {
        // Nếu endpoint không tồn tại (ví dụ chưa cài Woo), trả về null để xử lý êm đẹp
        if (res.status === 404) return null;
        throw new Error(`WordPress API Error: ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.warn(`Failed to fetch from WP (${endpoint}). Using fallback/empty data.`);
    return null; // Return null to trigger fallback/empty
  }
}

// Helper to check if an image is "real" or the fallback
const isValidImage = (url: string) => {
    return url && url !== DEFAULT_CAT_IMG && url !== 'https://via.placeholder.com/800';
};

// --- HELPER: SMART IMAGE FINDER FOR CATEGORIES ---
const getCategoryImageUrl = (cat: any): string => {
  const acf = cat.acf || {};
  
  // 1. Ưu tiên trường ACF 'image'
  if (acf.image) {
      // Trường hợp trả về Object (Image Array) -> Lấy URL
      if (typeof acf.image === 'object' && acf.image.url) {
          return acf.image.url;
      }
      // Trường hợp trả về String (Image URL)
      if (typeof acf.image === 'string' && acf.image.length > 5) {
          return acf.image;
      }
  }

  // 2. Quét các tên trường phổ biến khác nếu trường 'image' trống
  const priorityFields = ['avatar', 'thumbnail', 'hinh_anh', 'anh_dai_dien', 'featured_image', 'cat_img', 'category_image', 'banner'];
  for (const field of priorityFields) {
      if (acf[field]) {
          if (typeof acf[field] === 'string' && acf[field].length > 5) return acf[field];
          if (typeof acf[field] === 'object' && acf[field].url) return acf[field].url;
      }
  }

  // 3. Ưu tiên ảnh chuẩn của WooCommerce (nếu có)
  if (cat.image) {
      if (typeof cat.image === 'string') return cat.image;
      if (cat.image.src) return cat.image.src;
      if (cat.image.url) return cat.image.url;
  }

  // 4. Tìm trong Yoast SEO
  if (cat.yoast_head_json?.og_image?.[0]?.url) {
    return cat.yoast_head_json.og_image[0].url;
  }

  // 5. Fallback
  return DEFAULT_CAT_IMG; 
};

// --- HELPER: SMART IMAGE FINDER FOR PRODUCTS/POSTS ---
const getProductImageUrl = (item: any): string => {
  // 1. Check Featured Media (_embedded)
  const featured = item._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  if (featured) return featured;

  // 2. Check ACF Fields
  const acf = item.acf || {};
  
  // Check 'image' first (User's preferred field name)
  if (acf.image) {
       if (typeof acf.image === 'object' && acf.image.url) return acf.image.url;
       if (typeof acf.image === 'string') return acf.image;
  }
  
  // Priority keys
  const priorityFields = ['product_image', 'hinh_anh', 'anh_dai_dien', 'thumbnail', 'img', 'gallery'];
  for (const field of priorityFields) {
      if (acf[field]) {
          if (typeof acf[field] === 'string' && acf[field].length > 5) return acf[field];
          if (typeof acf[field] === 'object' && acf[field].url) return acf[field].url;
      }
  }

  return 'https://via.placeholder.com/800';
};

// --- PAGES (Landing Pages) ---

export const getWPPageBySlug = async (slug: string): Promise<any> => {
  const data = await fetchFromWP('/pages', {
    slug: slug
  });

  if (!data || data.length === 0) {
    return MOCK_PAGES[slug as keyof typeof MOCK_PAGES] || null;
  }

  const page = data[0];
  
  // Xử lý excerpt: Loại bỏ HTML, loại bỏ link Read more
  let excerpt = stripHtml(page.excerpt.rendered);
  
  // Nếu excerpt trống, lấy từ content
  if (!excerpt || excerpt.trim() === '') {
      const plainText = stripHtml(page.content.rendered);
      const maxLength = 200;
      if (plainText.length > maxLength) {
          excerpt = plainText.substring(0, maxLength);
          excerpt = excerpt.substring(0, excerpt.lastIndexOf(" ")) + "...";
      } else {
          excerpt = plainText;
      }
  }

  return {
    id: page.id,
    title: page.title.rendered,
    content: page.content.rendered,
    excerpt: excerpt 
  };
};

// --- BLOG POSTS ---

export const getWPBlogPosts = async (search: string = ''): Promise<BlogPost[]> => {
  const params: Record<string, string> = {
    _embed: 'true',
    per_page: '20' // Fetch more to ensure we have enough
  };

  if (search) {
    params.search = search;
  }

  const data = await fetchFromWP('/posts', params);

  let realPosts: BlogPost[] = [];

  if (data) {
    realPosts = data.map((post: any) => {
      let categoryName = 'Tin tức';
      if (post._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0] && post._embedded['wp:term'][0].length > 0) {
          categoryName = post._embedded['wp:term'][0][0].name;
      }
      
      const authorName = post._embedded?.author?.[0]?.name || 'Admin';

      return {
        id: post.id.toString(),
        slug: post.slug,
        title: post.title.rendered,
        excerpt: stripHtml(post.excerpt.rendered).substring(0, 150) + '...',
        content: post.content.rendered,
        image: getProductImageUrl(post),
        author: authorName,
        date: new Date(post.date).toLocaleDateString('vi-VN'),
        category: categoryName,
        tags: []
      };
    });
  }

  // Strategy: 1 Real replaces 1 Mock
  const itemsToReplace = realPosts.length;
  const remainingMocks = BLOG_POSTS.slice(itemsToReplace);

  return [...realPosts, ...remainingMocks];
};

export const getWPPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  const data = await fetchFromWP('/posts', {
    _embed: 'true',
    slug: slug
  });

  if (!data || data.length === 0) {
    return BLOG_POSTS.find(p => p.slug === slug);
  }

  const post = data[0];
  let categoryName = 'Tin tức';
  if (post._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0] && post._embedded['wp:term'][0].length > 0) {
      categoryName = post._embedded['wp:term'][0][0].name;
  }

  return {
    id: post.id.toString(),
    slug: post.slug,
    title: post.title.rendered,
    excerpt: stripHtml(post.excerpt.rendered).substring(0, 150) + '...',
    content: post.content.rendered,
    image: getProductImageUrl(post),
    author: post._embedded?.author?.[0]?.name || 'Admin',
    date: new Date(post.date).toLocaleDateString('vi-VN'),
    category: categoryName,
    tags: []
  };
};

// --- TESTIMONIALS ---

export const getWPTestimonials = async (): Promise<Testimonial[]> => {
  const data = await fetchFromWP('/testimonials', {
    _embed: 'true',
    per_page: '12' 
  });

  let realTestimonials: Testimonial[] = [];

  if (data) {
      realTestimonials = data.map((item: any) => {
        const acf = item.acf || {};
        return {
          id: item.id.toString(),
          name: item.title.rendered, 
          role: acf.role || '',      
          company: acf.company || '', 
          content: stripHtml(item.content.rendered), 
          avatar: getProductImageUrl(item)
        };
      });
  }

  // Merge Strategy: 1 Real replaces 1 Mock
  const itemsToReplace = realTestimonials.length;
  const remainingMocks = TESTIMONIALS.slice(itemsToReplace);

  return [...realTestimonials, ...remainingMocks];
};

// --- CATEGORIES ---

// Danh sách các slug (đường dẫn) của bài viết tin tức/blog/dịch vụ
const BLOG_CATEGORY_BLACKLIST = [
    'tin-tuc', 'news', 
    'blog', 'blogs', 
    'kien-thuc', 'knowledge',
    'tuyen-dung', 'recruitment', 'careers',
    'du-an', 'projects',
    'dich-vu', 'services', 'service',
    'khuyen-mai', 'promotion',
    'uncategorized', 'chua-phan-loai',
    'su-kien', 'events',
    'gioi-thieu', 'about',
    'tu-van', 'consulting', 'tu-van-ky-thuat',
    'ho-tro', 'support', 'ho-tro-ky-thuat'
];

const mapWPCategoryToType = (cat: any): Category => {
    const acf = cat.acf || {};
    const imageUrl = getCategoryImageUrl(cat);

    return {
      id: cat.slug, 
      name: cat.name,
      origin: acf.origin || 'Đang cập nhật', 
      desc: acf.short_desc || cat.description || '',
      longDesc: acf.introduction || cat.description || '',
      range: acf.range || 'Đang cập nhật',
      image: imageUrl,
      technicalSpecs: [
         { label: 'Động cơ', value: acf.spec_engine || acf.origin || 'Đang cập nhật' },
         { label: 'Lắp ráp tại', value: acf.spec_assembly || 'Nhà máy VNGPOWER (Việt Nam)' },
         { label: 'Vỏ cách âm', value: acf.spec_enclosure || 'VNGPOWER Tiêu chuẩn' },
         { label: 'Đầu phát', value: acf.spec_alternator || 'Stamford / Leroy Somer' },
         { label: 'Bảng điều khiển', value: acf.spec_controller || 'Deepsea / ComAp' },
         { label: 'Bảo hành', value: acf.spec_warranty || '24 tháng chính hãng' }
      ]
    };
}

export const getWPCategories = async (): Promise<Category[]> => {
  const params = { per_page: '100', hide_empty: 'false' };

  const pCatsPromise = fetchFromWP('/product_cat', params);
  const sCatsPromise = fetchFromWP('/categories', params);

  const [pCatsResult, sCatsResult] = await Promise.allSettled([pCatsPromise, sCatsPromise]);

  const pCats = pCatsResult.status === 'fulfilled' ? pCatsResult.value : [];
  const sCats = sCatsResult.status === 'fulfilled' ? sCatsResult.value : [];

  if (!pCats && !sCats) return CATEGORIES;

  const validPCats = pCats || [];
  const validSCats = sCats || [];

  const pMap = new Map(validPCats.map((c: any) => [c.slug, c]));
  const sMap = new Map(validSCats.map((c: any) => [c.slug, c]));

  const allSlugs = new Set([...pMap.keys(), ...sMap.keys()]);
  
  const combined: Category[] = [];

  allSlugs.forEach((slug: any) => {
      if (typeof slug === 'string' && BLOG_CATEGORY_BLACKLIST.includes(slug.toLowerCase())) return;

      const pCat: any = pMap.get(slug);
      const sCat: any = sMap.get(slug);

      let mainCat = pCat || sCat;
      const finalCat = mapWPCategoryToType(mainCat);
      
      // MERGE DATA
      if (sCat) {
          const sImg = getCategoryImageUrl(sCat);
          const pImg = pCat ? getCategoryImageUrl(pCat) : null;

          if (isValidImage(sImg) && (!pImg || !isValidImage(pImg) || sImg !== DEFAULT_CAT_IMG)) {
              finalCat.image = sImg;
          }

          if (sCat.description && (!pCat?.description || pCat.description.length < sCat.description.length)) {
             finalCat.desc = sCat.description;
             if (!finalCat.longDesc) finalCat.longDesc = sCat.description;
          }

          const sAcf = sCat.acf || {};
          if (sAcf.introduction) finalCat.longDesc = sAcf.introduction;
          if (sAcf.origin) finalCat.origin = sAcf.origin;
          if (sAcf.range) finalCat.range = sAcf.range;
          
          if (sAcf.spec_engine) finalCat.technicalSpecs[0].value = sAcf.spec_engine;
          if (sAcf.spec_assembly) finalCat.technicalSpecs[1].value = sAcf.spec_assembly;
          if (sAcf.spec_enclosure) finalCat.technicalSpecs[2].value = sAcf.spec_enclosure;
          if (sAcf.spec_alternator) finalCat.technicalSpecs[3].value = sAcf.spec_alternator;
          if (sAcf.spec_controller) finalCat.technicalSpecs[4].value = sAcf.spec_controller;
          if (sAcf.spec_warranty) finalCat.technicalSpecs[5].value = sAcf.spec_warranty;
      }
      
      combined.push(finalCat);
  });

  // SORTING: Ensure the order matches constants.ts (KOKURO -> CUMMINS -> HYUNDAI -> MITSUBISHI -> ISUZU -> BAUDOUIN)
  const definedOrder = CATEGORIES.map(c => c.id.toLowerCase());
  combined.sort((a, b) => {
    const indexA = definedOrder.indexOf(a.id.toLowerCase());
    const indexB = definedOrder.indexOf(b.id.toLowerCase());
    
    // If both exist in definedOrder, sort by index
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    // If only A exists, A comes first
    if (indexA !== -1) return -1;
    // If only B exists, B comes first
    if (indexB !== -1) return 1;
    // If neither exists, keep original order (or can sort alphabetically)
    return 0;
  });

  if (combined.length === 0) return CATEGORIES;

  return combined;
}

export const getWPCategoryBySlug = async (slug: string): Promise<Category | undefined> => {
  const lowerSlug = slug.toLowerCase();
  const params = { slug: lowerSlug, _embed: 'true' };

  const [pDataResult, sDataResult] = await Promise.allSettled([
    fetchFromWP('/product_cat', params),
    fetchFromWP('/categories', params)
  ]);

  const pCat = pDataResult.status === 'fulfilled' ? pDataResult.value?.[0] : null;
  const sCat = sDataResult.status === 'fulfilled' ? sDataResult.value?.[0] : null;

  if (!pCat && !sCat) {
     return CATEGORIES.find(c => c.id.toLowerCase() === lowerSlug);
  }

  let mainCat = pCat || sCat;
  const result = mapWPCategoryToType(mainCat);

  if (sCat) {
      const sImg = getCategoryImageUrl(sCat);
      const pImg = pCat ? getCategoryImageUrl(pCat) : null;
      
      if (isValidImage(sImg) && (!pImg || !isValidImage(pImg) || sImg !== DEFAULT_CAT_IMG)) {
          result.image = sImg;
      }

      const sAcf = sCat.acf || {};
      if (sCat.description && (!pCat?.description || sCat.description.length > pCat.description.length)) {
          result.desc = sCat.description;
      }
      
      if (sAcf.introduction) result.longDesc = sAcf.introduction;
      if (sAcf.origin) result.origin = sAcf.origin;
      if (sAcf.range) result.range = sAcf.range;
      
      if (sAcf.spec_engine) result.technicalSpecs[0].value = sAcf.spec_engine;
      if (sAcf.spec_assembly) result.technicalSpecs[1].value = sAcf.spec_assembly;
      if (sAcf.spec_enclosure) result.technicalSpecs[2].value = sAcf.spec_enclosure;
      if (sAcf.spec_alternator) result.technicalSpecs[3].value = sAcf.spec_alternator;
      if (sAcf.spec_controller) result.technicalSpecs[4].value = sAcf.spec_controller;
      if (sAcf.spec_warranty) result.technicalSpecs[5].value = sAcf.spec_warranty;
  }

  return result;
}

// --- PRODUCTS ---

export const getWPProducts = async (): Promise<Product[]> => {
  let data = await fetchFromWP('/products', { _embed: 'true', per_page: '100' });
  
  if (!data) {
      data = await fetchFromWP('/posts', { _embed: 'true', per_page: '100' });
  }

  let realProducts: Product[] = [];

  if (data) {
    const filteredData = data.filter((item: any) => {
        const acf = item.acf || {};
        if (acf.kva || acf.price || acf.brand) return true;
        
        const categories = item._embedded?.['wp:term']?.[0] || [];
        const isBlogItem = categories.some((cat: any) => BLOG_CATEGORY_BLACKLIST.includes(cat.slug));
        if (isBlogItem) return false;

        return true; 
    });

    realProducts = filteredData.map((item: any) => {
      const acf = item.acf || {}; 
      return {
        id: item.id.toString(),
        name: item.title.rendered,
        slug: item.slug,
        brand: (acf.brand as BrandType) || BrandType.CUMMINS,
        kva: Number(acf.kva) || 0,
        price: acf.price_contact ? 'Contact' : Number(acf.price),
        image: getProductImageUrl(item),
        shortDescription: acf.short_description || '',
        longDescription: item.content?.rendered || '', 
        catalogueLink: acf.catalogue_file || '', 
        isFeatured: acf.is_featured || false, 
        specs: {
          model: acf.model || '', // Map ACF model field
          engine: acf.engine || 'Đang cập nhật',
          alternator: acf.alternator || 'Đang cập nhật',
          controller: acf.controller || 'Deepsea / ComAp', 
          fuelConsumption: acf.fuel_consumption || 'Đang cập nhật',
          dimensions: acf.dimensions || 'Đang cập nhật',
          weight: acf.weight || 'Đang cập nhật',
          origin: acf.origin || acf.xuat_xu || 'Chính hãng'
        }
      };
    });
  }

  // Merge Strategy: 1 Real Product replaces 1 Mock Product
  const itemsToReplace = realProducts.length;
  const remainingMocks = PRODUCTS.slice(itemsToReplace);

  return [...realProducts, ...remainingMocks];
};

export const getWPProductBySlug = async (slug: string): Promise<Product | undefined> => {
  let data = await fetchFromWP('/products', { _embed: 'true', slug: slug });
  
  if (!data) {
      data = await fetchFromWP('/posts', { _embed: 'true', slug: slug });
  }

  if (!data || data.length === 0) {
    return PRODUCTS.find(p => p.slug === slug);
  }

  const item = data[0];
  const acf = item.acf || {};
  return {
      id: item.id.toString(),
      name: item.title.rendered,
      slug: item.slug,
      brand: (acf.brand as BrandType) || BrandType.CUMMINS,
      kva: Number(acf.kva) || 0,
      price: acf.price_contact ? 'Contact' : Number(acf.price),
      image: getProductImageUrl(item),
      shortDescription: acf.short_description || '',
      longDescription: item.content?.rendered || '', 
      catalogueLink: acf.catalogue_file || '', 
      isFeatured: acf.is_featured || false,
      specs: {
        model: acf.model || '', // Map ACF model field
        engine: acf.engine || 'Đang cập nhật',
        alternator: acf.alternator || 'Đang cập nhật',
        controller: acf.controller || 'Deepsea / ComAp',
        fuelConsumption: acf.fuel_consumption || 'Đang cập nhật',
        dimensions: acf.dimensions || 'Đang cập nhật',
        weight: acf.weight || 'Đang cập nhật',
        origin: acf.origin || acf.xuat_xu || 'Chính hãng'
      }
  };
}

// --- PROJECTS ---

export const getWPProjects = async (): Promise<Project[]> => {
  const data = await fetchFromWP('/projects', {
    _embed: 'true',
    per_page: '20'
  });

  let realProjects: Project[] = [];

  if (data) {
    realProjects = data.map((item: any) => {
      const acf = item.acf || {};
      return {
        id: item.id.toString(),
        slug: item.slug,
        title: item.title.rendered,
        customer: acf.customer_name || '',
        description: acf.short_description || '',
        longDescription: item.content.rendered,
        location: acf.location || '',
        capacity: acf.capacity || '',
        year: Number(acf.completion_year) || new Date().getFullYear(),
        challenge: acf.challenge_text || '',
        solution: acf.solution_text || '',
        image: getProductImageUrl(item)
      };
    });
  }

  // Merge Strategy: 1 Real Project replaces 1 Mock Project
  const itemsToReplace = realProjects.length;
  const remainingMocks = PROJECTS.slice(itemsToReplace);

  return [...realProjects, ...remainingMocks];
};

export const getWPProjectBySlug = async (slug: string): Promise<Project | undefined> => {
  const data = await fetchFromWP('/projects', {
    _embed: 'true',
    slug: slug
  });

  if (!data || data.length === 0) {
    return PROJECTS.find(p => p.slug === slug);
  }

  const item = data[0];
  const acf = item.acf || {};
  return {
      id: item.id.toString(),
      slug: item.slug,
      title: item.title.rendered,
      customer: acf.customer_name || '',
      description: acf.short_description || '',
      longDescription: item.content.rendered,
      location: acf.location || '',
      capacity: acf.capacity || '',
      year: Number(acf.completion_year) || new Date().getFullYear(),
      challenge: acf.challenge_text || '',
      solution: acf.solution_text || '',
      image: getProductImageUrl(item)
  };
}
