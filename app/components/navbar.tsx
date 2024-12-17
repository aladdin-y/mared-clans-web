"use client";

import { useState, useEffect, useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  Menu as IconMenu, X } from 'lucide-react';
import { useTranslation } from 'next-i18next';

import dynamic from 'next/dynamic';

import { useRouter } from 'next/navigation';
import "flag-icons";
import Cookies from 'js-cookie';


const LanguageSelector = dynamic(() => import('./idkkk/LanguageSelector'), { ssr: false });
const Profile = dynamic(() => import('./idkkk/Profile'), { ssr: false });



const Navbar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const router = useRouter();  
  const { t } = useTranslation('navbar');


  const handleLogin = () => {
    const loginWindow = window.open('/dashboard', 'loginWindow', 'width=600,height=600');
    if (loginWindow) {
      loginWindow.focus();
    }
  };


  const sccCode = Cookies.get('scc-code');

  // إرجاع الكود ككائن JSON
  const IslogIn = {
    code: sccCode || "",
    status: !!sccCode, // تتحقق مما إذا كانت قيمة sccCode موجودة وتعيد true أو false
  };
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = 1 - Math.min(scrollY / 200, 0.6);
      setScrollOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false); // إغلاق القائمة إذا كان النقر خارجها
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Suspense fallback="loading" >
    <motion.nav
    
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
      transition={{ duration: 0.5 }}
      style={{ opacity: scrollOpacity }}
      className="fixed top-0 left-0 right-0 z-50 px-8 pt-8"
    >
      <main className="bg-[#1a1a1a] bg-opacity-80 backdrop-blur-md rounded-2xl shadow-lg max-w-7xl mx-auto">
        <div className="px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-gradient-to-br from-[#6f74f5] to-[#8e92ff] rounded-full"></div>
            <span className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6f74f5] to-[#b8baff]">Mared Clans</span>
            <div className="hidden md:flex items-center space-x-2 rtl:space-x-reverse">

    
 <button onClick={() => router.push(`/commands`)} className="text-sm hover:text-[#6f74f5] transition-colors">
      {t('commands',"Commands")}
              </button>

<button onClick={() => router.push(`https://discord.gg/your-server-link`)} className="text-sm hover:text-[#6f74f5] transition-colors">
  {t('contactus', "Contact us")}
</button>
          </div>
          </div>
          <div className="hidden md:flex items-center ">
       
            {
              IslogIn.status ?
             (<Profile UserCode={IslogIn.code} />)
              : (   <>
            
                <button onClick={handleLogin} className="bg-gradient-to-r from-[#6f74f5] to-[#8e92ff] text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:from-[#5a5fd6] hover:to-[#7a7ee6] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    Login
                  </button>
                  <div className='mx-2'></div>

             <LanguageSelector isMobileMenuOpen={isMobileMenuOpen} />
    </>
              )
            }
         
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <IconMenu size={20} />}
          </button>
        </div>
      </main>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
          ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#1a1a1a] bg-opacity-80 backdrop-blur-md mt-2 rounded-xl shadow-lg max-w-7xl mx-auto px-6 py-4 space-y-3"          >
              <a href="#" className="block text-sm hover:text-[#6f74f5] transition-colors">Features</a>
              <a href="#" className="block text-sm hover:text-[#6f74f5] transition-colors">Premium</a>
             

              {
              IslogIn.status ?
             (<Profile UserCode={IslogIn.code} />)
              : (<>
                 <button onClick={handleLogin} className="w-full bg-gradient-to-r from-[#6f74f5] to-[#8e92ff] text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-[#5a5fd6] hover:to-[#7a7ee6] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Login
              </button>
              
         <div className='mx-2'></div>
         <LanguageSelector isMobileMenuOpen={false} />
              </>)
            }
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </Suspense>
  
  );
};

export default Navbar;
