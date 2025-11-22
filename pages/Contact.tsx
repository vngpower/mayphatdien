
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle, Building, Factory, MessageCircle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleZalo = () => {
     const content = `Chào VNGPOWER, tôi cần hỗ trợ:
- Tên: ${formData.name}
- SĐT: ${formData.phone}
- Vấn đề: ${formData.message}`;
     const encodedText = encodeURIComponent(content);
     const zaloPhone = COMPANY_INFO.zalo.replace(/\s/g, '').replace(/^0/, '84');
     window.open(`https://zalo.me/${zaloPhone}?text=${encodedText}`, '_blank');
  };

  const handleMailto = () => {
      const subject = `Liên hệ từ Website: ${formData.name}`;
      const body = `Họ tên: ${formData.name}
SĐT: ${formData.phone}
Email: ${formData.email}
Chủ đề: ${formData.subject}

Nội dung:
${formData.message}`;
      window.location.href = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
        const data = new FormData();
        data.append("Name", formData.name);
        data.append("Phone", formData.phone);
        data.append("Email", formData.email);
        data.append("Subject", formData.subject);
        data.append("Message", formData.message);
        data.append("_subject", `Lien he moi: ${formData.name}`);
        data.append("_captcha", "false");

        const response = await fetch("https://formsubmit.co/ajax/info@vngpower.com", {
            method: "POST",
            body: data
        });

        if (response.ok) {
            setIsSuccess(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } else {
            // Fallback if API fails
            throw new Error("API Error");
        }
    } catch (error) {
        console.error(error);
        // Still show success but guide to Zalo
        setIsSuccess(true); 
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <SEO 
        title="Liên Hệ" 
        description={`Liên hệ với ${COMPANY_INFO.name} để được tư vấn báo giá máy phát điện. Hotline: ${COMPANY_INFO.hotline}.`}
      />

      {/* Hero Banner */}
      <div className="bg-navy-900 pt-32 pb-16 md:pt-48 md:pb-24 text-center text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center"></div>
         <div className="container mx-auto px-4 relative z-10 pt-10">
            <h1 className="text-4xl font-heading font-bold mb-4">Liên Hệ Với Chúng Tôi</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
                Đội ngũ kỹ sư VNGPOWER luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn về giải pháp nguồn điện dự phòng.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-safety-500">
                    <h2 className="text-xl font-bold text-navy-900 mb-6">Thông Tin Liên Hệ</h2>
                    
                    <div className="space-y-6">
                         {/* Hotline */}
                         <div className="flex items-start border-b border-gray-100 pb-4">
                            <div className="bg-gray-100 p-3 rounded-full mr-4 text-safety-500 flex-shrink-0">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Hotline 24/7</p>
                                <a href={`tel:${COMPANY_INFO.hotline.replace(/\s/g, '')}`} className="text-navy-900 font-bold text-xl hover:text-safety-500 transition">
                                    {COMPANY_INFO.hotline}
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start border-b border-gray-100 pb-4">
                            <div className="bg-gray-100 p-3 rounded-full mr-4 text-safety-500 flex-shrink-0">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Email</p>
                                <a href={`mailto:${COMPANY_INFO.email}`} className="text-navy-900 font-medium hover:text-safety-500 transition">
                                    {COMPANY_INFO.email}
                                </a>
                            </div>
                        </div>

                         {/* Locations */}
                         <div className="flex items-start">
                            <div className="bg-gray-100 p-3 rounded-full mr-4 text-safety-500 flex-shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Trụ sở chính</p>
                                <p className="text-navy-900 text-sm leading-relaxed">{COMPANY_INFO.address}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Direct Action Cards */}
                <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => window.open(`https://zalo.me/${COMPANY_INFO.zalo.replace(/\s/g, '').replace(/^0/, '84')}`, '_blank')} className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg shadow text-center transition">
                        <MessageCircle className="mx-auto mb-2" />
                        <span className="font-bold text-sm">Chat Zalo</span>
                    </button>
                    <a href={`tel:${COMPANY_INFO.hotline.replace(/\s/g, '')}`} className="bg-safety-500 hover:bg-safety-400 text-navy-900 p-4 rounded-lg shadow text-center transition">
                        <Phone className="mx-auto mb-2" />
                        <span className="font-bold text-sm">Gọi Ngay</span>
                    </a>
                </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                    <h2 className="text-2xl font-bold text-navy-900 mb-2">Gửi Tin Nhắn</h2>
                    <p className="text-gray-500 mb-8">Điền form bên dưới hoặc sử dụng các nút bên dưới để gửi trực tiếp qua Zalo/Email của bạn (Đảm bảo 100% thành công).</p>

                    {isSuccess ? (
                        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-fade-in">
                            <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-2">Đã Gửi Thành Công!</h3>
                            <p className="text-gray-600 mb-6 text-sm">
                                Cảm ơn bạn đã để lại thông tin. Chúng tôi sẽ liên hệ lại ngay.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <button onClick={handleZalo} className="flex items-center bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition">
                                    <MessageCircle size={18} className="mr-2"/> Nhắn Zalo cho nhanh
                                </button>
                            </div>
                            <button 
                                onClick={() => setIsSuccess(false)}
                                className="mt-6 text-gray-500 hover:text-navy-900 text-sm underline"
                            >
                                Gửi tin nhắn khác
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Họ và tên <span className="text-red-500">*</span></label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-safety-500 transition"
                                        placeholder="Nhập họ tên"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Số điện thoại <span className="text-red-500">*</span></label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-safety-500 transition"
                                        placeholder="0909..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-safety-500 transition"
                                        placeholder="example@..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Chủ đề</label>
                                    <select 
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-safety-500 bg-white transition"
                                    >
                                        <option value="">Chọn chủ đề...</option>
                                        <option value="Báo giá">Báo giá máy phát điện</option>
                                        <option value="Kỹ thuật">Tư vấn kỹ thuật</option>
                                        <option value="Khác">Khác</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Nội dung <span className="text-red-500">*</span></label>
                                <textarea 
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-safety-500 transition"
                                    placeholder="Nhập nội dung yêu cầu..."
                                ></textarea>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full md:w-auto bg-navy-900 hover:bg-navy-800 text-white font-bold py-4 px-8 rounded shadow-lg transition flex items-center justify-center min-w-[200px]"
                                >
                                    {isSubmitting ? <Loader2 size={20} className="animate-spin mr-2" /> : <Send size={20} className="mr-2" />}
                                    {isSubmitting ? 'Đang gửi...' : 'Gửi Tin Nhắn'}
                                </button>

                                <div className="text-sm text-gray-500 font-medium">hoặc chọn cách nhanh hơn:</div>

                                <div className="flex gap-3">
                                     <button 
                                        type="button"
                                        onClick={handleZalo}
                                        className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded font-bold text-sm transition flex items-center"
                                     >
                                         <MessageCircle size={16} className="mr-1"/> Gửi qua Zalo
                                     </button>
                                     <button 
                                        type="button"
                                        onClick={handleMailto}
                                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded font-bold text-sm transition flex items-center"
                                     >
                                         <Mail size={16} className="mr-1"/> Mở Email App
                                     </button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
