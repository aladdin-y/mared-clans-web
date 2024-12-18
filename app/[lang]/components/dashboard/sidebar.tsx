"use client"
import { Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import {  ChevronsUpDownIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { i18n } from 'next-i18next';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Sidebar({ FullInfo, isMenuOpen, isMobile, isSidebarOpen, menuItems }: {FullInfo: {type: string,info:{avatar:string,name:string}}, isMenuOpen: boolean, isMobile: boolean, isSidebarOpen: boolean, menuItems: {  label: string, Items: {  href: string, label: string, isNew: boolean, icon: React.ComponentType }[] }[] }) {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});
  const router = useRouter();  

  useEffect(() => {
    const allOpen: { [key: number]: boolean } = {};
    menuItems?.forEach((_, index) => {
      allOpen[index] = true;
    });
    setOpenItems(allOpen);
  }, [menuItems]);

  const toggleCollapse = (index: number) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: Number(isMenuOpen) === 1 ? (isMobile ? 0 : 0) : (isMobile ? -20 : 0) }}
      exit={{ opacity: 0, x: isMobile ? -20 : 0 }}
      transition={{ duration: 0.2 }}
      className={`flex md:flex overflow-none static backdrop-blur-sm md:backdrop-blur-none w-full ${isSidebarOpen ? 'flex' : 'hidden md:flex'}`}
    >
      <aside className={` md:flex flex-col w-64 bg-gray-800 p-4 overflow-y-auto h-screen border-r-1 border-white`}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#6f74f5] flex items-center justify-center mr-3">
              <span className="text-xl font-bold rounded-full">
                <img className='rounded-full' src={FullInfo.info.avatar} />
              </span>
            </div>
            <h1 className="text-xl font-bold">{`${FullInfo.info.name}`}</h1>
          </div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          className="w-full py-2 px-4 bg-[#6f74f5] rounded-lg flex items-center justify-between hover:bg-opacity-80 transition-colors mb-6"
          onClick={() => router.replace(`${i18n?.language}/dashboard?type=${FullInfo?.type.toLowerCase()}`)}
        >
          <span>{FullInfo?.type}</span>
          <ChevronsUpDownIcon size={20} />
        </motion.div>

        <nav className="space-y-2">
          {menuItems.map((menu, index) => (
            <div key={index}>
             <div className='border-white border-b-1'>
             <button
              onClick={() => toggleCollapse(index)}
              className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-700 transition-colors  "
              >
              <span>{menu.label}</span>
              {openItems[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
             </div>
              <Transition
              show={openItems[index] ? true : false}
              enter="transition ease-out duration-300"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-200"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >

                <ul style={{ listStyleType: 'none', paddingLeft: '20px', margin: 0 }}>
                  {menu.Items.map((item) => (
                    <motion.button
                      key={item.label}
                      onClick={() => router.replace(`${i18n?.language}/${item.href}`)}
                      initial={{ rotate: 50, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      whileTap={{ scale: 0.95, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 150 }}
                      className="flex items-center w-full p-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1, type: 'spring', stiffness: 200 }}
                        className="text-[#6f74f5]"
                      >
                        <item.icon  />
                      </motion.div>
                      <span>{item.label}</span>
                      {item.isNew && (
                        <span className="ml-auto bg-[#6f74f5] text-xs px-2 py-1 rounded-full">NEW</span>
                      )}
                    </motion.button>
                  ))}
                </ul>
              </Transition>
            </div>
          ))}
        </nav>
      </aside>
    </motion.div>
  );
}
