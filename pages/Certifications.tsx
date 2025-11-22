
import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { getWPPageBySlug } from '../services/wordpressService';
import { Award, CheckCircle, ShieldCheck, FileText, Leaf } from 'lucide-react';
import WPContentRenderer from '../components/WPContentRenderer';

const Certifications: React.FC = () => {
  const [pageContent, setPageContent] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch content from WordPress page with slug 'chung-nhan-iso'
      const content = await getWPPageBySlug('chung-nhan-iso');
      setPageContent(content);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <SEO 
        title="Chứng Nhận ISO & OEM" 
        description="VNGPOWER đạt chuẩn ISO 9001:2015 (Chất lượng) & ISO 14001:2015 (Môi trường). Chứng nhận OEM chính hãng Hyundai Doosan." 
      />

      {/* Hero Section */}
      <section className="bg-navy-900 pt-32 pb-16 md:pt-48 md:pb-24 text-center text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
         <div className="container mx-auto px-4 relative z-10 pt-10">
            <div className="inline-flex items-center justify-center bg-safety-500 text-white text-xs font-bold px-4 py-1 rounded-full mb-6">
                <Award size={14} className="mr-2" /> TIÊU CHUẨN QUỐC TẾ
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Chứng Nhận & Giải Thưởng</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">Minh chứng cho cam kết về Chất lượng, Môi trường và Nguồn gốc xuất xứ của VNGPOWER.</p>
         </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        
        {/* ISO Standards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* ISO 9001 */}
            <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col md:flex-row gap-6 items-start">
                 <div className="flex-shrink-0 mx-auto md:mx-0">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/ISO_9001-2015.svg/1200px-ISO_9001-2015.svg.png" 
                      alt="ISO 9001:2015" 
                      className="w-32 h-auto object-contain"
                    />
                 </div>
                 <div>
                    <h2 className="text-xl font-bold text-navy-900 mb-3">Quản Lý Chất Lượng ISO 9001:2015</h2>
                    <p className="text-sm text-gray-600 mb-4 text-justify">
                       Hệ thống quản lý chặt chẽ từ khâu nhập khẩu linh kiện, sản xuất vỏ cách âm, lắp ráp hoàn thiện đến quy trình kiểm tra thử tải (Test Load) trước khi xuất xưởng.
                    </p>
                    <ul className="space-y-2">
                       <li className="flex items-center text-xs font-bold text-navy-900">
                          <CheckCircle size={14} className="text-safety-500 mr-2" /> Kiểm soát lỗi &lt; 0.1%
                       </li>
                       <li className="flex items-center text-xs font-bold text-navy-900">
                          <CheckCircle size={14} className="text-safety-500 mr-2" /> Quy trình chuẩn hóa toàn diện
                       </li>
                    </ul>
                 </div>
            </div>

            {/* ISO 14001 */}
            <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col md:flex-row gap-6 items-start">
                 <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="w-32 h-32 flex items-center justify-center bg-green-50 rounded-full border-4 border-green-500 text-green-600 font-bold text-xl text-center p-2">
                        ISO <br/> 14001:2015
                    </div>
                 </div>
                 <div>
                    <h2 className="text-xl font-bold text-navy-900 mb-3 flex items-center">
                        Quản Lý Môi Trường <Leaf className="ml-2 text-green-500" size={20}/>
                    </h2>
                    <p className="text-sm text-gray-600 mb-4 text-justify">
                       Cam kết giảm thiểu tác động đến môi trường. VNGPOWER áp dụng công nghệ sơn tĩnh điện không dung môi độc hại và hệ thống xử lý khí thải, tiếng ồn đạt chuẩn TCVN.
                    </p>
                    <ul className="space-y-2">
                       <li className="flex items-center text-xs font-bold text-navy-900">
                          <CheckCircle size={14} className="text-green-500 mr-2" /> Vật liệu thân thiện môi trường
                       </li>
                       <li className="flex items-center text-xs font-bold text-navy-900">
                          <CheckCircle size={14} className="text-green-500 mr-2" /> Tiết kiệm năng lượng sản xuất
                       </li>
                    </ul>
                 </div>
            </div>
        </div>

        {/* Main Content from WordPress */}
        {pageContent && (
           <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 border border-gray-100 mb-12">
              <WPContentRenderer content={pageContent.content} className="prose-lg max-w-none" />
           </div>
        )}

        {/* Certificate Gallery */}
        <section className="mb-16">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-navy-900">Hồ Sơ Pháp Lý & Chứng Chỉ</h2>
              <p className="text-gray-500 mt-2">Các chứng nhận quan trọng khẳng định năng lực của VNGPOWER</p>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                 { title: 'Giấy Phép Kinh Doanh', img: 'https://via.placeholder.com/400x550?text=GPKD' },
                 { title: 'Chứng Nhận ISO 9001:2015', img: 'https://via.placeholder.com/400x550?text=ISO+9001' },
                 { title: 'Chứng Nhận ISO 14001:2015', img: 'https://via.placeholder.com/400x550?text=ISO+14001' },
                 { title: 'Chứng Nhận OEM Hyundai Doosan', img: 'https://via.placeholder.com/400x550?text=OEM+Hyundai+Doosan' }
              ].map((cert, idx) => (
                 <div key={idx} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition border border-gray-100 group text-center">
                    <div className="aspect-[3/4] overflow-hidden rounded-md mb-4 bg-gray-50 flex items-center justify-center relative">
                       <img src={cert.img} alt={cert.title} className="w-full h-full object-cover group-hover:opacity-90 transition" />
                       <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <ShieldCheck size={40} className="text-safety-500 drop-shadow-lg" />
                       </div>
                    </div>
                    <h3 className="font-bold text-navy-900 text-sm group-hover:text-safety-500 transition">{cert.title}</h3>
                 </div>
              ))}
           </div>
        </section>

        {/* Commitment Section */}
        <section className="bg-blue-50 rounded-xl p-10 text-center">
             <FileText size={48} className="text-navy-900 mx-auto mb-4" />
             <h2 className="text-2xl font-bold text-navy-900 mb-4">Cam Kết Về Nguồn Gốc Xuất Xứ (CO/CQ)</h2>
             <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                VNGPOWER cam kết 100% máy phát điện và thiết bị cung cấp đều mới 100%, chính hãng. 
                Khi bàn giao máy, chúng tôi cung cấp đầy đủ bộ hồ sơ pháp lý bao gồm: 
                <strong> CO (Certificate of Origin)</strong> - Chứng nhận xuất xứ, 
                <strong> CQ (Certificate of Quality)</strong> - Chứng nhận chất lượng, 
                Tờ khai hải quan (đối với máy nhập khẩu) và Phiếu bảo hành chính hãng.
             </p>
             <a href="/files/Ho-So-Nang-Luc-VNGPOWER.pdf" target="_blank" className="inline-block bg-navy-900 text-white font-bold py-3 px-8 rounded hover:bg-safety-500 hover:text-navy-900 transition">
                XEM HỒ SƠ NĂNG LỰC
             </a>
        </section>

      </div>
    </div>
  );
};

export default Certifications;
