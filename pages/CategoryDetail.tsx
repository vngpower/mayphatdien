
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getWPProducts, getWPCategoryBySlug } from '../services/wordpressService'; 
import { Product, Category } from '../types';
import { ChevronRight, Zap, FileText, ArrowRight, Loader2 } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';
import WPContentRenderer from '../components/WPContentRenderer';
import SecureImage from '../components/SecureImage';

const CategoryDetail: React.FC = () => {
  const { brandId } = useParams<{ brandId: string }>();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [brandProducts, setBrandProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
       if (!brandId) return;
       setIsLoading(true);
       
       // 1. Fetch Category Info (Dynamic from WP or Fallback)
       const catData = await getWPCategoryBySlug(brandId);
       setCategory(catData || null);

       // 2. Fetch Products & Filter
       const allProducts = await getWPProducts();
       const filtered = allProducts
          .filter(p => p.brand && p.brand.toLowerCase().includes(brandId.toLowerCase())) // Robust fuzzy check
          .sort((a, b) => a.kva - b.kva);
       setBrandProducts(filtered);
       
       setIsLoading(false);
    };
    loadData();
  }, [brandId]);

  if (isLoading) {
      return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-navy-900" size={40}/></div>;
  }

  if (!category) {
    return <div className="container mx-auto py-20 text-center">Danh mục không tồn tại</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-900/80"></div>
         </div>
         <div className="container mx-auto px-4 z-10 relative text-white">
           <div className="text-xs font-bold bg-safety-500 inline-block px-3 py-1 rounded mb-4 uppercase tracking-wider">
             Thương hiệu {category.origin}
           </div>
           <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4">{category.name}</h1>
           <p className="text-xl text-gray-300 max-w-2xl font-light">{category.desc}</p>
           <div className="mt-6 text-sm flex items-center text-safety-400 font-bold">
             <Zap className="mr-2" /> Dải công suất: {category.range}
           </div>
         </div>
      </section>

      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Main Info & Products */}
          <div className="lg:col-span-2">
             {/* Introduction Card */}
             <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-navy-900 mb-4 border-b border-gray-100 pb-2">Giới Thiệu Chung</h2>
                <div className="text-gray-600 leading-relaxed mb-6 text-justify">
                   {/* Use WPContentRenderer to handle HTML content properly */}
                   <WPContentRenderer content={category.longDesc} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {category.technicalSpecs.map((spec, idx) => (
                     <div key={idx} className="flex justify-between items-center border-b border-gray-100 py-3">
                        <span className="text-sm text-gray-500 font-medium">{spec.label}</span>
                        <span className="text-sm text-navy-900 font-bold text-right">{spec.value}</span>
                     </div>
                   ))}
                </div>
             </div>

             {/* Product List */}
             <div id="product-list">
               <div className="flex items-center justify-between mb-6">
                 <h2 className="text-2xl font-bold text-navy-900">Danh Sách Sản Phẩm</h2>
                 <span className="text-sm text-gray-500">{brandProducts.length} sản phẩm có sẵn</span>
               </div>
               
               <div className="space-y-4">
                 {brandProducts.map(product => (
                   <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition p-4 flex flex-col md:flex-row items-center gap-6 group">
                      {/* Image Section using SecureImage */}
                      <div className="w-full md:w-64 h-48 bg-gray-100 rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center relative">
                        <SecureImage 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                      </div>
                      <div className="flex-1">
                        <Link to={`/product/${product.slug}`}>
                          <h3 className="text-lg font-bold text-navy-900 hover:text-safety-500 transition mb-2">{product.name}</h3>
                        </Link>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                          <span className="bg-gray-100 px-2 py-1 rounded text-xs font-bold text-navy-900">{product.kva} kVA</span>
                          <span>Động cơ: {product.specs.engine}</span>
                          <span>Tiêu hao: {product.specs.fuelConsumption}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 w-full md:w-auto">
                        <Link 
                          to={`/product/${product.slug}`} 
                          className="px-6 py-2 border border-gray-300 text-navy-900 rounded text-sm font-bold hover:border-navy-900 hover:bg-navy-900 hover:text-white transition text-center"
                        >
                          Xem chi tiết
                        </Link>
                        <button 
                          onClick={() => setIsQuoteOpen(true)}
                          className="px-6 py-2 bg-safety-500 text-navy-900 rounded text-sm font-bold hover:bg-safety-400 transition shadow-sm text-center"
                        >
                          Báo giá
                        </button>
                      </div>
                   </div>
                 ))}

                 {brandProducts.length === 0 && (
                   <div className="text-center py-10 text-gray-500 bg-white rounded border border-dashed">
                     Hiện chưa có sản phẩm nào trong danh mục này.
                   </div>
                 )}
               </div>
             </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact Widget */}
              <div className="bg-navy-900 text-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Tư Vấn Kỹ Thuật</h3>
                <p className="text-gray-300 text-sm mb-6">Đội ngũ kỹ sư VNGPOWER sẵn sàng hỗ trợ bạn chọn công suất phù hợp 24/7.</p>
                <a href="tel:0901389998" className="block w-full bg-safety-500 hover:bg-safety-400 text-navy-900 font-bold py-3 rounded text-center transition mb-3">
                  GỌI NGAY: 0901 38 9998
                </a>
                <button onClick={() => setIsQuoteOpen(true)} className="block w-full bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold py-3 rounded text-center transition">
                  Yêu cầu báo giá
                </button>
              </div>

              {/* Catalogue Download */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center mb-4 text-navy-900">
                  <FileText className="mr-2" />
                  <h3 className="font-bold">Catalogue {category.id}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-4">Tải xuống tài liệu kỹ thuật chi tiết cho dòng máy phát điện {category.id}.</p>
                <button className="text-safety-500 font-bold text-sm flex items-center hover:underline">
                  Tải về (PDF) <ArrowRight size={14} className="ml-1" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} productName={`Tư vấn dòng máy ${category.id}`} />
    </div>
  );
};

export default CategoryDetail;
