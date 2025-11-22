
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Search, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { COMPANY_INFO, CAPACITY_LIST } from '../constants';
import { getWPProducts } from '../services/wordpressService';
import { Product } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]); // Store loaded products
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the current page has a Hero section (Transparent Header)
  const isHeroPage = location.pathname === '/' || 
                     location.pathname.startsWith('/category/') || 
                     location.pathname === '/projects' || 
                     location.pathname === '/blog' || 
                     location.pathname === '/contact' || 
                     location.pathname === '/about' || 
                     location.pathname === '/solutions' || 
                     location.pathname === '/certifications' || 
                     location.pathname.startsWith('/cong-suat/');

  // Load products for search on mount
  useEffect(() => {
    const loadProducts = async () => {
       const prods = await getWPProducts();
       setAllProducts(prods);
    };
    loadProducts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchTerm.length > 1) {
      const results = allProducts.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.kva.toString().includes(searchTerm)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, allProducts]);

  const handleSearchSelect = (slug: string) => {
    navigate(`/product/${slug}`);
    setSearchTerm('');
    setSearchResults([]);
  };

  // Dynamic Classes
  const headerBgClass = (isScrolled || !isHeroPage) 
    ? 'bg-navy-900 shadow-lg' 
    : 'bg-transparent';
    
  const paddingClass = isScrolled ? 'py-2' : 'py-3';

  // Brand Mapping for Menu
  const brandLinks = [
    { id: 'Cummins', label: 'CS Series - Powered by Cummins' },
    { id: 'Hyundai', label: 'HS Series - Powered by Hyundai' },
    { id: 'Mitsubishi', label: 'MS Series - Powered by Mitsubishi' },
    { id: 'Isuzu', label: 'IS Series - Powered by Isuzu' },
    { id: 'Kokuro', label: 'KR Series - Powered by Kokuro' },
    { id: 'Baudouin', label: 'BS Series - Powered by Baudouin' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerBgClass} ${paddingClass}`}>
      {/* Top Bar (Desktop) - Compact Version */}
      <div className={`hidden md:block container mx-auto px-4 mb-1 border-b border-white/10 pb-1 ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="flex justify-end items-center text-white/80 text-xs space-x-4">
          <a href={`tel:${COMPANY_INFO.hotline.replace(/\s/g, '')}`} className="flex items-center hover:text-safety-400 transition">
            <Phone size={14} className="mr-1" />
            Hotline: <span className="font-bold text-safety-400 ml-1">{COMPANY_INFO.hotline}</span>
          </a>
          <span className="text-white/20">|</span>
          <span>Email: {COMPANY_INFO.email}</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="bg-white p-1.5 rounded-sm">
              <div className="text-xl md:text-2xl font-heading font-extrabold text-navy-900 tracking-tighter leading-none">
                VNG<span className="text-safety-500">POWER</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-white font-medium hover:text-safety-400 transition font-heading uppercase text-xs tracking-wider">Trang chủ</Link>
            
            {/* Dropdown Giới Thiệu */}
            <div className="relative group h-full py-2">
              <button className="text-white font-medium hover:text-safety-400 transition font-heading uppercase text-xs tracking-wider flex items-center">
                Giới thiệu <ChevronDown size={12} className="ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border-t-2 border-safety-500">
                 <Link to="/about" className="block px-4 py-3 text-navy-900 hover:bg-gray-50 hover:text-safety-500 text-sm border-b border-gray-50">
                   Về VNGPOWER
                 </Link>
                 <Link to="/solutions" className="block px-4 py-3 text-navy-900 hover:bg-gray-50 hover:text-safety-500 text-sm border-b border-gray-50">
                   Giải pháp chuyên ngành
                 </Link>
                 <Link to="/certifications" className="block px-4 py-3 text-navy-900 hover:bg-gray-50 hover:text-safety-500 text-sm">
                   Chứng nhận ISO
                 </Link>
              </div>
            </div>
            
            {/* Dropdown Theo Công Suất */}
            <div className="relative group h-full py-2">
              <button className="text-white font-medium hover:text-safety-400 transition font-heading uppercase text-xs tracking-wider flex items-center">
                Theo Công Suất <ChevronDown size={12} className="ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-0 w-[600px] bg-white rounded shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border-t-2 border-safety-500 grid grid-cols-6 gap-3">
                {CAPACITY_LIST.map(kva => (
                   <Link key={kva} to={`/cong-suat/${kva}kva`} className="block text-center py-2 px-1 rounded bg-gray-50 hover:bg-safety-500 hover:text-white text-navy-900 text-xs font-bold transition">
                     {kva} kVA
                   </Link>
                ))}
              </div>
            </div>

            {/* Dropdown Thương Hiệu */}
            <div className="relative group h-full py-2">
              <button className="text-white font-medium hover:text-safety-400 transition font-heading uppercase text-xs tracking-wider flex items-center">
                Thương Hiệu <ChevronDown size={12} className="ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-0 w-72 bg-white rounded shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border-t-2 border-safety-500">
                {brandLinks.map(brand => (
                   <Link key={brand.id} to={`/category/${brand.id}`} className="block px-4 py-3 text-navy-900 hover:bg-gray-50 hover:text-safety-500 text-sm border-b border-gray-50 last:border-0">
                     {brand.label}
                   </Link>
                ))}
              </div>
            </div>

            <Link to="/projects" className="text-white font-medium hover:text-safety-400 transition font-heading uppercase text-xs tracking-wider">Dự án</Link>
            <Link to="/blog" className="text-white font-medium hover:text-safety-400 transition font-heading uppercase text-xs tracking-wider">Tin tức</Link>
            <Link to="/contact" className="text-white font-medium hover:text-safety-400 transition font-heading uppercase text-xs tracking-wider">Liên hệ</Link>
          </nav>

          {/* Search & Actions */}
          <div className="hidden md:flex items-center space-x-3 relative">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Tìm công suất..." 
                className="bg-white/10 border border-white/20 rounded-full px-3 py-1.5 pl-8 text-white placeholder-white/50 text-xs focus:outline-none focus:border-safety-400 w-40 lg:w-56 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-white/50" size={14} />
              
              {/* Search Results Dropdown */}
              {searchResults.length > 0 && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-xl overflow-hidden max-h-64 overflow-y-auto z-[60]">
                  {searchResults.map(product => (
                    <div 
                      key={product.id} 
                      onClick={() => handleSearchSelect(product.slug)}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0 flex items-center"
                    >
                      <img src={product.image} alt={product.name} className="w-8 h-8 object-cover rounded mr-3" />
                      <div>
                        <p className="text-xs font-bold text-navy-900">{product.name}</p>
                        <p className="text-[10px] text-gray-500">{product.kva} kVA - Powered By {product.brand}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button className="bg-safety-500 hover:bg-safety-400 text-navy-900 font-bold py-1.5 px-4 rounded-full text-xs transition shadow-lg shadow-safety-500/30 uppercase">
              Báo giá
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy-900 border-t border-white/10 absolute top-full left-0 w-full shadow-2xl overflow-y-auto max-h-[80vh]">
          <div className="px-4 py-6 space-y-4">
             <input 
                type="text" 
                placeholder="Tìm kiếm sản phẩm..." 
                className="w-full bg-white/10 border border-white/20 rounded p-2 text-white mb-4 text-sm"
              />
            <Link to="/" className="block text-white font-medium text-base" onClick={() => setIsMobileMenuOpen(false)}>Trang chủ</Link>
            
            {/* Mobile About Submenu */}
            <div className="text-white font-medium text-base border-b border-white/10 pb-2 mb-2">Giới thiệu</div>
            <div className="pl-4 space-y-2 mb-4">
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-400 hover:text-safety-400 text-sm">- Về VNGPOWER</Link>
                <Link to="/solutions" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-400 hover:text-safety-400 text-sm">- Giải pháp</Link>
                <Link to="/certifications" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-400 hover:text-safety-400 text-sm">- Chứng nhận ISO</Link>
            </div>
            
            {/* Mobile Capacity Menu */}
            <div className="text-white font-medium text-base border-b border-white/10 pb-2 mb-2">Theo Công Suất</div>
             <div className="pl-4 grid grid-cols-3 gap-2 mb-4">
                {CAPACITY_LIST.slice(0, 15).map(kva => (
                   <Link key={kva} to={`/cong-suat/${kva}kva`} onClick={() => setIsMobileMenuOpen(false)} className="block text-center py-1 px-1 bg-white/10 rounded text-gray-300 hover:text-safety-400 text-xs">
                     {kva} kVA
                   </Link>
                ))}
             </div>

             {/* Mobile Brand Menu */}
            <div className="text-white font-medium text-base border-b border-white/10 pb-2 mb-2">Thương Hiệu</div>
             <div className="pl-4 space-y-2 mb-2">
                {brandLinks.map(brand => (
                   <Link key={brand.id} to={`/category/${brand.id}`} onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-400 hover:text-safety-400 text-sm">
                     - {brand.label}
                   </Link>
                ))}
             </div>

            <Link to="/projects" className="block text-white font-medium text-base" onClick={() => setIsMobileMenuOpen(false)}>Dự án</Link>
            <Link to="/blog" className="block text-white font-medium text-base" onClick={() => setIsMobileMenuOpen(false)}>Tin tức</Link>
            <Link to="/contact" className="block text-white font-medium text-base" onClick={() => setIsMobileMenuOpen(false)}>Liên hệ</Link>
            <a href={`tel:${COMPANY_INFO.hotline}`} className="block text-safety-400 font-bold text-base flex items-center pt-4 border-t border-white/10">
              <Phone size={18} className="mr-2" /> {COMPANY_INFO.hotline}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
