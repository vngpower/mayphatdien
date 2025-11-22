
import React from 'react';
import SEO from '../../components/SEO';
import { Shield, CheckCircle, AlertTriangle } from 'lucide-react';

const WarrantyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-28 md:pt-36 pb-20">
      <SEO title="Chính Sách Bảo Hành" description="Chính sách bảo hành máy phát điện VNGPOWER. Bảo hành 24 tháng hoặc 2000 giờ chạy máy." />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12 border border-gray-100">
          <h1 className="text-3xl font-heading font-bold text-navy-900 mb-6 border-b pb-4">Chính Sách Bảo Hành</h1>
          
          <div className="prose max-w-none text-gray-700">
            <p className="lead text-lg mb-6">
              Tại VNGPOWER, chúng tôi cam kết cung cấp sản phẩm chất lượng cao cùng dịch vụ bảo hành chuyên nghiệp để đảm bảo hệ thống điện dự phòng của Quý khách luôn hoạt động ổn định nhất.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
              <h3 className="text-xl font-bold text-navy-900 mb-2 flex items-center">
                <Shield className="mr-2 text-blue-500" /> Thời Gian Bảo Hành
              </h3>
              <p>
                Tất cả máy phát điện do VNGPOWER cung cấp và lắp đặt đều được bảo hành <strong>24 tháng</strong> hoặc <strong>2000 giờ chạy máy</strong> (tùy điều kiện nào đến trước) kể từ ngày nghiệm thu bàn giao.
              </p>
            </div>

            <h3 className="text-xl font-bold text-navy-900 mt-8 mb-4">1. Phạm Vi Bảo Hành</h3>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-start"><CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} /> Sửa chữa hoặc thay thế phụ tùng miễn phí cho các hư hỏng do lỗi của nhà sản xuất.</li>
              <li className="flex items-start"><CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} /> Bảo hành bao gồm động cơ, đầu phát điện và bảng điều khiển.</li>
              <li className="flex items-start"><CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} /> Kỹ thuật viên sẽ có mặt tại hiện trường để xử lý sự cố trong vòng 2-4 giờ (tại Hà Nội & TP.HCM) và 12-24 giờ (tại các tỉnh thành khác).</li>
            </ul>

            <h3 className="text-xl font-bold text-navy-900 mt-8 mb-4">2. Điều Kiện Không Được Bảo Hành</h3>
            <p className="mb-4">VNGPOWER sẽ không chịu trách nhiệm bảo hành trong các trường hợp sau:</p>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-start"><AlertTriangle className="text-orange-500 mr-2 mt-1 flex-shrink-0" size={18} /> Hư hỏng do vận hành sai quy trình, không tuân thủ hướng dẫn sử dụng.</li>
              <li className="flex items-start"><AlertTriangle className="text-orange-500 mr-2 mt-1 flex-shrink-0" size={18} /> Hư hỏng do thiên tai, hỏa hoạn, ngập nước hoặc các nguyên nhân bất khả kháng.</li>
              <li className="flex items-start"><AlertTriangle className="text-orange-500 mr-2 mt-1 flex-shrink-0" size={18} /> Sử dụng nhiên liệu, dầu nhớt không đúng chủng loại hoặc kém chất lượng.</li>
              <li className="flex items-start"><AlertTriangle className="text-orange-500 mr-2 mt-1 flex-shrink-0" size={18} /> Tự ý tháo dỡ, sửa chữa hoặc thay đổi kết cấu máy mà không có sự đồng ý của VNGPOWER.</li>
            </ul>

            <h3 className="text-xl font-bold text-navy-900 mt-8 mb-4">3. Cam Kết Hỗ Trợ</h3>
            <p>
              Ngay cả khi hết thời gian bảo hành, VNGPOWER vẫn cam kết cung cấp dịch vụ bảo trì, sửa chữa và cung cấp phụ tùng chính hãng trọn đời cho tổ máy với mức giá ưu đãi nhất cho khách hàng cũ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarrantyPolicy;
