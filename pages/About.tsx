
import React from 'react';
import { CheckCircle, Shield, Users, Award, Target, Briefcase, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
       <SEO 
        title="Giới Thiệu" 
        description="VNGPOWER - Lịch sử hình thành và phát triển. Hơn 15 năm kinh nghiệm sản xuất máy phát điện công nghiệp tại Việt Nam."
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
             alt="VNGPOWER Factory" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-navy-900/80"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative text-center text-white">
           <span className="inline-block bg-safety-500 text-white text-xs font-bold px-4 py-2 rounded mb-6 uppercase tracking-widest animate-fade-in-up">
             Về Chúng Tôi
           </span>
           <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 animate-fade-in-up delay-100">
             Kiến Tạo Nguồn Năng Lượng <br/> <span className="text-safety-500">Bền Vững & Tin Cậy</span>
           </h1>
           <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
             Hơn 15 năm hình thành và phát triển, VNGPOWER tự hào là nhà sản xuất máy phát điện công nghiệp (OEM) hàng đầu tại Việt Nam.
           </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                 <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-100 rounded-full -z-10"></div>
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-safety-50 rounded-full -z-10"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2070&auto=format&fit=crop" 
                    alt="VNGPOWER CEO and Team"
                    className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                 />
                 <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-xl max-w-xs border-l-4 border-safety-500">
                    <p className="font-heading font-bold text-navy-900 text-lg">"Chất lượng là danh dự"</p>
                    <p className="text-sm text-gray-500 mt-2">Phương châm hoạt động xuyên suốt của chúng tôi.</p>
                 </div>
              </div>
              <div>
                 <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">Câu Chuyện VNGPOWER</h2>
                 <p className="text-gray-600 mb-6 leading-relaxed text-lg text-justify">
                    Được thành lập từ năm 2008, xuất phát điểm là một đơn vị thương mại nhỏ chuyên nhập khẩu máy phát điện bãi. Nhận thấy nhu cầu thị trường về các sản phẩm chất lượng cao nhưng giá thành hợp lý, ban lãnh đạo VNGPOWER đã quyết định chuyển mình mạnh mẽ sang mô hình <strong>sản xuất và lắp ráp (OEM)</strong>.
                 </p>
                 <p className="text-gray-600 mb-8 leading-relaxed text-lg text-justify">
                    Chúng tôi đầu tư xây dựng nhà máy tại Quận 12, TP.HCM với dây chuyền chấn dập CNC hiện đại. Tại đây, VNGPOWER nhập khẩu động cơ và đầu phát chính hãng từ các đối tác chiến lược (Cummins, Mitsubishi, Hyundai...), sau đó thiết kế và sản xuất vỏ cách âm, khung bệ và lắp ráp hoàn thiện tại nhà máy VNGPOWER theo tiêu chuẩn ISO 9001:2015.
                 </p>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center">
                       <CheckCircle className="text-safety-500 mr-3" size={24} />
                       <span className="font-bold text-navy-900">100% Chính Hãng</span>
                    </div>
                    <div className="flex items-center">
                       <CheckCircle className="text-safety-500 mr-3" size={24} />
                       <span className="font-bold text-navy-900">ISO 9001:2015</span>
                    </div>
                    <div className="flex items-center">
                       <CheckCircle className="text-safety-500 mr-3" size={24} />
                       <span className="font-bold text-navy-900">Giá Gốc Nhà Máy</span>
                    </div>
                    <div className="flex items-center">
                       <CheckCircle className="text-safety-500 mr-3" size={24} />
                       <span className="font-bold text-navy-900">Bảo Trì 24/7</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition">
                  <div className="w-16 h-16 bg-safety-500 rounded-full flex items-center justify-center mb-6">
                     <Target size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Tầm Nhìn</h3>
                  <p className="text-gray-300 leading-relaxed">
                     Trở thành thương hiệu máy phát điện công nghiệp số 1 tại Việt Nam và xuất khẩu sang thị trường Đông Nam Á vào năm 2030.
                  </p>
               </div>
               <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                     <Briefcase size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Sứ Mệnh</h3>
                  <p className="text-gray-300 leading-relaxed">
                     Cung cấp giải pháp năng lượng dự phòng an toàn, ổn định và kinh tế nhất cho các doanh nghiệp, góp phần vào sự phát triển công nghiệp hóa đất nước.
                  </p>
               </div>
               <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                     <Award size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Giá Trị Cốt Lõi</h3>
                  <p className="text-gray-300 leading-relaxed">
                     <strong>Tín:</strong> Giữ cam kết.<br/>
                     <strong>Tâm:</strong> Làm việc bằng cái tâm.<br/>
                     <strong>Tốc:</strong> Phản hồi và xử lý nhanh chóng.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-gray-50">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900">Lịch Sử Hình Thành</h2>
               <div className="w-24 h-1 bg-safety-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="relative">
               {/* Vertical Line */}
               <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

               <div className="space-y-12">
                  {/* Milestone 1 */}
                  <div className="flex flex-col md:flex-row items-center justify-between relative">
                     <div className="w-full md:w-5/12 order-2 md:order-1 md:text-right p-6 bg-white rounded-xl shadow-md border-r-4 border-safety-500 md:border-r-0 md:border-l-0 md:mr-auto">
                        <h3 className="text-2xl font-bold text-navy-900">2008</h3>
                        <h4 className="text-lg font-bold text-safety-500 mb-2">Thành lập công ty</h4>
                        <p className="text-gray-600">Khởi đầu là Công ty TNHH TM DV Kỹ Thuật Việt Nhật, chuyên bảo trì và sửa chữa máy phát điện.</p>
                     </div>
                     <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-safety-500 rounded-full border-4 border-white items-center justify-center z-10">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                     </div>
                     <div className="w-full md:w-5/12 order-1 md:order-2"></div>
                  </div>

                  {/* Milestone 2 */}
                  <div className="flex flex-col md:flex-row items-center justify-between relative">
                     <div className="w-full md:w-5/12 order-2 md:order-1"></div>
                     <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-navy-900 rounded-full border-4 border-white items-center justify-center z-10">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                     </div>
                     <div className="w-full md:w-5/12 order-1 md:order-2 p-6 bg-white rounded-xl shadow-md border-l-4 border-navy-900 md:border-l-0">
                        <h3 className="text-2xl font-bold text-navy-900">2012</h3>
                        <h4 className="text-lg font-bold text-safety-500 mb-2">Xây dựng nhà máy</h4>
                        <p className="text-gray-600">Khánh thành nhà máy lắp ráp tại Quận 12, TP.HCM quy mô 2000m2. Bắt đầu sản xuất vỏ cách âm thương hiệu VNGPOWER.</p>
                     </div>
                  </div>

                   {/* Milestone 3 */}
                   <div className="flex flex-col md:flex-row items-center justify-between relative">
                     <div className="w-full md:w-5/12 order-2 md:order-1 md:text-right p-6 bg-white rounded-xl shadow-md border-r-4 border-safety-500 md:border-r-0 md:border-l-0 md:mr-auto">
                        <h3 className="text-2xl font-bold text-navy-900">2015</h3>
                        <h4 className="text-lg font-bold text-safety-500 mb-2">Hợp tác chiến lược</h4>
                        <p className="text-gray-600">Ký kết hợp tác OEM với các hãng động cơ lớn: Cummins (USA), Mitsubishi (Japan), Doosan (Korea).</p>
                     </div>
                     <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-safety-500 rounded-full border-4 border-white items-center justify-center z-10">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                     </div>
                     <div className="w-full md:w-5/12 order-1 md:order-2"></div>
                  </div>

                  {/* Milestone 4 */}
                  <div className="flex flex-col md:flex-row items-center justify-between relative">
                     <div className="w-full md:w-5/12 order-2 md:order-1"></div>
                     <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-navy-900 rounded-full border-4 border-white items-center justify-center z-10">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                     </div>
                     <div className="w-full md:w-5/12 order-1 md:order-2 p-6 bg-white rounded-xl shadow-md border-l-4 border-navy-900 md:border-l-0">
                        <h3 className="text-2xl font-bold text-navy-900">2018</h3>
                        <h4 className="text-lg font-bold text-safety-500 mb-2">Chứng nhận ISO 9001:2015</h4>
                        <p className="text-gray-600">Chuẩn hóa toàn bộ quy trình sản xuất và quản lý chất lượng theo tiêu chuẩn quốc tế.</p>
                     </div>
                  </div>

                  {/* Milestone 5 */}
                   <div className="flex flex-col md:flex-row items-center justify-between relative">
                     <div className="w-full md:w-5/12 order-2 md:order-1 md:text-right p-6 bg-white rounded-xl shadow-md border-r-4 border-safety-500 md:border-r-0 md:border-l-0 md:mr-auto">
                        <h3 className="text-2xl font-bold text-navy-900">2023</h3>
                        <h4 className="text-lg font-bold text-safety-500 mb-2">Vươn tầm cao mới</h4>
                        <p className="text-gray-600">Đạt mốc 1000+ dự án hoàn thành. Mở rộng quy mô nhà máy lên 5000m2 và xuất khẩu lô hàng đầu tiên sang Campuchia.</p>
                     </div>
                     <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-safety-500 rounded-full border-4 border-white items-center justify-center z-10">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                     </div>
                     <div className="w-full md:w-5/12 order-1 md:order-2"></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Solutions / Services */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900">Giải Pháp Toàn Diện</h2>
               <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Không chỉ bán máy, chúng tôi cung cấp giải pháp năng lượng trọn gói từ A-Z.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               <div className="p-6 border border-gray-100 rounded-xl hover:shadow-xl transition group bg-gray-50">
                  <div className="bg-white w-14 h-14 rounded-lg shadow-sm flex items-center justify-center mb-6 text-safety-500 group-hover:bg-safety-500 group-hover:text-white transition">
                     <Users size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Tư Vấn & Thiết Kế</h3>
                  <p className="text-gray-600 text-sm">Khảo sát thực tế, tính toán công suất tiêu thụ và thiết kế hệ thống phòng máy, ống khói, tiêu âm miễn phí.</p>
               </div>
               <div className="p-6 border border-gray-100 rounded-xl hover:shadow-xl transition group bg-gray-50">
                   <div className="bg-white w-14 h-14 rounded-lg shadow-sm flex items-center justify-center mb-6 text-safety-500 group-hover:bg-safety-500 group-hover:text-white transition">
                     <Target size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Sản Xuất & Lắp Đặt</h3>
                  <p className="text-gray-600 text-sm">Lắp ráp tổ máy, sản xuất vỏ cách âm, thi công lắp đặt trọn gói bao gồm cả hệ thống chuyển nguồn ATS và tủ hòa đồng bộ.</p>
               </div>
               <div className="p-6 border border-gray-100 rounded-xl hover:shadow-xl transition group bg-gray-50">
                   <div className="bg-white w-14 h-14 rounded-lg shadow-sm flex items-center justify-center mb-6 text-safety-500 group-hover:bg-safety-500 group-hover:text-white transition">
                     <Shield size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Bảo Trì & Bảo Dưỡng</h3>
                  <p className="text-gray-600 text-sm">Dịch vụ bảo trì định kỳ theo tiêu chuẩn hãng. Cung cấp phụ tùng thay thế chính hãng với giá gốc.</p>
               </div>
               <div className="p-6 border border-gray-100 rounded-xl hover:shadow-xl transition group bg-gray-50">
                   <div className="bg-white w-14 h-14 rounded-lg shadow-sm flex items-center justify-center mb-6 text-safety-500 group-hover:bg-safety-500 group-hover:text-white transition">
                     <Clock size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Ứng Cứu Sự Cố 24/7</h3>
                  <p className="text-gray-600 text-sm">Đội ngũ kỹ thuật trực chiến 24/7, cam kết có mặt tại hiện trường trong vòng 2-4 giờ để xử lý sự cố.</p>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
       <section className="py-16 bg-navy-900 text-center text-white">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold mb-4">Sẵn Sàng Đồng Hành Cùng Dự Án Của Bạn</h2>
           <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Hãy để VNGPOWER trở thành đối tác tin cậy cung cấp nguồn điện dự phòng cho doanh nghiệp của bạn.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-safety-500 hover:bg-safety-400 text-navy-900 font-bold py-4 px-10 rounded-full shadow-lg transition">
                 LIÊN HỆ NGAY
              </Link>
              <Link to="/projects" className="bg-transparent border border-white text-white hover:bg-white hover:text-navy-900 font-bold py-4 px-10 rounded-full transition">
                 XEM HỒ SƠ NĂNG LỰC
              </Link>
           </div>
         </div>
      </section>
    </div>
  );
};

export default About;
