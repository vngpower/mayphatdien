
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Zap, Settings, Shield, ChevronRight, ChevronLeft, Star, Box, Eye, Quote, Building2, Factory, Stethoscope, Hotel, GraduationCap, HardHat, CheckCircle, Gauge, MapPin, ChevronDown, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getWPProducts, getWPProjects, getWPBlogPosts, getWPCategories, getWPTestimonials } from '../services/wordpressService';
import { Product, Project, BlogPost, Category, Testimonial } from '../types';
import QuoteModal from '../components/QuoteModal';
import SEO from '../components/SEO';
import SecureImage from '../components/SecureImage';

const Home: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [filterKva, setFilterKva] = useState('all');
  const [filterBrand, setFilterBrand] = useState('all');
  const [activeSolution, setActiveSolution] = useState(0);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  
  // State for product display limit - Initially show 12 products
  const [visibleProductCount, setVisibleProductCount] = useState(12);

  // State for data fetch
  const [products, setProducts] = useState<Product[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]); 
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const productSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [fetchedProducts, fetchedProjects, fetchedPosts, fetchedCategories, fetchedTestimonials] = await Promise.all([
          getWPProducts(),
          getWPProjects(),
          getWPBlogPosts(),
          getWPCategories(),
          getWPTestimonials()
        ]);
        setProducts(fetchedProducts);
        setProjects(fetchedProjects);
        setBlogPosts(fetchedPosts);
        setCategories(fetchedCategories);
        setTestimonials(fetchedTestimonials);
      } catch (error) {
        console.error("Error loading data", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  // Filter for "Product Grid" (User selected)
  const filteredProducts = products.filter(p => {
    if (filterBrand !== 'all' && p.brand !== filterBrand) return false;
    if (filterKva !== 'all') {
        if (filterKva === 'small' && p.kva > 100) return false;
        if (filterKva === 'medium' && (p.kva <= 100 || p.kva > 500)) return false;
        if (filterKva === 'large' && p.kva <= 500) return false;
    }
    return true;
  });

  // Logic for "Featured Products" - Only show products marked as featured
  // If no product is marked, fallback to all filtered products
  const featuredProducts = products.filter(p => p.isFeatured);
  const displayProducts = featuredProducts.length > 0 ? featuredProducts : filteredProducts;

  // Handle Load More - Add 4 more items
  const handleLoadMoreProducts = () => {
    setVisibleProductCount(prev => prev + 4); 
  };

  // Solutions Data for Homepage Tab
  const HOME_SOLUTIONS = [
    {
      id: 'hospital',
      icon: <Stethoscope size={24} />,
      title: 'Bệnh Viện & Y Tế',
      subtitle: 'Nguồn điện "sống còn" 24/7',
      desc: 'Hệ thống điện dự phòng cho bệnh viện yêu cầu độ tin cậy tuyệt đối (Tier 3/Tier 4). Máy phát điện phải có khả năng khởi động tức thì (<10s) và ổn định điện áp để bảo vệ các thiết bị y tế nhạy cảm như máy thở, phòng mổ.',
      features: ['Khởi động tự động < 10 giây', 'Độ ồn tiêu chuẩn < 70dB', 'Tích hợp tủ hòa đồng bộ'],
      image: 'https://admin.vngpower.vn/wp-content/uploads/2025/11/benh-vien-y-te-1.webp'
    },
    {
      id: 'factory',
      icon: <Factory size={24} />,
      title: 'Nhà Máy Sản Xuất',
      subtitle: 'Chịu tải nặng liên tục',
      desc: 'Giải pháp cho nhà máy công nghiệp nặng cần động cơ mạnh mẽ, khả năng chịu tải biến thiên (Step load) cực tốt để khởi động các motor công suất lớn mà không bị sụt áp.',
      features: ['Động cơ Heavy Duty (S16R, KTA50...)', 'Tiết kiệm nhiên liệu', 'Vận hành liên tục 24/24'],
      image: 'https://admin.vngpower.vn/wp-content/uploads/2025/11/nha-may-scaled.jpg'
    },
    {
      id: 'building',
      icon: <Building2 size={24} />,
      title: 'Tòa Nhà Văn Phòng',
      subtitle: 'Hệ thống PCCC & Thang máy',
      desc: 'Đảm bảo nguồn điện cho hệ thống an ninh, thang máy và PCCC. Vấn đề quan trọng nhất là xử lý khí thải và tiếng ồn để không ảnh hưởng đến cư dân và môi trường xung quanh.',
      features: ['Hệ thống thoát khói DPF', 'Vỏ cách âm Super Silent', 'Kích thước nhỏ gọn'],
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'hotel',
      icon: <Hotel size={24} />,
      title: 'Khách Sạn & Resort',
      subtitle: 'Trải nghiệm 5 sao không gián đoạn',
      desc: 'Duy trì dịch vụ nghỉ dưỡng đẳng cấp ngay cả khi mất điện. Yêu cầu cao về độ êm ái và thẩm mỹ của tổ máy để phù hợp với cảnh quan resort.',
      features: ['Sơn chống ăn mòn muối biển', 'Độ rung chấn thấp', 'Thẩm mỹ cao'],
      image: 'https://admin.vngpower.vn/wp-content/uploads/2025/11/can-luu-y-gi-khi-thiet-ke-khach-san-resort-fhd.webp'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title="Trang Chủ" 
        description="VNGPOWER - Nhà sản xuất và lắp ráp máy phát điện công nghiệp hàng đầu Việt Nam. Động cơ Cummins, Hyundai, Mitsubishi chính hãng."
      />
      
      {/* 1. HERO SECTION - Minimalist & Professional */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1565619624098-e65978406562?q=80&w=2070&auto=format&fit=crop" 
            alt="Industrial Generator Factory" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for better text contrast */}
          <div className="absolute inset-0 bg-navy-900/90 bg-gradient-to-b from-navy-900/95 via-navy-900/80 to-navy-900/95"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          {/* Increased max-width for wider text layout */}
          <div className="max-w-7xl mx-auto text-center">
            
            {/* Headline - Larger, Wider, More Spaced Out */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-tight mb-8 animate-fade-in-up delay-100 tracking-tight">
              Giải Pháp Nguồn Điện <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety-400 to-yellow-300">
                Dự Phòng Tin Cậy
              </span>{' '}
              cho Mọi Công Trình
            </h1>
            
            {/* Description - Updated Text */}
            <p className="text-xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-light">
              Powered By <strong className="text-white font-bold">Kokuro, Cummins, Mitsubishi, Hyundai</strong>.
              <br className="hidden md:block" />
              Lắp ráp tại Việt Nam theo tiêu chuẩn Quốc tế.
            </p>
            
            {/* Buttons - Optimized spacing */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up delay-300">
              <button 
                onClick={() => setIsQuoteOpen(true)} 
                className="bg-safety-500 hover:bg-safety-400 text-navy-900 font-bold py-4 px-10 rounded-full text-lg transition transform hover:-translate-y-1 shadow-xl shadow-safety-500/20 flex items-center justify-center min-w-[260px]"
              >
                <Zap size={22} className="mr-2 fill-current" />
                YÊU CẦU BÁO GIÁ
              </button>
              <Link 
                to="/projects" 
                className="group bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-navy-900 font-bold py-4 px-10 rounded-full text-lg transition transform hover:-translate-y-1 flex items-center justify-center min-w-[260px]"
              >
                HỒ SƠ NĂNG LỰC
                <ArrowRight size={22} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Trust Indicators - Minimal */}
            <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 text-gray-400 text-xs font-bold uppercase tracking-widest animate-fade-in-up delay-500">
               <div className="flex items-center hover:text-white transition"><CheckCircle size={16} className="text-safety-500 mr-2"/> ISO 9001:2015</div>
               <div className="flex items-center hover:text-white transition"><CheckCircle size={16} className="text-safety-500 mr-2"/> CO/CQ Chính Hãng</div>
               <div className="flex items-center hover:text-white transition"><CheckCircle size={16} className="text-safety-500 mr-2"/> Bảo Hành 24 Tháng</div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SMART FILTER - Centered */}
      <section className="relative z-20 -mt-10 mx-4 md:mx-auto container md:max-w-6xl">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl border-t-4 border-safety-500 md:-mt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div>
               <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Công Suất (kVA)</label>
               <select 
                className="w-full bg-gray-100 border border-transparent focus:border-safety-400 rounded px-4 py-3 text-navy-900 font-medium focus:ring-2 focus:ring-safety-100 outline-none transition-all"
                value={filterKva}
                onChange={(e) => setFilterKva(e.target.value)}
               >
                 <option value="all">Tất cả công suất</option>
                 <option value="small">Dưới 100kVA</option>
                 <option value="medium">100kVA - 500kVA</option>
                 <option value="large">Trên 500kVA</option>
               </select>
            </div>
            <div>
               <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Động Cơ (Engine)</label>
               <select 
                className="w-full bg-gray-100 border border-transparent focus:border-safety-400 rounded px-4 py-3 text-navy-900 font-medium focus:ring-2 focus:ring-safety-100 outline-none transition-all"
                value={filterBrand}
                onChange={(e) => setFilterBrand(e.target.value)}
               >
                 <option value="all">Tất cả thương hiệu</option>
                 <option value="Kokuro">Powered By Kokuro</option>
                 <option value="Cummins">Powered By Cummins</option>
                 <option value="Hyundai">Powered By Hyundai</option>
                 <option value="Mitsubishi">Powered By Mitsubishi</option>
                 <option value="Isuzu">Powered By Isuzu</option>
                 <option value="Baudouin">Powered By Baudouin</option>
               </select>
            </div>
             <div>
               <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Tình trạng</label>
               <select className="w-full bg-gray-100 border border-transparent focus:border-safety-400 rounded px-4 py-3 text-navy-900 font-medium focus:ring-2 focus:ring-safety-100 outline-none transition-all">
                 <option>Máy mới 100% (Lắp ráp)</option>
                 <option>Máy nhập khẩu nguyên chiếc</option>
               </select>
            </div>
            <button 
              onClick={() => productSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-navy-900 hover:bg-navy-800 text-white font-bold py-3 rounded transition flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Zap size={18} className="mr-2" />
              TÌM MÁY NGAY
            </button>
          </div>
        </div>
      </section>

      {/* 2.5. INTRODUCTION & WHY CHOOSE US */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-safety-100 rounded-full -z-10 group-hover:scale-110 transition-transform"></div>
              {/* Intro Image - Updated as requested */}
              <img 
                src="https://admin.vngpower.vn/wp-content/uploads/2025/11/mayphatdienvietnhat.webp" 
                alt="VNGPOWER Factory" 
                className="rounded-lg shadow-xl w-full object-cover h-[450px]"
              />
              <div className="absolute bottom-6 right-6 bg-white p-5 rounded-lg shadow-lg max-w-xs border-l-4 border-safety-500">
                <div className="flex items-center mb-2">
                  <Star className="text-yellow-400 fill-yellow-400 mr-1" size={20} />
                  <Star className="text-yellow-400 fill-yellow-400 mr-1" size={20} />
                  <Star className="text-yellow-400 fill-yellow-400 mr-1" size={20} />
                  <Star className="text-yellow-400 fill-yellow-400 mr-1" size={20} />
                  <Star className="text-yellow-400 fill-yellow-400" size={20} />
                </div>
                <p className="font-bold text-navy-900 text-xl">15+ Năm Kinh Nghiệm</p>
                <p className="text-sm text-gray-500">Tự hào sản xuất và lắp ráp máy phát điện tại Việt Nam.</p>
              </div>
            </div>
            
            <div>
              <span className="text-safety-500 font-bold uppercase tracking-wider text-sm">Về Chúng Tôi</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-2 mb-6">
                VNGPOWER - Nhà Sản Xuất Máy Phát Điện (OEM)
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Công ty Cổ phần Máy Phát Điện VNGPOWER không chỉ là đơn vị phân phối, mà còn là <strong>nhà sản xuất và lắp ráp (OEM)</strong> các dòng máy phát điện công nghiệp. Chúng tôi nhập khẩu trực tiếp động cơ và đầu phát chính hãng, sau đó tiến hành sản xuất vỏ cách âm, khung bệ và lắp ráp hoàn thiện tại nhà máy VNGPOWER theo tiêu chuẩn ISO 9001:2015.
              </p>
              
              <div className="space-y-6">
                <h3 className="font-bold text-lg text-navy-900 border-b border-gray-100 pb-2">Lợi thế máy lắp ráp VNGPOWER:</h3>
                <div className="flex items-start">
                  <div className="mt-1 bg-safety-100 p-2 rounded text-safety-500 mr-4">
                    <Box size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900">Chất Lượng Đồng Bộ</h4>
                    <p className="text-sm text-gray-500">Sử dụng động cơ chính hãng (Cummins, Hyundai...) kết hợp với vỏ cách âm VNGPOWER siêu êm.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-safety-100 p-2 rounded text-safety-500 mr-4">
                    <Settings size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900">Giá Thành Tối Ưu</h4>
                    <p className="text-sm text-gray-500">Tiết kiệm chi phí vận chuyển và thuế nhập khẩu so với máy nguyên chiếc, giá rẻ hơn 20-30%.</p>
                  </div>
                </div>
                 <div className="flex items-start">
                  <div className="mt-1 bg-safety-100 p-2 rounded text-safety-500 mr-4">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900">Bảo Hành Chính Hãng</h4>
                    <p className="text-sm text-gray-500">Bảo hành 24 tháng hoặc 2000 giờ chạy máy. Phụ tùng thay thế luôn sẵn có.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                 <Link to="/projects" className="text-navy-900 font-bold hover:text-safety-500 transition flex items-center">
                   Xem năng lực sản xuất <ChevronRight size={18} className="ml-1" />
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.75. SOLUTIONS TABS SECTION (NEW) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
             <span className="text-safety-500 font-bold uppercase tracking-wider text-sm">Lĩnh vực chuyên môn</span>
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-2">Giải Pháp Chuyên Ngành</h2>
             <div className="w-20 h-1 bg-safety-500 mx-auto mt-4 mb-4"></div>
             <p className="text-gray-500 max-w-2xl mx-auto">VNGPOWER cung cấp giải pháp kỹ thuật "may đo" tối ưu cho từng đặc thù dự án.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[500px]">
             {/* Left Side: Tabs Navigation */}
             <div className="lg:w-1/3 bg-gray-50 border-r border-gray-100 flex lg:flex-col overflow-x-auto lg:overflow-x-visible scrollbar-hide">
                {HOME_SOLUTIONS.map((solution, index) => (
                   <button
                      key={solution.id}
                      onClick={() => setActiveSolution(index)}
                      className={`flex items-center p-6 text-left transition-all duration-300 border-b border-gray-100 min-w-[260px] lg:min-w-0 focus:outline-none ${
                         activeSolution === index 
                            ? 'bg-navy-900 text-white' 
                            : 'hover:bg-white text-gray-600 hover:text-navy-900'
                      }`}
                   >
                      <div className={`p-3 rounded-lg mr-4 transition ${
                         activeSolution === index ? 'bg-white/10' : 'bg-white shadow-sm text-safety-500'
                      }`}>
                         {solution.icon}
                      </div>
                      <div>
                         <h4 className="font-bold text-sm md:text-base">{solution.title}</h4>
                         <p className={`text-xs mt-1 ${activeSolution === index ? 'text-gray-300' : 'text-gray-400'}`}>
                            {solution.subtitle}
                         </p>
                      </div>
                      <div className={`ml-auto ${activeSolution === index ? 'opacity-100' : 'opacity-0'} transition hidden lg:block`}>
                         <ChevronRight size={16} />
                      </div>
                   </button>
                ))}
                
                <div className="mt-auto p-6 hidden lg:block">
                   <Link to="/solutions" className="flex items-center justify-center w-full border border-navy-900 text-navy-900 font-bold py-3 rounded hover:bg-navy-900 hover:text-white transition uppercase text-xs tracking-wider">
                      Xem tất cả giải pháp
                   </Link>
                </div>
             </div>

             {/* Right Side: Active Content */}
             <div className="lg:w-2/3 relative">
                {HOME_SOLUTIONS.map((solution, index) => (
                   <div 
                      key={solution.id}
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                         activeSolution === index ? 'opacity-100 z-10 relative' : 'opacity-0 z-0 absolute h-0 overflow-hidden'
                      }`}
                   >
                      <div className="h-[250px] md:h-[300px] relative overflow-hidden">
                         <img src={solution.image} alt={solution.title} className="w-full h-full object-cover" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                         <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                            <div className="bg-safety-500 text-navy-900 text-xs font-bold px-3 py-1 rounded inline-block mb-2 uppercase">Giải pháp</div>
                            <h3 className="text-2xl md:text-4xl font-bold">{solution.title}</h3>
                         </div>
                      </div>
                      
                      <div className="p-8 md:p-10">
                         <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            {solution.desc}
                         </p>
                         
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {solution.features.map((feature, fIdx) => (
                               <div key={fIdx} className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                                  <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                                  <span className="text-sm font-bold text-navy-900">{feature}</span>
                               </div>
                            ))}
                         </div>

                         <div className="flex gap-4">
                            <button 
                               onClick={() => setIsQuoteOpen(true)}
                               className="bg-safety-500 hover:bg-safety-400 text-navy-900 font-bold py-3 px-8 rounded shadow-lg transition flex items-center"
                            >
                               Nhận tư vấn
                            </button>
                            <Link to="/solutions" className="text-navy-900 font-bold py-3 px-6 flex items-center hover:text-safety-500 transition">
                               Chi tiết kỹ thuật <ArrowRight size={16} className="ml-2" />
                            </Link>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORY CARDS (REFACTORED: TAB STYLE) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-2">Sản Phẩm Lắp Ráp VNGPOWER</h2>
            <div className="w-20 h-1 bg-safety-500 mx-auto mb-4"></div>
            <p className="text-gray-500">Lựa chọn dòng động cơ phù hợp cho tổ máy của bạn</p>
          </div>
          
          {isLoading ? (
             <div className="flex justify-center items-center h-64">
               <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-navy-900"></div>
             </div>
          ) : (
            <div className="flex flex-col">
                {/* TABS NAVIGATION */}
                <div className="flex justify-center mb-8 overflow-x-auto pb-2 scrollbar-hide">
                    <div className="inline-flex bg-gray-100 p-1 rounded-full">
                        {categories.map((cat, index) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategoryIndex(index)}
                                className={`px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                                    activeCategoryIndex === index
                                    ? 'bg-navy-900 text-white shadow-md'
                                    : 'text-gray-600 hover:text-navy-900 hover:bg-white'
                                }`}
                            >
                                Powered by {cat.id.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ACTIVE TAB CONTENT */}
                <div className="relative min-h-[500px]">
                    {categories.map((cat, index) => (
                        <div 
                            key={cat.id}
                            className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                                activeCategoryIndex === index 
                                ? 'opacity-100 translate-x-0 z-10 relative' 
                                : 'opacity-0 translate-x-8 z-0 absolute pointer-events-none h-0 overflow-hidden'
                            }`}
                        >
                             <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row h-full">
                                {/* Left Image */}
                                <div className="lg:w-5/12 relative bg-gray-100">
                                    <SecureImage 
                                        src={cat.image} 
                                        alt={cat.name} 
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy-900/20"></div>
                                    <div className="absolute bottom-6 left-6 text-white lg:hidden">
                                        <h3 className="text-2xl font-bold">{cat.name}</h3>
                                        <p className="text-sm text-gray-300">{cat.origin}</p>
                                    </div>
                                </div>

                                {/* Right Content */}
                                <div className="lg:w-7/12 p-8 md:p-12 flex flex-col">
                                    <div className="flex items-center mb-4">
                                        <span className="bg-safety-100 text-safety-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mr-3 flex items-center">
                                           <Zap size={14} className="inline mr-1" /> {cat.range}
                                        </span>
                                        <span className="flex items-center text-gray-500 text-xs font-bold">
                                            <MapPin size={14} className="mr-1" /> {cat.origin}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-3xl font-bold text-navy-900 mb-4 hidden lg:block">{cat.name}</h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        {cat.longDesc || cat.desc}
                                    </p>

                                    {/* Specs Grid */}
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
                                        {cat.technicalSpecs.slice(0, 6).map((spec, idx) => (
                                            <div key={idx} className="flex flex-col">
                                                <span className="text-xs text-gray-500 font-bold uppercase">{spec.label}</span>
                                                <span className="text-sm font-bold text-navy-900">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto flex gap-4">
                                        <Link 
                                            to={`/category/${cat.id}`} 
                                            className="bg-navy-900 text-white font-bold py-3 px-8 rounded hover:bg-safety-500 hover:text-navy-900 transition shadow-lg flex items-center"
                                        >
                                            Xem chi tiết Series <ArrowRight size={18} className="ml-2" />
                                        </Link>
                                        <button 
                                            onClick={() => setIsQuoteOpen(true)}
                                            className="border-2 border-navy-900 text-navy-900 font-bold py-3 px-8 rounded hover:bg-navy-900 hover:text-white transition"
                                        >
                                            Báo giá dòng này
                                        </button>
                                    </div>
                                </div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS GRID */}
      <section className="py-16 bg-gray-50" id="products" ref={productSectionRef}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8">
            <div>
              <span className="text-safety-500 font-bold uppercase tracking-wider text-sm">
                Sản phẩm nổi bật
              </span>
              <h2 className="text-3xl font-heading font-bold text-navy-900 mt-2">
                Máy Phát Điện Công Nghiệp
              </h2>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-navy-900"></div>
            </div>
          ) : displayProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {displayProducts.slice(0, visibleProductCount).map(product => (
                  <div key={product.id} className="group bg-white border border-gray-100 rounded-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
                    {/* Featured Image: Using object-cover to fill frame (auto-crop) as requested */}
                    <div className="relative overflow-hidden aspect-[4/3] bg-white flex items-center justify-center">
                      <SecureImage 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      
                      {product.isFeatured && (
                        <div className="absolute top-2 left-2 bg-safety-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md uppercase tracking-wider">
                          Nổi bật
                        </div>
                      )}

                      <div className="absolute inset-0 bg-navy-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Link to={`/product/${product.slug}`} className="bg-white text-navy-900 font-bold py-2 px-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-safety-500 hover:text-white flex items-center shadow-lg">
                            <Eye size={16} className="mr-2" /> Xem chi tiết
                          </Link>
                      </div>
                    </div>
                    
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="text-[10px] font-bold text-safety-500 mb-1 uppercase tracking-wide">{product.brand}</div>
                      <Link to={`/product/${product.slug}`}>
                        <h3 className="text-base font-bold text-navy-900 mb-2 group-hover:text-safety-500 transition line-clamp-2 h-12" title={product.name}>
                          {product.name}
                        </h3>
                      </Link>
                      
                      <div className="mt-auto space-y-3">
                        <div className="flex items-center justify-between text-xs text-gray-500 bg-gray-50 p-2 rounded">
                          <span className="font-bold text-navy-900">{product.kva} kVA</span>
                          <span className="h-3 w-[1px] bg-gray-300"></span>
                          <span>{product.specs.engine}</span>
                        </div>
                        
                        <button 
                          onClick={() => {
                            // Scroll to quote modal or open it
                            setIsQuoteOpen(true);
                          }}
                          className="w-full block text-center border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-bold py-2 rounded text-xs uppercase transition duration-300"
                        >
                          Yêu cầu báo giá
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Load More Button - Only show if there are more products to load */}
              {visibleProductCount < displayProducts.length && (
                <div className="text-center mt-12">
                  <button 
                    onClick={handleLoadMoreProducts}
                    className="inline-flex items-center bg-white border border-gray-300 text-navy-900 font-bold py-3 px-8 rounded-full hover:bg-navy-900 hover:text-white hover:border-navy-900 transition shadow-sm"
                  >
                    Xem thêm sản phẩm <ChevronDown size={18} className="ml-2" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center text-gray-500 py-10">
              Không tìm thấy sản phẩm nào phù hợp với bộ lọc.
            </div>
          )}
        </div>
      </section>

      {/* 5. RECENT PROJECTS SLIDER (Simple Grid for now) */}
      <section className="py-16 bg-navy-900 text-white relative overflow-hidden">
         {/* Decor */}
         <div className="absolute top-0 right-0 p-20 opacity-5">
            <Settings size={400} />
         </div>

         <div className="container mx-auto px-4 relative z-10">
            <div className="flex justify-between items-end mb-10">
               <div>
                  <span className="text-safety-500 font-bold uppercase tracking-wider text-sm">Dự án tiêu biểu</span>
                  <h2 className="text-3xl font-heading font-bold mt-2">Đã Triển Khai</h2>
               </div>
               <Link to="/projects" className="hidden md:flex items-center text-sm font-bold hover:text-safety-500 transition">
                  Xem tất cả dự án <ArrowRight size={16} className="ml-2" />
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {projects.slice(0, 3).map((project, idx) => (
                  <Link to={`/project/${project.slug}`} key={project.id} className="group relative rounded-lg overflow-hidden aspect-video block cursor-pointer">
                     <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                     <div className="absolute bottom-0 left-0 w-full p-6">
                        <p className="text-safety-500 text-xs font-bold uppercase mb-1">{project.location}</p>
                        <h3 className="text-lg font-bold leading-snug group-hover:text-safety-400 transition">{project.title}</h3>
                     </div>
                  </Link>
               ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
                <Link to="/projects" className="inline-flex items-center text-sm font-bold hover:text-safety-500 transition">
                  Xem tất cả dự án <ArrowRight size={16} className="ml-2" />
               </Link>
            </div>
         </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-16 bg-gray-50">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <Quote className="mx-auto text-safety-500 mb-4" size={40} />
               <h2 className="text-3xl font-heading font-bold text-navy-900">Khách Hàng Nói Gì Về Chúng Tôi</h2>
               <p className="text-gray-500 mt-2">Những đánh giá thực tế từ các đối tác đã tin tưởng VNGPOWER</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {testimonials.map(t => (
                  <div key={t.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col h-full">
                     <div className="flex items-center mb-4">
                        <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover mr-3 border border-gray-200" />
                        <div>
                           <h4 className="font-bold text-sm text-navy-900">{t.name}</h4>
                           <p className="text-xs text-gray-500">{t.company}</p>
                        </div>
                     </div>
                     <div className="flex text-yellow-400 mb-3">
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                     </div>
                     <p className="text-gray-600 text-sm italic flex-grow">"{t.content}"</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. LATEST NEWS */}
      <section className="py-16 bg-white border-t border-gray-100">
         <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-10">
               <div>
                  <span className="text-safety-500 font-bold uppercase tracking-wider text-sm">Tin tức & Sự kiện</span>
                  <h2 className="text-3xl font-heading font-bold text-navy-900 mt-2">Góc Kỹ Thuật</h2>
               </div>
               <Link to="/blog" className="hidden md:flex items-center text-sm font-bold text-navy-900 hover:text-safety-500 transition">
                  Xem tất cả bài viết <ArrowRight size={16} className="ml-2" />
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {blogPosts.slice(0, 3).map(post => (
                  <article key={post.id} className="group cursor-pointer">
                     <div className="rounded-lg overflow-hidden mb-4 aspect-video">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                     </div>
                     <div className="flex items-center text-xs text-gray-500 mb-2 space-x-2">
                        <span className="bg-gray-100 px-2 py-1 rounded text-navy-900 font-bold">{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                     </div>
                     <Link to={`/blog/${post.slug}`}>
                        <h3 className="font-bold text-lg text-navy-900 group-hover:text-safety-500 transition line-clamp-2 mb-2">{post.title}</h3>
                     </Link>
                     <p className="text-gray-500 text-sm line-clamp-2">{post.excerpt}</p>
                  </article>
               ))}
            </div>
         </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
};

export default Home;
