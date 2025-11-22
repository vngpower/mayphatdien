
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getWPProjects } from '../services/wordpressService';
import { Project } from '../types';
import { MapPin, Calendar, ArrowRight, Filter, CheckCircle, ChevronDown, Loader2 } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';

const ITEMS_PER_PAGE = 6;

const ProjectsList: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [filterCapacity, setFilterCapacity] = useState('all');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
     const loadProjects = async () => {
        setIsLoading(true);
        const data = await getWPProjects();
        setProjects(data);
        setIsLoading(false);
     };
     loadProjects();
  }, []);

  // Filter logic
  const filteredProjects = projects.filter(p => {
    if (filterCapacity === 'all') return true;
    if (filterCapacity === 'small') return p.capacity.includes('100') || p.capacity.includes('200') || p.capacity.includes('300') || p.capacity.includes('400') || p.capacity.includes('500');
    if (filterCapacity === 'large') return p.capacity.includes('1000') || p.capacity.includes('1500') || p.capacity.includes('2000') || p.capacity.includes('2500');
    return true;
  });

  const handleFilterChange = (type: string) => {
      setFilterCapacity(type);
      setVisibleCount(ITEMS_PER_PAGE); // Reset visible items when filter changes
  };

  const handleLoadMore = () => {
      setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
            alt="VNGPOWER Projects" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/80"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative text-center text-white">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">Dự Án Tiêu Biểu</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Hơn 1000+ khách hàng trên khắp Việt Nam đã tin tưởng lựa chọn giải pháp nguồn điện dự phòng của VNGPOWER.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
             <div>
                <div className="text-3xl font-bold text-safety-500">15+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Năm kinh nghiệm</div>
             </div>
             <div>
                <div className="text-3xl font-bold text-safety-500">1000+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Dự án hoàn thành</div>
             </div>
             <div>
                <div className="text-3xl font-bold text-safety-500">63</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Tỉnh thành</div>
             </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        
        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center text-navy-900 font-bold">
                <Filter size={20} className="mr-2 text-safety-500" />
                Lọc dự án:
            </div>
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                <button 
                    onClick={() => handleFilterChange('all')}
                    className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition ${filterCapacity === 'all' ? 'bg-navy-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                    Tất cả
                </button>
                <button 
                    onClick={() => handleFilterChange('small')}
                    className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition ${filterCapacity === 'small' ? 'bg-navy-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                    Dưới 1000kVA
                </button>
                <button 
                    onClick={() => handleFilterChange('large')}
                    className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition ${filterCapacity === 'large' ? 'bg-navy-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                    Trên 1000kVA
                </button>
            </div>
        </div>

        {/* Projects Grid */}
        {isLoading ? (
           <div className="flex justify-center py-20">
             <Loader2 className="animate-spin text-navy-900" size={32} />
           </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.slice(0, visibleCount).map((project) => (
                <Link to={`/project/${project.slug}`} key={project.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col animate-fade-in-up">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-60 group-hover:opacity-40 transition"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm inline-flex items-center gap-2">
                            <CheckCircle size={14} className="text-safety-500" />
                            <span className="text-xs font-bold text-navy-900">{project.capacity}</span>
                        </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs font-bold text-safety-500 mb-2 uppercase tracking-wider">{project.customer}</div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-safety-500 transition line-clamp-2">{project.title}</h3>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-500">
                        <div className="flex items-center">
                            <MapPin size={16} className="mr-2 text-gray-400" />
                            {project.location}
                        </div>
                        <div className="flex items-center">
                            <Calendar size={16} className="mr-2 text-gray-400" />
                            Hoàn thành: {project.year}
                        </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-sm font-bold text-navy-900 group-hover:underline">Xem chi tiết</span>
                        <div className="bg-gray-100 p-2 rounded-full group-hover:bg-safety-500 group-hover:text-white transition">
                            <ArrowRight size={16} />
                        </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Load More Button */}
            {visibleCount < filteredProjects.length && (
                <div className="text-center mt-12">
                    <button 
                        onClick={handleLoadMore}
                        className="inline-flex items-center bg-white border border-gray-300 text-navy-900 font-bold py-3 px-8 rounded-full hover:bg-navy-900 hover:text-white hover:border-navy-900 transition shadow-sm"
                    >
                        Xem thêm dự án <ChevronDown size={18} className="ml-2" />
                    </button>
                </div>
            )}

            {filteredProjects.length === 0 && (
                <div className="text-center py-10 text-gray-500">
                    Chưa có dự án nào thuộc danh mục này.
                </div>
            )}
          </>
        )}

      </div>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-16">
        <div className="bg-navy-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-safety-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

            <div className="relative z-10 mb-6 md:mb-0 max-w-2xl">
                <h2 className="text-3xl font-bold text-white mb-4">Bạn cần tư vấn giải pháp tương tự?</h2>
                <p className="text-gray-300">Liên hệ ngay với đội ngũ kỹ sư VNGPOWER để nhận được phương án kỹ thuật tối ưu và báo giá tốt nhất cho dự án của bạn.</p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <button 
                    onClick={() => setIsQuoteOpen(true)}
                    className="bg-safety-500 hover:bg-safety-400 text-navy-900 font-bold py-3 px-8 rounded-lg shadow-lg transition whitespace-nowrap"
                >
                    Gửi yêu cầu ngay
                </button>
                <a 
                    href="tel:0901389998"
                    className="border border-white/30 text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition whitespace-nowrap text-center"
                >
                    Hotline: 0901 38 9998
                </a>
            </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
};

export default ProjectsList;
