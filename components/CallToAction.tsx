
import React from 'react';
import { useLocation } from 'react-router-dom';
import { FileText, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const CallToAction: React.FC = () => {
  const location = useLocation();

  // Hide this section on the About page as requested
  if (location.pathname === '/about') {
    return null;
  }

  const cleanHotline = COMPANY_INFO.hotline.replace(/\s/g, '');

  return (
    <section className="py-16 bg-navy-900 text-center text-white border-t border-white/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold mb-4">Sẵn Sàng Đồng Hành Cùng Dự Án Của Bạn</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Hãy để VNGPOWER trở thành đối tác tin cậy cung cấp nguồn điện dự phòng cho doanh nghiệp của bạn.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href={`tel:${cleanHotline}`} 
            className="bg-safety-500 hover:bg-safety-400 text-navy-900 font-bold py-4 px-10 rounded-full shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center"
          >
            <Phone size={20} className="mr-2" />
            LIÊN HỆ NGAY
          </a>
          <a 
            href="/files/Ho-So-Nang-Luc-VNGPOWER.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-transparent border border-white text-white hover:bg-white hover:text-navy-900 font-bold py-4 px-10 rounded-full transition transform hover:-translate-y-1 flex items-center justify-center"
          >
            <FileText size={20} className="mr-2" />
            XEM HỒ SƠ NĂNG LỰC
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
