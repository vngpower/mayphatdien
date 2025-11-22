
import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getWPProjectBySlug } from '../services/wordpressService';
import { Project } from '../types';
import { ChevronRight, MapPin, Calendar, Zap, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';
import WPContentRenderer from '../components/WPContentRenderer';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
     const loadData = async () => {
        if (!slug) return;
        setIsLoading(true);
        const data = await getWPProjectBySlug(slug);
        setProject(data || null);
        setIsLoading(false);
     };
     loadData();
  }, [slug]);

  if (isLoading) {
     return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-navy-900" size={40} /></div>;
  }

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center flex-col">
       <h2 className="text-xl font-bold text-navy-900 mb-4">Dự án không tồn tại</h2>
       <Link to="/projects" className="text-safety-500 hover:underline">Quay lại danh sách</Link>
    </div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      {/* Hero Banner */}
      <div className="relative h-[40vh] md:h-[50vh] w-full">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/70 flex items-center justify-center">
           <div className="container mx-auto px-4 text-center">
             <div className="inline-block bg-safety-500 text-white text-xs font-bold px-3 py-1 rounded mb-4 uppercase tracking-wider">
                Dự án tiêu biểu
             </div>
             <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white max-w-4xl mx-auto leading-tight">
               {project.title}
             </h1>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-safety-500 border-b-4">
            <div className="flex items-start space-x-4">
               <div className="bg-navy-50 p-3 rounded-full text-navy-900">
                 <CheckCircle size={24} />
               </div>
               <div>
                 <p className="text-xs text-gray-500 uppercase font-bold">Khách hàng</p>
                 <p className="text-navy-900 font-bold text-lg">{project.customer}</p>
               </div>
            </div>
            <div className="flex items-start space-x-4">
               <div className="bg-navy-50 p-3 rounded-full text-navy-900">
                 <MapPin size={24} />
               </div>
               <div>
                 <p className="text-xs text-gray-500 uppercase font-bold">Địa điểm</p>
                 <p className="text-navy-900 font-bold text-lg">{project.location}</p>
               </div>
            </div>
            <div className="flex items-start space-x-4">
               <div className="bg-navy-50 p-3 rounded-full text-navy-900">
                 <Zap size={24} />
               </div>
               <div>
                 <p className="text-xs text-gray-500 uppercase font-bold">Công suất</p>
                 <p className="text-navy-900 font-bold text-lg">{project.capacity}</p>
               </div>
            </div>
             <div className="flex items-start space-x-4">
               <div className="bg-navy-50 p-3 rounded-full text-navy-900">
                 <Calendar size={24} />
               </div>
               <div>
                 <p className="text-xs text-gray-500 uppercase font-bold">Năm hoàn thành</p>
                 <p className="text-navy-900 font-bold text-lg">{project.year}</p>
               </div>
            </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
           <div className="lg:col-span-2 space-y-8">
              {/* Breadcrumb */}
              <div className="flex items-center text-xs text-gray-500">
                <Link to="/" className="hover:text-navy-900">Trang chủ</Link>
                <ChevronRight size={14} className="mx-1" />
                <Link to="/projects" className="hover:text-navy-900">Dự án</Link>
                <ChevronRight size={14} className="mx-1" />
                <span className="text-navy-900 font-bold truncate">{project.title}</span>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8">
                 <h2 className="text-2xl font-bold text-navy-900 mb-4 border-b border-gray-100 pb-2">Tổng Quan Dự Án</h2>
                 {/* Render HTML content using the new component */}
                 <WPContentRenderer content={project.longDescription} />
              </div>

              {project.challenge && (
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center">
                    <span className="bg-red-100 p-1 rounded mr-2">⚠️</span> Thách Thức
                  </h3>
                  <p className="text-gray-700">{project.challenge}</p>
                </div>
              )}

              {project.solution && (
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-700 mb-3 flex items-center">
                     <span className="bg-green-100 p-1 rounded mr-2">💡</span> Giải Pháp VNGPOWER
                  </h3>
                  <p className="text-gray-700">{project.solution}</p>
                </div>
              )}

              <div className="pt-8 border-t border-gray-200">
                <Link to="/" className="inline-flex items-center text-navy-900 font-bold hover:text-safety-500 transition">
                  <ArrowLeft size={20} className="mr-2" /> Quay lại trang chủ
                </Link>
              </div>
           </div>

           {/* Sidebar CTA */}
           <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
                 <h3 className="text-xl font-bold text-navy-900 mb-4">Bạn có dự án tương tự?</h3>
                 <p className="text-gray-600 text-sm mb-6">
                   Liên hệ ngay với VNGPOWER để được tư vấn giải pháp kỹ thuật tối ưu và báo giá cạnh tranh nhất.
                 </p>
                 <button 
                    onClick={() => setIsQuoteOpen(true)}
                    className="w-full bg-safety-500 hover:bg-safety-400 text-navy-900 font-bold py-3 rounded transition shadow-lg shadow-safety-500/30 mb-4 uppercase"
                 >
                   Yêu cầu tư vấn ngay
                 </button>
                 <a 
                   href="tel:0901389998"
                   className="w-full block text-center border border-navy-900 text-navy-900 font-bold py-3 rounded hover:bg-navy-50 transition"
                 >
                   Gọi Hotline: 0901 38 9998
                 </a>
              </div>
           </div>
        </div>
      </div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} productName={`Tư vấn dự án tương tự: ${project.title}`} />
    </div>
  );
};

export default ProjectDetail;
