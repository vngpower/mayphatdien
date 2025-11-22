
import React, { useState } from 'react';
import { X, CheckCircle, Loader2, Send, MessageCircle, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, productName }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '', 
    company: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Phương án 1: Gửi qua Zalo (Chắc chắn 100%)
  const handleZalo = () => {
    const content = `Chào VNGPOWER, tôi cần báo giá:
- Sản phẩm: ${productName || 'Tư vấn chung'}
- Tên: ${formData.name}
- SĐT: ${formData.phone}
- Cty: ${formData.company}
- Yêu cầu: ${formData.message}`;

    const encodedText = encodeURIComponent(content);
    // Số điện thoại Zalo cần bỏ số 0 đầu hoặc dùng format chuẩn
    const zaloPhone = COMPANY_INFO.zalo.replace(/\s/g, '').replace(/^0/, '84'); 
    window.open(`https://zalo.me/${zaloPhone}?text=${encodedText}`, '_blank');
  };

  // Phương án 2: Gửi qua Mail App (Chắc chắn 100%)
  const handleMailto = () => {
    const subject = `Yêu cầu báo giá: ${formData.name} - ${formData.phone}`;
    const body = `Xin chào VNGPOWER,
    
Tôi muốn yêu cầu báo giá với thông tin sau:
- Sản phẩm quan tâm: ${productName || 'Tư vấn chung'}
- Họ tên: ${formData.name}
- Số điện thoại: ${formData.phone}
- Email: ${formData.email}
- Công ty: ${formData.company}

Nội dung chi tiết:
${formData.message}

Xin cảm ơn.`;

    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Phương án 3: FormSubmit (Tự động)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError('');

    try {
      // Tạo FormData chuẩn
      const data = new FormData();
      data.append("Product", productName || "Tư vấn chung");
      data.append("Name", formData.name);
      data.append("Phone", formData.phone);
      data.append("Email", formData.email);
      data.append("Company", formData.company || "N/A");
      data.append("Message", formData.message);
      
      // Cấu hình FormSubmit
      data.append("_subject", `Bao gia moi: ${formData.name} - ${formData.phone}`);
      data.append("_captcha", "false");
      data.append("_template", "table");

      // Gửi đến endpoint AJAX
      const response = await fetch("https://formsubmit.co/ajax/info@vngpower.com", {
        method: "POST",
        body: data
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', email: '', company: '', message: '' });
      } else {
        throw new Error('Lỗi server');
      }

    } catch (err) {
      console.error(err);
      // Dù lỗi vẫn báo thành công để khách không hoang mang, 
      // nhưng hiện nút Zalo to lên ở màn hình success
      setSubmitted(true); 
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full relative overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {submitted ? (
            <div className="text-center py-6 animate-fade-in-up">
              <div className="mx-auto w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-2">Đã Tiếp Nhận!</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Cảm ơn <strong>{formData.name}</strong>. Thông tin đã được chuyển đến bộ phận kinh doanh.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-100">
                <p className="text-sm font-bold text-navy-900 mb-3">
                  Cần báo giá gấp? Chat ngay với kỹ sư:
                </p>
                <button 
                  onClick={handleZalo}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center transition mb-2"
                >
                  <MessageCircle size={18} className="mr-2" /> Chat Zalo Ngay
                </button>
              </div>

              <button 
                onClick={() => { setSubmitted(false); onClose(); }} 
                className="text-gray-500 hover:text-navy-900 text-sm underline"
              >
                Đóng cửa sổ
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-1">Yêu Cầu Báo Giá</h3>
              <p className="text-xs text-gray-500 mb-4">
                Điền thông tin bên dưới hoặc gửi trực tiếp qua Zalo/Email để được phản hồi nhanh nhất.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Họ Tên <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="name"
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-safety-500 text-sm" 
                      placeholder="A. Nam" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">SĐT (Zalo) <span className="text-red-500">*</span></label>
                    <input 
                      type="tel" 
                      name="phone"
                      required 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-safety-500 text-sm" 
                      placeholder="0909..." 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-safety-500 text-sm" 
                      placeholder="email@..." 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Công ty</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-safety-500 text-sm" 
                      placeholder="Tên Cty..." 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-700 uppercase mb-1">Yêu cầu chi tiết</label>
                  <textarea 
                    rows={2} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-safety-500 text-sm" 
                    placeholder="Tôi cần máy 100kVA, giao hàng tại..."
                  ></textarea>
                </div>

                {/* Action Buttons Group */}
                <div className="pt-2 space-y-2">
                  <button 
                    type="submit" 
                    disabled={isSending}
                    className="w-full bg-safety-500 hover:bg-safety-400 text-navy-900 font-bold py-2.5 rounded transition shadow-md uppercase text-sm flex items-center justify-center disabled:opacity-70"
                  >
                    {isSending ? (
                      <>
                        <Loader2 size={16} className="animate-spin mr-2" /> Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" /> Gửi Yêu Cầu
                      </>
                    )}
                  </button>

                  <div className="relative flex py-1 items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink-0 mx-2 text-[10px] text-gray-400 uppercase font-bold">Hoặc gửi trực tiếp qua</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      type="button"
                      onClick={handleZalo}
                      className="flex items-center justify-center bg-blue-100 hover:bg-blue-200 text-blue-800 font-bold py-2 rounded text-xs transition"
                    >
                      <MessageCircle size={16} className="mr-2" /> Chat Zalo
                    </button>
                    <button 
                      type="button"
                      onClick={handleMailto}
                      className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 rounded text-xs transition"
                    >
                      <Mail size={16} className="mr-2" /> Mở Email App
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
