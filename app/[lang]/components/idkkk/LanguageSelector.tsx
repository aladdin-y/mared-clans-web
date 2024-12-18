"use client";

import { useState, useEffect, useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown} from 'lucide-react';


import i18n from "../../i18n";
import "flag-icons";
interface LanguageSelectorProps {
  isMobileMenuOpen: boolean;
}
import { useRouter } from 'next/router';
const LanguageSelector = ({ isMobileMenuOpen }: LanguageSelectorProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
const router = useRouter();
  
    const languages = [
      { code: 'en', flag: 'us', name: 'English' },
      { code: 'ar', flag: 'sa', name: 'العربية' },
      { code: 'de', flag: 'de', name: 'Germany' },
      { code: 'fr', flag: 'fr', name: 'France' },
    ];
  
    function changeLang(lang: { code: string; flag: string; name: string }) {
      i18n.changeLanguage(lang.code);
      const currentUrl = window.location.href;
      const newUrl = currentUrl.replace(/\/(en|ar|de|fr)\//, `/${lang.code}/`);
    
      router.push(newUrl);
      const html = document.documentElement;
      html.setAttribute('dir', lang.code == "ar" ? 'rtl' : 'ltr');
  
      setIsOpen(false); // إغلاق القائمة عند تغيير اللغة
    }
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setIsOpen(false); // إغلاق القائمة إذا كان النقر خارجها
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    const languageInfo = languages.find(
      (lang) => lang.code === i18n.language
    ) || languages[0];
  
    return (
      <Suspense fallback="loading" >
  
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-1 bg-white bg-opacity-10 rounded-full px-3 py-2 text-sm"
        >
          <i className={`fi fi-${languageInfo.flag} w-5`}></i>
          <ChevronDown size={16} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`${
                isMobileMenuOpen ? "relative" : "absolute"
              } mt-2 bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden z-50`}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className="flex items-center  w-full px-4 py-2 text-left hover:bg-[#2a2a2a] transition-colors"
                  onClick={() => changeLang(lang)}
                >
                  <i className={`fi fi-${lang.flag} mx-2`}></i>
                  <span>{lang.name}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </Suspense>
    );
  };

  
  export default LanguageSelector