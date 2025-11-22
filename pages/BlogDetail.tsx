
import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getWPPostBySlug, getWPBlogPosts } from '../services/wordpressService';
import { BlogPost } from '../types';
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Linkedin, Twitter, Loader2 } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';
import SEO from '../components/SEO';
import WPContentRenderer from '../components/WPContentRenderer';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      if (!slug) return;
      setIsLoading(true);
      
      // Fetch post detail
      const postData = await getWPPostBySlug(slug);
      setPost(postData || null);

      // Fetch all posts to filter related ones
      // In a real real app, you might ask the API for related posts directly
      if (postData) {
        const allPosts = await getWPBlogPosts();
        const related = allPosts
          .filter(p => p.category === postData.category && p.id !== postData.id)
          .slice(0, 2);
        setRelatedPosts(related);
      }
      
      setIsLoading(false);
    };

    fetchData();
  }, [slug]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-navy-900" size={40} /></div>;
  }

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center flex-col">
        <h2 className="text-xl font-bold text-navy-900 mb-4">Bài viết không tồn tại</h2>
        <Link to="/blog" className="text-safety-500 hover:underline">Quay lại danh sách</Link>
    </div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <SEO 
        title={post.title}
        description={post.excerpt}
        image={post.image}
        type="article"
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           
           {/* Main Content */}
           <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                 {/* Header */}
                 <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-navy-900 text-sm mb-6 transition">
                    <ArrowLeft size={16} className="mr-1" /> Quay lại danh sách
                 </Link>
                 
                 <div className="flex items-center gap-3 mb-4">
                    <span className="bg-safety-100 text-safety-700 px-3 py-1 rounded-full text-xs font-bold uppercase">{post.category}</span>
                    <span className="text-gray-400 text-sm flex items-center"><Calendar size={14} className="mr-1"/> {post.date}</span>
                 </div>

                 <h1 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6 leading-tight">{post.title}</h1>
                 
                 <div className="flex items-center justify-between border-b border-gray-100 pb-6 mb-8">
                    <div className="flex items-center">
                       <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                          <User size={20} className="text-gray-500" />
                       </div>
                       <div>
                          <p className="text-sm font-bold text-navy-900">{post.author}</p>
                          <p className="text-xs text-gray-500">Tác giả</p>
                       </div>
                    </div>
                    <div className="flex space-x-2">
                       <button className="p-2 text-gray-400 hover:text-blue-600 bg-gray-50 rounded-full"><Facebook size={18}/></button>
                       <button className="p-2 text-gray-400 hover:text-blue-700 bg-gray-50 rounded-full"><Linkedin size={18}/></button>
                       <button className="p-2 text-gray-400 hover:text-blue-400 bg-gray-50 rounded-full"><Twitter size={18}/></button>
                    </div>
                 </div>

                 {/* Image */}
                 <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                   <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
                 </div>

                 {/* HTML Content */}
                 <WPContentRenderer content={post.content} />

                 {/* Tags */}
                 <div className="mt-10 pt-6 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                       {post.tags.map(tag => (
                          <span key={tag} className="inline-flex items-center bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition">
                             <Tag size={12} className="mr-1" /> {tag}
                          </span>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Comments Placeholder */}
              <div className="mt-8 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                 <h3 className="text-xl font-bold text-navy-900 mb-4">Bình luận</h3>
                 <p className="text-gray-500 text-sm italic">Chức năng bình luận đang được bảo trì.</p>
              </div>
           </div>

           {/* Sidebar */}
           <div className="lg:col-span-1 space-y-8">
              {/* CTA Widget */}
              <div className="bg-navy-900 text-white rounded-xl p-8 shadow-lg text-center sticky top-24">
                 <h3 className="text-2xl font-bold mb-4">Cần Tư Vấn Máy Phát Điện?</h3>
                 <p className="text-gray-300 text-sm mb-8">Để lại thông tin, kỹ sư của chúng tôi sẽ liên hệ tư vấn giải pháp và báo giá trong 15 phút.</p>
                 <button 
                   onClick={() => setIsQuoteOpen(true)}
                   className="w-full bg-safety-500 hover:bg-safety-400 text-navy-900 font-bold py-3 rounded transition shadow-lg shadow-safety-500/20 mb-4 uppercase"
                 >
                   Nhận Báo Giá
                 </button>
                 <div className="text-sm text-gray-400">hoặc gọi <strong className="text-white">0901 38 9998</strong></div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                   <h3 className="font-bold text-navy-900 mb-4 border-b border-gray-100 pb-2">Bài Viết Liên Quan</h3>
                   <div className="space-y-4">
                      {relatedPosts.map(p => (
                         <Link to={`/blog/${p.slug}`} key={p.id} className="flex gap-3 group">
                            <img src={p.image} alt={p.title} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                            <div>
                               <h4 className="text-sm font-bold text-navy-900 group-hover:text-safety-500 transition line-clamp-2 mb-1">{p.title}</h4>
                               <span className="text-xs text-gray-500">{p.date}</span>
                            </div>
                         </Link>
                      ))}
                   </div>
                </div>
              )}
           </div>

        </div>
      </div>
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} productName={`Tư vấn từ bài viết: ${post.title}`} />
    </div>
  );
};

export default BlogDetail;
