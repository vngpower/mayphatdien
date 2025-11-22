
import React from 'react';
import SEO from '../../components/SEO';
import { CreditCard, Building2 } from 'lucide-react';

const PaymentPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-28 md:pt-36 pb-20">
      <SEO title="Hình Thức Thanh Toán" description="Các phương thức thanh toán khi mua máy phát điện tại VNGPOWER." />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12 border border-gray-100">
          <h1 className="text-3xl font-heading font-bold text-navy-900 mb-6 border-b pb-4">Hình Thức Thanh Toán</h1>
          
          <div className="prose max-w-none text-gray-700">
            <p className="lead text-lg mb-6">
              VNGPOWER hỗ trợ đa dạng các hình thức thanh toán linh hoạt để thuận tiện nhất cho khách hàng doanh nghiệp và cá nhân.
            </p>

            <h3 className="text-xl font-bold text-navy-900 mt-8 mb-4">1. Phương Thức Thanh Toán</h3>
            <p>Chúng tôi chấp nhận thanh toán duy nhất qua chuyển khoản ngân hàng vào tài khoản công ty để đảm bảo tính pháp lý và minh bạch.</p>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-4">
                <h4 className="font-bold text-navy-900 flex items-center mb-3"><Building2 className="mr-2 text-safety-500"/> Thông Tin Tài Khoản</h4>
                <ul className="space-y-2 text-sm">
                    <li><strong>Tên tài khoản:</strong> CÔNG TY CỔ PHẦN MÁY PHÁT ĐIỆN VNGPOWER</li>
                    <li><strong>Số tài khoản:</strong> 0901 38 9998</li>
                    <li><strong>Ngân hàng:</strong> MB Bank (Ngân hàng Quân Đội) - Chi nhánh TP.HCM</li>
                    <li><strong>Nội dung CK:</strong> [Tên công ty] thanh toan hop dong so [So HD]</li>
                </ul>
            </div>

            <h3 className="text-xl font-bold text-navy-900 mt-8 mb-4">2. Tiến Độ Thanh Toán</h3>
            <p>Thông thường, quy trình thanh toán cho một hợp đồng mua bán máy phát điện được chia làm 3 đợt:</p>
            
            <div className="space-y-4 mt-4">
                <div className="flex items-start">
                    <div className="bg-navy-900 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                    <div>
                        <h5 className="font-bold text-navy-900">Đợt 1: Tạm ứng (Đặt cọc)</h5>
                        <p className="text-sm text-gray-600">Thanh toán <strong>30% - 50%</strong> giá trị hợp đồng ngay sau khi ký kết hợp đồng.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="bg-navy-900 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                    <div>
                        <h5 className="font-bold text-navy-900">Đợt 2: Trước khi giao hàng</h5>
                        <p className="text-sm text-gray-600">Thanh toán <strong>40% - 60%</strong> giá trị hợp đồng sau khi có thông báo giao hàng hoặc nghiệm thu tại kho VNGPOWER.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="bg-navy-900 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                    <div>
                        <h5 className="font-bold text-navy-900">Đợt 3: Quyết toán</h5>
                        <p className="text-sm text-gray-600">Thanh toán <strong>5% - 10%</strong> giá trị còn lại sau khi lắp đặt, chạy thử tải, nghiệm thu bàn giao và nhận đầy đủ hóa đơn chứng từ.</p>
                    </div>
                </div>
            </div>
            
            <p className="mt-6 italic text-gray-500 text-sm">* Điều khoản thanh toán cụ thể có thể thay đổi tùy theo thỏa thuận trong từng Hợp đồng kinh tế.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPolicy;
