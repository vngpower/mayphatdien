
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getWPProductBySlug } from '../services/wordpressService';
import { Product } from '../types';
import { Check, FileText, Phone, ChevronRight, Loader2, Download } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';
import SEO from '../components/SEO';
import WPContentRenderer from '../components/WPContentRenderer';
import SecureImage from '../components/SecureImage';

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'docs'>('specs');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;
      setIsLoading(true);
      const data = await getWPProductBySlug(slug);
      setProduct(data || null);
      setIsLoading(false);
    };
    fetchData();
  }, [slug]);
  
  if (isLoading) {
     return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-navy-900" size={40} /></div>;
  }

  if (!product) {
    return <div className="container mx-auto py-32 text-center">Sản phẩm không tồn tại</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-28 md:pt-32 pb-10">
      <SEO 
        title={product.name}
        description={`${product.name} - Máy phát điện ${product.brand} ${product.kva}kVA. ${product.shortDescription || 'Chính hãng, giá tốt nhất thị trường.'}`}
        image={product.image}
        type="product"
      />

      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-xs text-gray-500 mb-6">
          <Link to="/" className="hover:text-navy-900">Trang chủ</Link>
          <ChevronRight size={14} className="mx-1" />
          <Link to="/" className="hover:text-navy-900">Sản phẩm</Link>
          <ChevronRight size={14} className="mx-1" />
          <span className="text-navy-900 font-bold truncate">{product.name}</span>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="p-8 md:p-12 bg-gray-100 flex items-center justify-center">
               {/* SecureImage used here */}
               <div className="w-full max-w-2xl relative">
                  <SecureImage 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500" 
                  />
               </div>
            </div>

            {/* Info Section */}
            <div className="p-8 md:p-12">
              <div className="inline-block bg-safety-100 text-safety-700 text-xs font-bold px-2 py-1 rounded mb-3">
                {product.brand.toUpperCase()}
              </div>
              <h1 className="text-3xl font-heading font-bold text-navy-900 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-6 text-sm">
                 <span className="text-gray-500">Model: <span className="text-navy-900 font-bold">{product.specs.model || `VNG-${product.id}`}</span></span>
                 <span className="text-green-600 font-bold flex items-center"><Check size={16} className="mr-1"/> Còn hàng</span>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {product.shortDescription} Máy phát điện VNGPOWER được nhập khẩu đồng bộ, đảm bảo hiệu suất hoạt động tối đa và độ bền bỉ theo thời gian.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg mb-8 border border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="block text-gray-500 text-xs">Công suất (kVA)</span>
                    <span className="font-bold text-navy-900 text-lg">{product.kva} kVA</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 text-xs">Động cơ</span>
                    <span className="font-bold text-navy-900">{product.specs.engine}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 text-xs">Tiêu hao nhiên liệu</span>
                    <span className="font-bold text-navy-900">{product.specs.fuelConsumption}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 text-xs">Xuất xứ</span>
                    <span className="font-bold text-navy-900">{product.specs.origin}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsQuoteOpen(true)}
                  className="flex-1 bg-safety-500 hover:bg-safety-400 text-navy-900 font-bold py-3 px-6 rounded transition shadow-lg shadow-safety-500/20 text-center"
                >
                  Yêu cầu báo giá
                </button>
                <a href="tel:0901389998" className="flex-1 border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-bold py-3 px-6 rounded transition flex items-center justify-center">
                  <Phone size={18} className="mr-2" /> 0901 38 9998
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
            <button 
              className={`pb-4 px-6 text-sm font-bold uppercase whitespace-nowrap border-b-2 transition ${activeTab === 'specs' ? 'border-safety-500 text-navy-900' : 'border-transparent text-gray-400 hover:text-navy-900'}`}
              onClick={() => setActiveTab('specs')}
            >
              Thông số kỹ thuật
            </button>
            <button 
              className={`pb-4 px-6 text-sm font-bold uppercase whitespace-nowrap border-b-2 transition ${activeTab === 'desc' ? 'border-safety-500 text-navy-900' : 'border-transparent text-gray-400 hover:text-navy-900'}`}
              onClick={() => setActiveTab('desc')}
            >
              Mô tả chi tiết
            </button>
            <button 
              className={`pb-4 px-6 text-sm font-bold uppercase whitespace-nowrap border-b-2 transition ${activeTab === 'docs' ? 'border-safety-500 text-navy-900' : 'border-transparent text-gray-400 hover:text-navy-900'}`}
              onClick={() => setActiveTab('docs')}
            >
              Tài liệu (Catalogue)
            </button>
          </div>

          <div className="min-h-[300px]">
            {activeTab === 'specs' && (
              <div className="overflow-x-auto">
                 <table className="w-full text-sm text-left text-gray-600">
                   <tbody className="divide-y divide-gray-100">
                     <tr className="bg-gray-50"><td className="py-3 px-4 font-medium w-1/3">Model</td><td className="py-3 px-4">{product.specs.model || product.name}</td></tr>
                     <tr><td className="py-3 px-4 font-medium">Công suất (kVA)</td><td className="py-3 px-4">{product.kva}</td></tr>
                     <tr className="bg-gray-50"><td className="py-3 px-4 font-medium">Động cơ</td><td className="py-3 px-4">{product.specs.engine}</td></tr>
                     <tr><td className="py-3 px-4 font-medium">Đầu phát</td><td className="py-3 px-4">{product.specs.alternator}</td></tr>
                     <tr className="bg-gray-50"><td className="py-3 px-4 font-medium">Tiêu hao nhiên liệu</td><td className="py-3 px-4">{product.specs.fuelConsumption}</td></tr>
                     <tr><td className="py-3 px-4 font-medium">Kích thước (DxRxC)</td><td className="py-3 px-4">{product.specs.dimensions}</td></tr>
                     <tr className="bg-gray-50"><td className="py-3 px-4 font-medium">Trọng lượng</td><td className="py-3 px-4">{product.specs.weight}</td></tr>
                     <tr><td className="py-3 px-4 font-medium">Hệ thống điều khiển</td><td className="py-3 px-4">{product.specs.controller}</td></tr>
                     <tr className="bg-gray-50"><td className="py-3 px-4 font-medium">Xuất xứ</td><td className="py-3 px-4">{product.specs.origin}</td></tr>
                   </tbody>
                 </table>
              </div>
            )}

            {activeTab === 'desc' && (
              <div>
                {product.longDescription ? (
                   <WPContentRenderer content={product.longDescription} />
                ) : (
                   <div className="text-gray-600 text-sm">
                     <p className="mb-4"><strong>Động cơ {product.brand}</strong> nổi tiếng toàn cầu về độ bền và khả năng hoạt động ổn định trong môi trường khắc nghiệt.</p>
                     <p className="italic text-gray-400">(Nội dung chi tiết đang được cập nhật từ hệ thống...)</p>
                   </div>
                )}
              </div>
            )}

            {activeTab === 'docs' && (
              <div className="flex flex-col items-center justify-center py-10 space-y-4">
                <FileText size={48} className="text-gray-300" />
                <p className="text-gray-500">Tải xuống catalogue kỹ thuật chi tiết cho dòng máy này.</p>
                
                {product.catalogueLink ? (
                   <a 
                      href={product.catalogueLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-navy-900 text-white px-6 py-2 rounded hover:bg-navy-800 transition flex items-center font-bold"
                   >
                      <Download size={18} className="mr-2" /> Tải Catalogue (PDF)
                   </a>
                ) : (
                   <button disabled className="bg-gray-100 text-gray-400 px-6 py-2 rounded cursor-not-allowed flex items-center font-bold border border-gray-200">
                      <Download size={18} className="mr-2" /> Chưa có tài liệu
                   </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} productName={product.name} />
    </div>
  );
};

export default ProductDetail;
