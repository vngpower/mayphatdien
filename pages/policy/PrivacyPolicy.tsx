
import React from 'react';
import SEO from '../../components/SEO';
import { Lock } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-28 md:pt-36 pb-20">
      <SEO title="Chính Sách Bảo Mật" description="Cam kết bảo mật thông tin khách hàng của VNGPOWER." />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12 border border-gray-100">
          <h1 className="text-3xl font-heading font-bold text-navy-900 mb-6 border-b pb-4">Chính Sách Bảo Mật Thông Tin</h1>
          
          <div className="prose max-w-none text-gray-700">
            <p className="lead text-lg mb-6">
              VNGPOWER cam kết bảo vệ sự riêng tư và an toàn thông tin cá nhân của Quý khách hàng. Chúng tôi tuân thủ nghiêm ngặt các quy định của pháp luật Việt Nam về bảo mật dữ liệu.
            </p>

            <h3 className="text-xl font-bold text-navy-900 mt-8 mb-4">1. Mục Đích Thu Thập Thông Tin</h3>
            <p>Thông tin cá nhân của Quý khách (Họ tên, Số điện thoại, Email, Địa chỉ, Tên công ty) được thu thập nhằm mục đích:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Tư vấn giải pháp và báo giá sản phẩm theo yêu cầu.</li>
                <li>Thực hiện giao hàng, lắp đặt và bảo hành.</li>
                <li>Gửi thông báo về các chương trình khuyến mãi, chăm sóc khách hàng (nếu Quý khách đồng ý).</li>
                <li>Hỗ trợ kỹ thuật khi có sự cố.</li>
            </ul>

            <h3 className="text-xl font-bold text-navy-900 mt-8 mb-4">2. Phạm Vi Sử Dụng Thông Tin</h3>
            <p>
                Thông tin cá nhân thu thập được sẽ chỉ được sử dụng trong nội bộ công ty VNGPOWER. Chúng tôi có thể chia sẻ tên và địa chỉ của Quý khách cho bộ phận vận chuyển hoặc đội ngũ kỹ thuật để thực hiện đơn hàng.
            </p>
            <p className="mt-2">
                Chúng tôi cam kết <strong>KHÔNG</strong> bán, trao đổi hay chia sẻ thông tin của Quý khách cho bất kỳ bên thứ ba nào khác vì mục đích thương mại.
            </p>

            <h3 className="text-xl font-bold text-navy-900 mt-8 mb-4">3. Thời Gian Lưu Trữ</h3>
            <p>
                Dữ liệu cá nhân của Quý khách sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân thành viên sẽ được bảo mật trên máy chủ của VNGPOWER.
            </p>

            <h3 className="text-xl font-bold text-navy-900 mt-8 mb-4">4. Cam Kết Bảo Mật</h3>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <p className="flex items-start">
                    <Lock className="mr-3 mt-1 text-green-600 flex-shrink-0"/>
                    Chúng tôi sử dụng các biện pháp kỹ thuật và an ninh thích hợp để ngăn chặn truy cập trái phép, sử dụng sai mục đích hoặc tiết lộ thông tin cá nhân của Quý khách.
                </p>
            </div>

            <h3 className="text-xl font-bold text-navy-900 mt-8 mb-4">5. Liên Hệ</h3>
            <p>
                Nếu Quý khách có bất kỳ câu hỏi nào về Chính sách bảo mật, vui lòng liên hệ với chúng tôi qua Email: <strong>contact@vngpower.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
