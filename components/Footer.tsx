
import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6 text-white">
              VNG<span className="text-safety-500">POWER</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Đơn vị hàng đầu cung cấp giải pháp nguồn điện dự phòng tại Việt Nam. 
              Chúng tôi cam kết sản phẩm chính hãng, dịch vụ chuyên nghiệp và giá thành cạnh tranh nhất.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-safety-500 hover:text-navy-900 transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-safety-500 hover:text-navy-900 transition">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-safety-500 pl-3">Thông Tin Liên Hệ</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-safety-500" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-safety-500" />
                <a href={`tel:${COMPANY_INFO.hotline.replace(/\s/g, '')}`} className="hover:text-white transition">{COMPANY_INFO.hotline}</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-safety-500" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition">{COMPANY_INFO.email}</a>
              </li>
              <li className="mt-4">
                <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Mã số thuế</span>
                <span className="text-white">{COMPANY_INFO.taxCode}</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-safety-500 pl-3">Sản Phẩm</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/category/Cummins" className="hover:text-safety-400 transition">CS Series Powered by Cummins</Link></li>
              <li><Link to="/category/Hyundai" className="hover:text-safety-400 transition">HS Series Powered by Hyundai</Link></li>
              <li><Link to="/category/Baudouin" className="hover:text-safety-400 transition">BS Series Powered by Baudouin</Link></li>
              <li><Link to="/category/Kokuro" className="hover:text-safety-400 transition">KR Series Powered by Kokuro</Link></li>
              <li><Link to="/category/Mitsubishi" className="hover:text-safety-400 transition">MS Series Powered by Mitsubishi</Link></li>
              <li><Link to="/category/Isuzu" className="hover:text-safety-400 transition">IS Series Powered by Isuzu</Link></li>
            </ul>
          </div>

           {/* Column 4: Policy */}
           <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-safety-500 pl-3">Chính Sách</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/warranty-policy" className="hover:text-safety-400 transition">Chính sách bảo hành</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-safety-400 transition">Chính sách vận chuyển</Link></li>
              <li><Link to="/payment-policy" className="hover:text-safety-400 transition">Hình thức thanh toán</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-safety-400 transition">Bảo mật thông tin</Link></li>
              <li><Link to="/projects" className="hover:text-safety-400 transition">Hồ sơ năng lực</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
