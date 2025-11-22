
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getWPProducts, getWPPageBySlug } from '../services/wordpressService';
import { Product } from '../types';
import { CheckCircle, Phone, FileText, Star, Loader2, Zap } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';
import SEO from '../components/SEO';
import { COMPANY_INFO, CAPACITY_LIST } from '../constants';
import SecureImage from '../components/SecureImage';

const CapacityLanding: React.FC = () => {
  const { slug } = useParams<{ slug: string }>(); // e.g., "100kva"
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [pageContent, setPageContent] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Extract number from slug (e.g., "100kva" -> 100)
  const capacity = slug ? parseInt(slug.replace(/\D/g, '')) : 0;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      
      // 1. Get WP Page Content (Sales Copy)
      // Nếu có trang trong WP trùng slug (vd: 100kva), nội dung sẽ được ưu tiên hiển thị
      const content = await getWPPageBySlug(slug || '');
      setPageContent(content);

      // 2. Get Related Products (AUTO)
      // Tự động tìm sản phẩm có công suất +- 20% so với công suất trang hiện tại
      const allProducts = await getWPProducts();
      const filtered = allProducts.filter(p => {
         return p.kva >= capacity * 0.8 && p.kva <= capacity * 1.2;
      });
      
      setRelatedProducts(filtered);
      setIsLoading(false);
    };

    fetchData();
  }, [slug, capacity]);

  if (isLoading) {
      return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-navy-900" size={40} /></div>;
  }

  // Fallback Defaults (Nếu chưa viết bài trong WP thì hiện mặc định)
  const title = pageContent?.title || `Máy Phát Điện ${capacity}kVA`;
  
  // Excerpt đã được làm sạch trong service, không còn HTML thừa hay link "Read more"
  const descriptionHtml = pageContent?.excerpt || `Tổng hợp các dòng máy phát điện ${capacity}kVA chính hãng (Cummins, Hyundai, Mitsubishi...). Cam kết giá gốc nhà máy VNGPOWER. Bảo hành 24 tháng.`;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title={title}
        description={descriptionHtml}
      />
      
      {/* 1. HERO SALES SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-navy-900 text-white">
         <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1565619624098-e65978406562?q=80&w=2070&auto=format&fit=crop" 
                alt="Generator Factory" 
                className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900"></div>
         </div>

         <div className="container mx-auto px-4 relative z-10 text-center">
             <div className="inline-flex items-center justify-center bg-safety-500 text-white text-xs font-bold px-4 py-1 rounded-full mb-6 animate-fade-in-up">
                <Star size={12} className="mr-1 fill-current" /> GIÁ GỐC NHÀ MÁY (OEM)
             </div>
             
             <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 leading-tight animate-fade-in-up delay-100">
                {title}
             </h1>
             
             {/* Hiển thị đoạn mô tả ngắn gọn, sạch sẽ */}
             <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed">
                {descriptionHtml}
             </p>
             
             <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300">
                <button 
                    onClick={() => setIsQuoteOpen(true)}
                    className="bg-safety-500 hover:bg-safety-400 text-navy-900 font-bold py-4 px-10 rounded-full shadow-lg shadow-safety-500/30 transition transform hover:-translate-y-1 flex items-center justify-center"
                >
                    <Phone size={20} className="mr-2" /> NHẬN BÁO GIÁ NGAY
                </button>
                <a 
                    href="#products"
                    className="bg-transparent border border-white text-white hover:bg-white hover:text-navy-900 font-bold py-4 px-10 rounded-full transition transform hover:-translate-y-1 flex items-center justify-center"
                >
                    XEM CÁC DÒNG MÁY
                </a>
             </div>
         </div>
      </section>

      {/* 2. PRODUCT SERIES DISPLAY */}
      <section id="products" className="py-20 -mt-10 relative z-20">
         <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center bg-blue-50 text-navy-900 text-xs font-bold px-3 py-1 rounded mb-2">
                         <Zap size={14} className="mr-1 text-safety-500" /> GỢI Ý TỰ ĐỘNG
                    </div>
                    <h2 className="text-3xl font-bold text-navy-900 mb-2">Các Dòng Máy Phát Điện {capacity}kVA Tốt Nhất</h2>
                    <p className="text-gray-500">Danh sách sản phẩm có công suất tương đương, lắp ráp và phân phối bởi VNGPOWER</p>
                </div>

                {relatedProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedProducts.map(product => (
                            <div key={product.id} className="border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 group bg-white flex flex-col">
                                {/* Aspect Ratio 4:3 */}
                                <div className="relative overflow-hidden aspect-[4/3] bg-white rounded-t-lg border-b border-gray-100">
                                    <SecureImage 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                    />
                                    <div className="absolute top-2 right-2 bg-navy-900 text-white text-xs font-bold px-2 py-1 rounded shadow-md z-10">
                                        {product.brand}
                                    </div>
                                </div>
                                
                                <div className="p-6 flex flex-col flex-grow">
                                    <Link to={`/product/${product.slug}`}>
                                        <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-safety-500 transition h-14 line-clamp-2">
                                            {product.name}
                                        </h3>
                                    </Link>
                                    <ul className="text-sm text-gray-600 space-y-2 mb-6 flex-grow">
                                        <li className="flex justify-between border-b border-gray-50 pb-1">
                                            <span>Công suất:</span> <span className="font-bold text-navy-900">{product.kva} kVA</span>
                                        </li>
                                        <li className="flex justify-between border-b border-gray-50 pb-1">
                                            <span>Động cơ:</span> <span className="font-bold">{product.specs.engine}</span>
                                        </li>
                                        <li className="flex justify-between border-b border-gray-50 pb-1">
                                            <span>Tiêu hao:</span> <span className="font-bold">{product.specs.fuelConsumption}</span>
                                        </li>
                                    </ul>
                                    <div className="flex gap-2 mt-auto">
                                        <Link to={`/product/${product.slug}`} className="flex-1 text-center border border-gray-300 py-2 rounded text-sm font-bold hover:bg-navy-900 hover:text-white hover:border-navy-900 transition">
                                            Chi tiết
                                        </Link>
                                        <button 
                                            onClick={() => setIsQuoteOpen(true)}
                                            className="flex-1 text-center bg-safety-500 text-navy-900 py-2 rounded text-sm font-bold hover:bg-safety-400 shadow-sm transition"
                                        >
                                            Báo giá
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                        Hệ thống đang cập nhật danh sách sản phẩm {capacity}kVA. Vui lòng liên hệ Hotline để được gửi Catalogue chi tiết.
                    </div>
                )}
            </div>
         </div>
      </section>

      {/* 3. SALES COPY CONTENT */}
      <section className="py-16">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
               {/* Main Content Area */}
               <div className="lg:col-span-2">
                   {pageContent ? (
                       <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                            <style>{`
                                .prose h2 { color: #0a192f; font-weight: 800; margin-top: 2em; margin-bottom: 1em; font-size: 1.5rem; }
                                .prose h3 { color: #0a192f; font-weight: 700; margin-top: 1.5em; font-size: 1.25rem; }
                                .prose ul { list-style-type: disc; padding-left: 1.5em; }
                                .prose li { margin-bottom: 0.5em; }
                                .prose strong { color: #0a192f; }
                                .prose table { width: 100%; border-collapse: collapse; margin: 1.5em 0; font-size: 0.9em; }
                                .prose th { background-color: #0a192f; color: white; padding: 10px; text-align: left; }
                                .prose td { border: 1px solid #e5e7eb; padding: 10px; }
                                .prose tr:nth-child(even) { background-color: #f9fafb; }
                            `}</style>
                           <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
                       </div>
                   ) : (
                       <div className="prose prose-lg max-w-none text-gray-700">
                           <h2 className="text-2xl font-bold text-navy-900">Tại sao nên chọn Máy phát điện {capacity}kVA của VNGPOWER?</h2>
                           <p>
                               Với kinh nghiệm hơn 15 năm trong lĩnh vực sản xuất và lắp ráp máy phát điện, VNGPOWER mang đến cho khách hàng dòng máy {capacity}kVA với chất lượng vượt trội và giá thành cạnh tranh nhất thị trường.
                           </p>
                           
                           <h3 className="text-xl font-bold text-navy-900">1. Động cơ chính hãng, mạnh mẽ</h3>
                           <p>
                               Chúng tôi sử dụng các dòng động cơ nổi tiếng như Cummins, Hyundai, Mitsubishi... đảm bảo máy hoạt động bền bỉ, chịu tải tốt và tiết kiệm nhiên liệu.
                           </p>

                           <h3 className="text-xl font-bold text-navy-900">2. Vỏ cách âm tiêu chuẩn VNGPOWER</h3>
                           <p>
                               Hệ thống vỏ cách âm được sản xuất trực tiếp tại nhà máy VNGPOWER với thép dày 2mm, sơn tĩnh điện, vật liệu tiêu âm chất lượng cao, đảm bảo độ ồn &lt; 70dB tại 7m.
                           </p>
                       </div>
                   )}
               </div>

               {/* Sidebar */}
               <div className="lg:col-span-1 space-y-8">
                   <div className="bg-navy-900 text-white p-6 rounded-xl shadow-lg sticky top-24">
                        <h3 className="text-xl font-bold mb-4 text-center">Cần Tư Vấn {capacity}kVA?</h3>
                        <ul className="space-y-4 mb-6">
                            <li className="flex items-center text-sm">
                                <CheckCircle size={16} className="text-safety-500 mr-2" /> Khảo sát miễn phí tận nơi
                            </li>
                            <li className="flex items-center text-sm">
                                <CheckCircle size={16} className="text-safety-500 mr-2" /> Lên phương án lắp đặt
                            </li>
                            <li className="flex items-center text-sm">
                                <CheckCircle size={16} className="text-safety-500 mr-2" /> Báo giá chi tiết 3 option
                            </li>
                        </ul>
                        <a 
                            href={`tel:${COMPANY_INFO.hotline.replace(/\s/g, '')}`}
                            className="block w-full bg-safety-500 hover:bg-safety-400 text-navy-900 font-bold py-3 rounded text-center mb-3"
                        >
                            GỌI NGAY: {COMPANY_INFO.hotline}
                        </a>
                        <button 
                            onClick={() => setIsQuoteOpen(true)}
                            className="block w-full bg-transparent border border-white hover:bg-white hover:text-navy-900 text-white font-bold py-3 rounded text-center"
                        >
                            Yêu cầu báo giá
                        </button>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. CTA Footer - Navigation */}
      <section className="bg-gray-100 py-12 border-t border-gray-200">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Bạn cần công suất khác?</h2>
              <div className="flex flex-wrap justify-center gap-3">
                 {CAPACITY_LIST.slice(0, 15).map(k => (
                     <Link 
                        key={k}
                        to={`/cong-suat/${k}kva`}
                        className={`px-4 py-2 rounded-full text-sm font-bold border transition ${k === capacity ? 'bg-navy-900 text-white border-navy-900' : 'bg-white text-gray-600 border-gray-300 hover:border-safety-500 hover:text-safety-500'}`}
                     >
                         {k} kVA
                     </Link>
                 ))}
              </div>
          </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} productName={`Yêu cầu báo giá dòng máy ${capacity}kVA`} />
    </div>
  );
};

export default CapacityLanding;
