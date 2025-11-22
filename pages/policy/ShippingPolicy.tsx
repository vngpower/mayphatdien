
import React from 'react';
import SEO from '../../components/SEO';
import { Truck, MapPin, Clock } from 'lucide-react';

const ShippingPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-28 md:pt-36 pb-20">
      <SEO title="Chính Sách Vận Chuyển" description="Quy định về vận chuyển, giao hàng và lắp đặt máy phát điện VNGPOWER." />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12 border border-gray-100">
          <h1 className="text-3xl font-heading font-bold text-navy-900 mb-6 border-b pb-4">Chính Sách Vận Chuyển & Lắp Đặt</h1>
          
          <div className="prose max-w-none text-gray-700">
            <p className="lead text-lg mb-6">
              VNGPOWER cung cấp dịch vụ vận chuyển và lắp đặt tận nơi trên toàn lãnh thổ Việt Nam, đảm bảo an toàn tuyệt đối cho thiết bị.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="font-bold text-navy-900 flex items-center mb-2"><Truck className="mr-2 text-safety-500"/> Phạm Vi Giao Hàng</h3>
                    <p className="text-sm">Toàn quốc (63 tỉnh thành). Chúng tôi có đội xe cẩu tự hành chuyên dụng từ 5 tấn đến 50 tấn.</p>
                </div>
                 <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="font-bold text-navy-900 flex items-center mb-2"><Clock className="mr-2 text-safety-500"/> Thời Gian Giao Hàng</h3>
                    <p className="text-sm">Từ 1-3 ngày đối với máy có sẵn. Từ 30-45 ngày đối với máy nhập khẩu theo đơn đặt hàng.</p>
                </div>
            </div>

            <h3 className="text-xl font-bold text-navy-900 mt-8 mb-4">1. Quy Trình Giao Nhận</h3>
            <p>Quy trình giao nhận máy phát điện bao gồm các bước sau:</p>
            <ul className="list-decimal list-inside space-y-2 mb-6 ml-4">
                <li><strong>Khảo sát vị trí:</strong> Kỹ thuật viên khảo sát đường đi, vị trí đặt máy để lên phương án cẩu/kéo máy phù hợp.</li>
                <li><strong>Vận chuyển:</strong> Sử dụng xe cẩu chuyên dụng vận chuyển máy đến công trình.</li>
                <li><strong>Đưa máy vào vị trí:</strong> Sử dụng rùa đẩy, kích thủy lực hoặc cẩu để đưa máy vào bệ máy đã chuẩn bị.</li>
                <li><strong>Lắp đặt:</strong> Đấu nối cáp động lực, ống khói, hệ thống nhiên liệu.</li>
                <li><strong>Nghiệm thu:</strong> Chạy thử tải và bàn giao hướng dẫn vận hành.</li>
            </ul>

            <h3 className="text-xl font-bold text-navy-900 mt-8 mb-4">2. Chi Phí Vận Chuyển</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Miễn phí:</strong> Giao hàng trong nội thành Hà Nội và TP.HCM (trong bán kính 20km) đối với máy công suất dưới 100kVA.</li>
                <li><strong>Có phí:</strong> Đối với các tỉnh xa hoặc các yêu cầu lắp đặt phức tạp (cẩu lên tầng cao, đưa xuống hầm sâu), chi phí sẽ được báo giá chi tiết trong hợp đồng.</li>
            </ul>

            <h3 className="text-xl font-bold text-navy-900 mt-8 mb-4">3. Trách Nhiệm Hàng Hóa</h3>
            <p>
                VNGPOWER chịu hoàn toàn trách nhiệm về rủi ro (mất mát, hư hỏng) của hàng hóa trong suốt quá trình vận chuyển từ kho đến địa điểm giao hàng chỉ định của Quý khách.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
