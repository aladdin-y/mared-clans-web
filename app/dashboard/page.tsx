"use client"

import { useEffect, useState } from 'react'
import {  ChevronDown } from 'lucide-react'
import Navbar from '../components/navbar';
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from '../components/footer';
import { useSearchParams } from 'next/navigation';
import { useRouter } from "next/navigation"; // للوصول إلى الـ router
import config from "../../config.json"

import Cookies from 'js-cookie';

import {  Menu, MenuButton,  MenuItem, MenuItems, MenuSection } from '@headlessui/react'
import { useTranslation } from 'react-i18next';

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const code = Cookies.get("scc-code");
    const [UserData, setUserData] = useState({});
  const [LastData, setLastData] = useState([]);
  const [loading, setLoading] = useState(true); // حالة التحميل

    


  const searchParams = useSearchParams();
  let type = searchParams.get('type') || "servers";
  const { t, i18n } = useTranslation('dashboard');
  const [isReady, setIsReady] = useState(false);




  if (type != "servers" && type != "clans") type = "servers";
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${config.API_URL}/users/${code}`, {
          method: 'GET',
      
          headers: {
            'Authorization': `Bearer ${config.AUTHORIZATION}`, // استبدل YOUR_TOKEN_HERE بالتوكن الصحيح
            'Content-Type': ' application/x-www-form-urlencoded'
          }
        });

        if (!response.ok) {
        console.log("test")

        }

        const data = await response.json();
if(data.status == "error" && data.errorCode == 1010){
        console.log("test")
          
        }

      
        
        setUserData(data.user);


  
      } catch (err) {
        console.log(err)
          }
    };


    fetchUser();
    

  
    
}, [code]);


useEffect(() => {
  const controller = new AbortController();
  const signal = controller.signal;
  
  if (!UserData.id) return;

  setLoading(true);
  const currentRequestType = type; // تحديد نوع الطلب الحالي
  
  const fetchData = async () => {
    try {
      const url = 
        type === "servers"
          ? `${config.API_URL}/users/${code}/guilds`
          : `${config.API_URL}/users/user_clans/${UserData.id}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${config.AUTHORIZATION}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        signal, // دعم الإلغاء
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();

      if (data.status === "error" && data.errorCode === 1010) {
        setLastData([]);
        return;
      }

      // التأكد من أن نوع الطلب لم يتغير
      if (currentRequestType !== type) return;

      const updatedData = (type === "servers" ? data.guilds : data.clans).map(item => ({
        ...item,
        id: type === "servers" ? BigInt(item.id) : item.id,
        logo: (type === "servers" ? `https://cdn.discordapp.com/icons/${item.id}/${item.icon}?size=1024` : item.logo),
        banner: (type === "servers" && item.banner 
          ? `https://cdn.discordapp.com/banners/${item.id}/${item.banner}?size=4096` 
          : item.banner),
        type
      }));

      setLastData(updatedData);
    
    } catch (err) {
      console.error(err.message);
      if (currentRequestType === type) setLastData([]);
    } finally {
      // التأكد من أن نوع الطلب لم يتغير قبل تحديث حالة التحميل
      if (currentRequestType === type) {
        if(type == "clans"){
          setTimeout(() => {
            setLoading(false)
          }, 2000)
        }else {
          setLoading(false)

        }
  
      };
    }
  };

  fetchData();

  return () => controller.abort(); // يتم إلغاء الطلب عند تنظيف التأثير
}, [type, UserData.id]);

const filteredData = LastData.filter(item => 
  (selectedCategory === '' || (selectedCategory === 'owner' && item.IsOwner) || (selectedCategory === 'admin' && !item.IsOwner)) && 
(item.name.toLowerCase().includes(searchTerm.toLowerCase()))
);




useEffect(() => {
  if (i18n.isInitialized) {
    setIsReady(true);
  }
}, [i18n.isInitialized]);

