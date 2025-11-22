
import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { getWPPageBySlug } from '../services/wordpressService';
import { Building2, Factory, GraduationCap, Stethoscope, Hotel, HardHat, ChevronRight, Zap, CheckCircle } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';
import WPContentRenderer from '../components/WPContentRenderer';

const Solutions: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [pageContent, setPageContent] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch content from WordPress page with slug 'giai-phap'
      // You can create a page in WP named "Giải pháp" to edit the intro text
      const content = await getWPPageBySlug('giai-phap');
      setPageContent(content);
    };
    fetchData();
  }, []);

  const solutions = [
    {
      id: 'toa-nha',
      icon: <Building2 size={40} />,
      title: 'Tòa Nhà - Cao Ốc',
      description: 'Đảm bảo hoạt động thang máy, hệ thống PCCC, và chiếu sáng hành lang khi mất điện. Giải pháp giảm ồn tiêu chuẩn cao và xử lý khí thải tại chỗ.',
      features: ['ATS chuyển mạch nhanh < 10s', 'Tiêu âm phòng máy đạt chuẩn < 70dB', 'Hệ thống thoát khói DPF']
    },
    {
      id: 'nha-may',
      icon: <Factory size={40} />,
      title: 'Nhà Máy Sản Xuất',
      description: 'Nguồn điện liên tục cho dây chuyền sản xuất, tránh thiệt hại kinh tế do dừng máy đột ngột. Khả năng chịu tải biến thiên (Step load) cực tốt.',
      features: ['Chịu tải nặng Continuous', 'Hòa đồng bộ nhiều máy', 'Tiết kiệm nhiên liệu']
    },
    {
      id: 'benh-vien',
      icon: <Stethoscope size={40} />,
      title: 'Bệnh Viện - Y Tế',
      description: 'Nguồn điện "sống còn" cho phòng mổ và thiết bị hồi sức tích cực. Yêu cầu độ tin cậy 99.99% và khởi động tức thì.',
      features: ['Độ ổn định điện áp ±1%', 'Khởi động ngay lập tức', 'An toàn tuyệt đối']
    },
    {
      id: 'khach-san',
      icon: <Hotel size={40} />,
      title: 'Khách Sạn - Resort',
      description: 'Duy trì trải nghiệm khách hàng 5 sao. Máy vận hành siêu êm ái, không gây rung lắc ảnh hưởng đến kiến trúc và không gian nghỉ dưỡng.',
      features: ['Vỏ cách âm Super Silent', 'Sơn chống ăn mòn muối biển', 'Thẩm mỹ cao']
    },
    {
      id: 'truong-hoc',
      icon: <GraduationCap size={40} />,
      title: 'Trường Học - Giáo Dục',
      description: 'Đảm bảo việc giảng dạy và học tập không bị gián đoạn. Hệ thống an toàn, dễ vận hành cho nhân viên bảo vệ trường học.',
      features: ['Vận hành đơn giản', 'Chi phí đầu tư hợp lý', 'An toàn cháy nổ']
    },
    {
      id: 'xay-dung',
      icon: <HardHat size={40} />,
      title: 'Xây Dựng - Công Trình',
      description: 'Máy phát điện di động, bền bỉ, chịu được bụi bẩn và thời tiết khắc nghiệt tại công trường. Cung cấp điện cho cẩu tháp, máy hàn.',
      features: ['Khung bệ chắc chắn', 'Khả năng di động cao', 'Chống bụi nước IP54']
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <SEO 
        title="Giải Pháp Máy Phát Điện" 
        description="Giải pháp nguồn điện dự phòng chuyên nghiệp cho Tòa nhà, Nhà máy, Bệnh viện, Khách sạn. Tư vấn kỹ thuật chuyên sâu từ VNGPOWER." 
      />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
             alt="Solutions VNGPOWER" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-navy-900/80"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative text-center text-white">
           <span className="inline-block bg-safety-500 text-white text-xs font-bold px-4 py-2 rounded mb-6 uppercase tracking-widest animate-fade-in-up">
             VNGPOWER SOLUTIONS
           </span>
           <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 animate-fade-in-up delay-100">
             Giải Pháp Năng Lượng <br/> Cho Mọi Công Trình
           </h1>
           <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
             Chúng tôi thiết kế hệ thống điện dự phòng tối ưu hóa riêng biệt cho từng đặc thù ngành nghề kinh doanh của bạn.
           </p>
        </div>
      </section>

      {/* Introduction (Fetched from WP or Default) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {pageContent ? (
               <WPContentRenderer content={pageContent.content} className="prose-lg mx-auto" />
            ) : (
              <>
                <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">Tại sao cần giải pháp chuyên biệt?</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Mỗi lĩnh vực hoạt động đều có những yêu cầu kỹ thuật riêng biệt về nguồn điện. Một nhà máy sản xuất cần sự bền bỉ chịu tải liên tục, trong khi một khách sạn nghỉ dưỡng lại ưu tiên sự yên tĩnh tuyệt đối. VNGPOWER không chỉ bán máy, chúng tôi cung cấp <strong>giải pháp kỹ thuật "may đo"</strong> để đảm bảo hiệu quả đầu tư cao nhất và sự an toàn tuyệt đối cho hệ thống của bạn.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group flex flex-col h-full">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-navy-900 mb-6 group-hover:bg-safety-500 group-hover:text-white transition">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                  {item.description}
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                   <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                         <li key={idx} className="flex items-start text-xs font-bold text-gray-700">
                            <CheckCircle size={14} className="text-safety-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                         </li>
                      ))}
                   </ul>
                </div>

                <button 
                   onClick={() => setIsQuoteOpen(true)}
                   className="w-full bg-white border border-navy-900 text-navy-900 font-bold py-3 rounded hover:bg-navy-900 hover:text-white transition flex items-center justify-center mt-auto"
                >
                   Tư vấn giải pháp này <ChevronRight size={16} className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-navy-900 text-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-heading font-bold">Quy Trình Tư Vấn Giải Pháp</h2>
               <div className="w-24 h-1 bg-safety-500 mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
               <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-white/10 -z-0"></div>
               
               {[
                  { step: 1, title: 'Khảo sát', desc: 'Đo đạc công suất tiêu thụ thực tế & vị trí lắp đặt.' },
                  { step: 2, title: 'Thiết kế', desc: 'Lên phương án chọn máy, hệ thống phòng cách âm, thoát khói.' },
                  { step: 3, title: 'Triển khai', desc: 'Sản xuất, vận chuyển và lắp đặt trọn gói.' },
                  { step: 4, title: 'Bàn giao', desc: 'Chạy thử tải, đào tạo vận hành và bảo trì.' }
               ].map((item) => (
                  <div key={item.step} className="relative z-10 text-center group">
                     <div className="w-16 h-16 bg-navy-800 border-2 border-safety-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:bg-safety-500 transition">
                        {item.step}
                     </div>
                     <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                     <p className="text-gray-400 text-sm px-4">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-safety-500">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Bạn cần giải pháp cho công trình nào?</h2>
           <button 
              onClick={() => setIsQuoteOpen(true)}
              className="bg-navy-900 text-white font-bold py-4 px-12 rounded-full hover:bg-white hover:text-navy-900 transition shadow-xl text-lg"
           >
              LIÊN HỆ KỸ SƯ TƯ VẤN
           </button>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} productName="Yêu cầu tư vấn giải pháp" />
    </div>
  );
};

export default Solutions;
