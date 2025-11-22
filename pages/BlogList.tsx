
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getWPBlogPosts } from '../services/wordpressService';
import { BlogPost } from '../types';
import { Calendar, User, ArrowRight, Search, Loader2, ChevronDown } from 'lucide-react';

const ITEMS_PER_PAGE = 6;

const BlogList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Effect to fetch posts when searchTerm changes (with debounce)
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      setIsLoading(true);
      // Reset visible count when search changes
      setVisibleCount(ITEMS_PER_PAGE);
      const data = await getWPBlogPosts(searchTerm);
      setPosts(data);
      setIsLoading(false);
    }, 500); // 500ms debounce

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-navy-900 pt-28 pb-16 md:pt-48 md:pb-24 text-center text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
         <div className="container mx-auto px-4 relative z-10 pt-10">
            <h1 className="text-4xl font-heading font-bold mb-4">Kiến Thức & Tin Tức</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">Cập nhật những thông tin mới nhất về công nghệ máy phát điện, hướng dẫn bảo trì và tư vấn giải pháp tối ưu.</p>
         </div>
      </div>

      <div className="container mx-auto px-4 mt-10">
        {/* Search & Categories Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="relative w-full md:w-96">
             <input 
                type="text" 
                placeholder="Tìm kiếm bài viết..." 
                className="w-full border border-gray-300 rounded-full px-5 py-3 pl-12 focus:outline-none focus:border-safety-500 shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
             />
             <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          </div>
          <div className="flex gap-2">
             <button className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-navy-900 cursor-pointer hover:bg-navy-900 hover:text-white transition">Kỹ Thuật</button>
             <button className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-navy-900 cursor-pointer hover:bg-navy-900 hover:text-white transition">Dịch Vụ</button>
             <button className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-navy-900 cursor-pointer hover:bg-navy-900 hover:text-white transition">Dự Án</button>
          </div>
        </div>

        {/* Grid */}
        {isLoading ? (
           <div className="flex justify-center py-20">
             <Loader2 className="animate-spin text-navy-900" size={32} />
           </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, visibleCount).map(post => (
                <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full animate-fade-in-up">
                  <Link to={`/blog/${post.slug}`} className="block overflow-hidden h-56 relative group">
                    <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-safety-500 text-white text-xs font-bold px-3 py-1 rounded shadow-md">
                        {post.category}
                    </div>
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                        <span className="flex items-center"><Calendar size={14} className="mr-1"/> {post.date}</span>
                        <span className="flex items-center"><User size={14} className="mr-1"/> {post.author}</span>
                      </div>
                      <Link to={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-bold text-navy-900 mb-3 hover:text-safety-500 transition line-clamp-2">{post.title}</h3>
                      </Link>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                      <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-navy-900 font-bold text-sm hover:underline mt-auto">
                        Đọc tiếp <ArrowRight size={16} className="ml-1" />
                      </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < posts.length && (
              <div className="text-center mt-12">
                <button 
                  onClick={handleLoadMore}
                  className="inline-flex items-center bg-white border border-gray-300 text-navy-900 font-bold py-3 px-8 rounded-full hover:bg-navy-900 hover:text-white hover:border-navy-900 transition shadow-sm"
                >
                  Xem thêm bài viết cũ hơn <ChevronDown size={18} className="ml-2" />
                </button>
              </div>
            )}
          </>
        )}

        {!isLoading && posts.length === 0 && (
           <div className="text-center py-20 text-gray-500">
              Không tìm thấy bài viết nào phù hợp với từ khóa "{searchTerm}".
           </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