if (!isReady) {
  return <></>;
}
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white overflow-hidden ">
     <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 0.5%, 50.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8787dc] to-[#3c3cbf] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      < Navbar />

      <div className='mb-40 '></div> 

      <main className='container mx-auto'>   
        
                 <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" ml-0 mb-10 "
        >
      

          <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#6f74f5] to-[#b8baff]"
      >

        {type === "servers" ? t("main.Selectaserver", "Select a Server") : t("main.SelectaClan", "Select a Clan")}
      </motion.h1>

      <button
        onClick={() => {router.replace('/dashboard?type=servers'); }}
        className={
          "mx-5 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:from-[#5a5fd6] hover:to-[#7a7ee6] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 " +
          (type === "servers"
            ? "bg-gradient-to-r from-[#6f74f5] to-[#8e92ff] border border-transparent"
            : "border border-[#6f74f5]")
        }
      >
        {t("main.servers", "Servers")}
      </button>
      
      <button
        onClick={() => {router.replace('/dashboard?type=clans'); }}
        className={
          "mx-5 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:from-[#5a5fd6] hover:to-[#7a7ee6] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 " +
          (type === "clans"
            ? "bg-gradient-to-r from-[#6f74f5] to-[#8e92ff] border border-transparent"
            : "border border-[#6f74f5]")
        }
      >
        {t("main.clans", "Clans")}
      </button>

        </motion.div>



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5"
        >
 <div className="flex items-center ">
    {/* حقل البحث */}
    <input
      type="search"
      placeholder={t("main.search", "Search")}
      name="q"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="flex-1 p-2 mx-4 rounded-lg bg-white bg-opacity-5 text-gray-300 placeholder-gray-400 focus:outline-none"
    />

    {/* القائمة المنسدلة */}
  <Menu as="div" className="relative">
      {() => (
        <>
          <div>
            <MenuButton className="flex items-center space-x-1 bg-white bg-opacity-5 rounded-lg px-3 py-2 text-sm">
              <span className="absolute -inset-1.5" />
              <span>{t("main.filter","Filter")}</span>
              <ChevronDown size={16} />
            </MenuButton>
          </div>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-[#1a1a1a] text-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <MenuSection>
              <MenuItem>
                <span
                  className="block px-4 py-2 text-sm text-white data-[focus]:bg-[#2a2a2a] data-[focus]:outline-none hover:bg-[#2a2a2a] transition-colors my-2"
                  onClick={() => {
                    // هنا تضع الوظيفة التي تريد تنفيذها عند الضغط
                    setSelectedCategory('')
                  }}
               >
                  {t("main.all","All")}
                </span>
              </MenuItem>
              
              <MenuItem>
                <span
                  className="block px-4 py-2 text-sm text-white data-[focus]:bg-[#2a2a2a] data-[focus]:outline-none hover:bg-[#2a2a2a] transition-colors my-2"
                  onClick={() => {
                    // هنا تضع الوظيفة التي تريد تنفيذها عند الضغط
                    setSelectedCategory('owner')
                  }}
               >
                  {t("main.owner","Owned")}
                </span>
              </MenuItem>
              
              <MenuItem>
                <span
                  className="block px-4 py-2 text-sm text-white data-[focus]:bg-[#2a2a2a] data-[focus]:outline-none hover:bg-[#2a2a2a] transition-colors my-2"
                  onClick={() => {
                    // هنا تضع الوظيفة التي تريد تنفيذها عند الضغط
                    setSelectedCategory('admin')
                  }}
               >
                  {t("main.admin","Just Admin")}
                </span>
              </MenuItem>
              
            </MenuSection>
          </MenuItems>
        </>
      )}
    </Menu>
  </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" divider "
        >

        </motion.div>
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}>
         
            </motion.div>

        <div className="container mx-auto">
          <div className="">
            {/* Sidebar */}
      

            {/* Commands List */}
            
            <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 " dir='ltr'>
            {
              
loading ? (<>
<div 
  className="bg-white bg-opacity-5 rounded-lg overflow-hidden shadow-md w-full max-w-xs mx-auto animate-pulse"
>
  {/* الجزء العلوي - البانر */}
  <div className="w-full h-24 bg-white bg-opacity-5"></div>

  {/* الجزء السفلي - المحتوى */}
  <div className="p-4">
    {/* الشعار */}
    <div className="flex items-center space-x-3 -mt-8">
      <div className="w-16 h-16 rounded-2xl bg-white bg-opacity-5"></div>
      <div className="h-6 w-1/2 bg-white bg-opacity-5 rounded"></div>
    </div>

    <div className="flex items-center justify-between space-x-3 mt-4">
      <div className="h-4 w-16 bg-white bg-opacity-5 rounded"></div>
      <div className="h-8 w-20 bg-white bg-opacity-5 rounded"></div>
    </div>
  </div>
</div>

<div 
  className="bg-white bg-opacity-5 rounded-lg overflow-hidden shadow-md w-full max-w-xs mx-auto animate-pulse"
>
  {/* الجزء العلوي - البانر */}
  <div className="w-full h-24 bg-white bg-opacity-5"></div>

  {/* الجزء السفلي - المحتوى */}
  <div className="p-4">
    {/* الشعار */}
    <div className="flex items-center space-x-3 -mt-8">
      <div className="w-16 h-16 rounded-2xl bg-white bg-opacity-5"></div>
      <div className="h-6 w-1/2 bg-white bg-opacity-5 rounded"></div>
    </div>

    <div className="flex items-center justify-between space-x-3 mt-4">
      <div className="h-4 w-16 bg-white bg-opacity-5 rounded"></div>
      <div className="h-8 w-20 bg-white bg-opacity-5 rounded"></div>
    </div>
  </div>
</div>

<div 
  className="bg-white bg-opacity-5 rounded-lg overflow-hidden shadow-md w-full max-w-xs mx-auto animate-pulse"
>
  {/* الجزء العلوي - البانر */}
  <div className="w-full h-24 bg-white bg-opacity-5"></div>

  {/* الجزء السفلي - المحتوى */}
  <div className="p-4">
    {/* الشعار */}
    <div className="flex items-center space-x-3 -mt-8">
      <div className="w-16 h-16 rounded-2xl bg-white bg-opacity-5"></div>
      <div className="h-6 w-1/2 bg-white bg-opacity-5 rounded"></div>
    </div>

    <div className="flex items-center justify-between space-x-3 mt-4">
      <div className="h-4 w-16 bg-white bg-opacity-5 rounded"></div>
      <div className="h-8 w-20 bg-white bg-opacity-5 rounded"></div>
    </div>
  </div>
</div>

<div 
  className="bg-white bg-opacity-5 rounded-lg overflow-hidden shadow-md w-full max-w-xs mx-auto animate-pulse"
>
  {/* الجزء العلوي - البانر */}
  <div className="w-full h-24 bg-white bg-opacity-5"></div>

  {/* الجزء السفلي - المحتوى */}
  <div className="p-4">
    {/* الشعار */}
    <div className="flex items-center space-x-3 -mt-8">
      <div className="w-16 h-16 rounded-2xl bg-white bg-opacity-5"></div>
      <div className="h-6 w-1/2 bg-white bg-opacity-5 rounded"></div>
    </div>

    <div className="flex items-center justify-between space-x-3 mt-4">
      <div className="h-4 w-16 bg-white bg-opacity-5 rounded"></div>
      <div className="h-8 w-20 bg-white bg-opacity-5 rounded"></div>
    </div>
  </div>
</div>

<div 
  className="bg-white bg-opacity-5 rounded-lg overflow-hidden shadow-md w-full max-w-xs mx-auto animate-pulse"
>
  {/* الجزء العلوي - البانر */}
  <div className="w-full h-24 bg-white bg-opacity-5"></div>

  {/* الجزء السفلي - المحتوى */}
  <div className="p-4">
    {/* الشعار */}
    <div className="flex items-center space-x-3 -mt-8">
      <div className="w-16 h-16 rounded-2xl bg-white bg-opacity-5"></div>
      <div className="h-6 w-1/2 bg-white bg-opacity-5 rounded"></div>
    </div>

    <div className="flex items-center justify-between space-x-3 mt-4">
      <div className="h-4 w-16 bg-white bg-opacity-5 rounded"></div>
      <div className="h-8 w-20 bg-white bg-opacity-5 rounded"></div>
    </div>
  </div>
</div>

<div 
  className="bg-white bg-opacity-5 rounded-lg overflow-hidden shadow-md w-full max-w-xs mx-auto animate-pulse"
>
  {/* الجزء العلوي - البانر */}
  <div className="w-full h-24 bg-white bg-opacity-5"></div>

  {/* الجزء السفلي - المحتوى */}
  <div className="p-4">
    {/* الشعار */}
    <div className="flex items-center space-x-3 -mt-8">
      <div className="w-16 h-16 rounded-2xl bg-white bg-opacity-5"></div>
      <div className="h-6 w-1/2 bg-white bg-opacity-5 rounded"></div>
    </div>

    <div className="flex items-center justify-between space-x-3 mt-4">
      <div className="h-4 w-16 bg-white bg-opacity-5 rounded"></div>
      <div className="h-8 w-20 bg-white bg-opacity-5 rounded"></div>
    </div>
  </div>
</div>

<div 
  className="bg-white bg-opacity-5 rounded-lg overflow-hidden shadow-md w-full max-w-xs mx-auto animate-pulse"
>
  {/* الجزء العلوي - البانر */}
  <div className="w-full h-24 bg-white bg-opacity-5"></div>

  {/* الجزء السفلي - المحتوى */}
  <div className="p-4">
    {/* الشعار */}
    <div className="flex items-center space-x-3 -mt-8">
      <div className="w-16 h-16 rounded-2xl bg-white bg-opacity-5"></div>
      <div className="h-6 w-1/2 bg-white bg-opacity-5 rounded"></div>
    </div>

    <div className="flex items-center justify-between space-x-3 mt-4">
      <div className="h-4 w-16 bg-white bg-opacity-5 rounded"></div>
      <div className="h-8 w-20 bg-white bg-opacity-5 rounded"></div>
    </div>
  </div>
</div>

<div 
  className="bg-white bg-opacity-5 rounded-lg overflow-hidden shadow-md w-full max-w-xs mx-auto animate-pulse"
>
  {/* الجزء العلوي - البانر */}
  <div className="w-full h-24 bg-white bg-opacity-5"></div>

  {/* الجزء السفلي - المحتوى */}
  <div className="p-4">
    {/* الشعار */}
    <div className="flex items-center space-x-3 -mt-8">
      <div className="w-16 h-16 rounded-2xl bg-white bg-opacity-5"></div>
      <div className="h-6 w-1/2 bg-white bg-opacity-5 rounded"></div>
    </div>

    <div className="flex items-center justify-between space-x-3 mt-4">
      <div className="h-4 w-16 bg-white bg-opacity-5 rounded"></div>
      <div className="h-8 w-20 bg-white bg-opacity-5 rounded"></div>
    </div>
  </div>
</div>

</>): (
  filteredData.map(server => (
<div 
  key={server.id}
  className="bg-white bg-opacity-5 rounded-lg overflow-hidden shadow-md w-full max-w-xs mx-auto"
>
  {/* الجزء العلوي - البانر */}
  <div
    className="w-full h-24"
    style={{
      backgroundImage: `url(${
        server.banner || server.logo || "https://support.discord.com/hc/user_images/PRywUXcqg0v5DD6s7C3LyQ.jpeg"
      })`, backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  ></div>

  {/* الجزء السفلي - المحتوى */}
  <div className="p-4">
    {/* الشعار */}
    <div className="flex items-center space-x-3 -mt-8">
      <img 
    src={server.logo ? server.logo : "https://support.discord.com/hc/user_images/PRywUXcqg0v5DD6s7C3LyQ.jpeg"} 
    alt="Logo" 
        className="w-16 h-16 rounded-2xl border-4 border-[#1a1a1a]" 
      />
      <h3 className="text-white font-bold text-lg">{`${server.name}`}</h3>
    </div>
    <div className="flex items-center justify-between space-x-3">
      <p className="text-gray-400 text-xs">{server.IsOwner ? (t("main.owner","Owner")) : t("main.admin","Admin")}</p>
      <Link 
        href={`dashboard/${type}/${server.id}`}
        className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
      >
        {t("main.Edit","Edit")}
      </Link>
    </div>
  </div>
</div>

  ))
)
}


            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
