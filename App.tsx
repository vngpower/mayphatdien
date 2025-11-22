
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProjectDetail from './pages/ProjectDetail';
import ProjectsList from './pages/ProjectsList';
import CategoryDetail from './pages/CategoryDetail';
import CapacityLanding from './pages/CapacityLanding';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Certifications from './pages/Certifications';
import WarrantyPolicy from './pages/policy/WarrantyPolicy';
import ShippingPolicy from './pages/policy/ShippingPolicy';
import PaymentPolicy from './pages/policy/PaymentPolicy';
import PrivacyPolicy from './pages/policy/PrivacyPolicy';
import WhatsAppButton from './components/WhatsAppButton';
import { COMPANY_INFO } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  // Clean phone number for tel link
  const cleanHotline = COMPANY_INFO.hotline.replace(/\s/g, '');

  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-gray-800 antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/category/:brandId" element={<CategoryDetail />} />
            <Route path="/cong-suat/:slug" element={<CapacityLanding />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/projects" element={<ProjectsList />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Policy Routes */}
            <Route path="/warranty-policy" element={<WarrantyPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/payment-policy" element={<PaymentPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* Redirect /products to home for this demo */}
            <Route path="/products" element={<Home />} />
          </Routes>
        </main>
        
        {/* Global Call To Action Section (Automatically hides on /about) */}
        <CallToAction />
        
        <Footer />
        
        {/* Sticky Mobile Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden flex z-40">
          <a href={`tel:${cleanHotline}`} className="flex-1 flex flex-col items-center justify-center py-2 text-navy-900 border-r border-gray-100 bg-safety-500">
            <span className="font-bold text-xs uppercase">Gọi Ngay</span>
            <span className="font-bold text-sm">{COMPANY_INFO.hotline}</span>
          </a>
          <a href="https://zalo.me/84901389998" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center py-2 text-navy-900 bg-white">
            <span className="font-bold text-xs uppercase">Chat Zalo</span>
            <span className="text-xs">Tư vấn 24/7</span>
          </a>
        </div>

        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
