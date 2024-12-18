"use client"

import { useEffect,  useState } from 'react'
import { ArrowRight,   ArrowLeft } from 'lucide-react'
// import { MessageSquare,  Bell, Cog, UserPlus, } from 'lucide-react'
// import {  Menu } from 'lucide-react'
import Marquee from "react-fast-marquee";

import Navbar from './components/navbar';
import { useTranslation } from 'next-i18next';
import i18n from "./i18n";

// const LanguageSelector = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const languages = [
//     { code: 'en', flag: '🇬🇧', name: 'English' },
//     { code: 'ar', flag: '🇸🇦', name: 'العربية' },
//     { code: 'pt', flag: '🇵🇹', name: 'Português' },
//     { code: 'fr', flag: '🇫🇷', name: 'Français' },
//   ]

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center space-x-1 bg-white bg-opacity-10 rounded-full px-3 py-1 text-sm"
//       >
//         <Globe size={16} />
//         <span>EN</span>
//         <ChevronDown size={16} />
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="absolute right-0 mt-2 bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden z-50"
//           >
//             {languages.map((lang) => (
//               <button
//                 key={lang.code}
//                 className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-[#2a2a2a] transition-colors"
//               >
//                 <span>{lang.flag}</span>
//                 <span>{lang.name}</span>
//               </button>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }


// const DiscordVisualizer = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const messages = [
//     { user: 'aladdin', content: 'HI CLANS BOT', timestamp: '29/9/2024' },
//     { user: 'aladdin', content: 'NEW DISCORD CLANS BOTTTTT', timestamp: '29/9/2024' },
//     { user: 'aladdin', content: '@BOTTTTT', timestamp: '29/9/2024' },
//   ]

//   return (
//     <div className="fixed bottom-8 right-8 z-50">
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-[#6f74f5] text-white rounded-full p-4 shadow-lg"
//       >
//         <MessageSquare size={24} />
//       </motion.button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.8, y: 20 }}
//             className="absolute bottom-16 right-0 w-96 bg-[#36393f] rounded-lg shadow-lg overflow-hidden"
//           >
//             <div className="flex justify-between items-center bg-[#202225] p-4">
//               <h3 className="text-lg font-semibold text-white"># chat</h3>
//               <div className="flex space-x-4">
//                 <Bell size={20} className="text-gray-400" />
//                 <UserPlus size={20} className="text-gray-400" />
//                 <Cog size={20} className="text-gray-400" />
//               </div>
//             </div>
//             <div className="h-96 overflow-y-auto p-4 space-y-4">
//               {messages.map((msg, index) => (
//                 <div key={index} className="flex flex-col">
//                   <div className="flex items-start space-x-2">
//                     <div className="w-10 h-10 rounded-full bg-[#6f74f5] flex items-center justify-center text-white font-bold">
//                       {msg.user[0]}
//                     </div>
//                     <div>
//                       <p className="font-semibold text-white">{msg.user} <span className="text-xs text-gray-400">{msg.timestamp}</span></p>
//                       <p className="text-sm text-gray-300 whitespace-pre-wrap">{msg.content}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="bg-[#40444b] p-4">
//               <input
//                 type="text"
//                 placeholder="Message #chat"
//                 className="w-full bg-[#40444b] text-gray-200 placeholder-gray-500 outline-none"
//               />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }







import {
  motion,
  // AnimatePresence,
  useScroll,
  useMotionValueEvent
  // useVelocity,
  // useAnimationFrame
} from "framer-motion";
import Footer from './components/footer';

const AllFeatures = () => {
  const { scrollY } = useScroll();

  const { t } = useTranslation('home');
  const FeaturesData = [
    {   
      botImg: "/imgs/bot/main.png",
      title: t("features.title", "Features"),
      description: t("features.description", "Discover the powerful features that Mared Clans offers to enhance your clan management experience. From automated member management to detailed activity logs, Mared Clans provides all the tools you need to run a successful clan. Unlock the full potential of your Discord server with our bot! Powerful features and smart tools designed to make your experience more enjoyable and engaging."),
      Img2: "https://cdn.discordapp.com/attachments/1132423311721250928/1305944175434530896/4aY5agF.png?ex=6761090a&is=675fb78a&hm=9f955fe0ab0a61971594632b2145d78a8ac5381dfd186032d7809aa2686bfecf&",
      scroll: 1000
    },
    {   
      botImg: "/imgs/bot/customizable.png",
      title: t("features.customizable.title", "Fully Customizable"),
      description: t("features.customizable.description", "Easily customize all bot commands and images with a simple and beautiful interface."),
      Img2: "https://cdn.discordapp.com/attachments/1132423311721250928/1305944175434530896/4aY5agF.png?ex=6761090a&is=675fb78a&hm=9f955fe0ab0a61971594632b2145d78a8ac5381dfd186032d7809aa2686bfecf&",
      scroll: 1200
    },
    {   
      botImg: "/imgs/bot/fast.png",
      title: t("features.fast.title", "Fast Performance"),
      description: t("features.fast.description", "Enjoy quick response times and smooth operation, making your clan management efficient and hassle-free."),
      Img2: "https://cdn.discordapp.com/attachments/1132423311721250928/1305944175434530896/4aY5agF.png?ex=6761090a&is=675fb78a&hm=9f955fe0ab0a61971594632b2145d78a8ac5381dfd186032d7809aa2686bfecf&",
      scroll: 1600
    },
    {   
      botImg: "/imgs/bot/easy.png",
      title: t("features.easy.title", "Quick and Easy"),
      description: t("features.easy.description", "Simple setup and easy navigation, allowing you to start right away. Manage your tasks effortlessly with an intuitive design that saves you time."),
      Img2: "https://cdn.discordapp.com/attachments/1132423311721250928/1305944175434530896/4aY5agF.png?ex=6761090a&is=675fb78a&hm=9f955fe0ab0a61971594632b2145d78a8ac5381dfd186032d7809aa2686bfecf&",
      scroll: 2100
    }, 
    {   
      botImg: "/imgs/bot/Users.png",
      title: t("features.userManagement.title", "User Management"),
      description: t("features.userManagement.description", "Complete authority over your account, allowing you to personalize your profile and manage settings effortlessly."),
      Img2: "https://cdn.discordapp.com/attachments/1132423311721250928/1305944175434530896/4aY5agF.png?ex=6761090a&is=675fb78a&hm=9f955fe0ab0a61971594632b2145d78a8ac5381dfd186032d7809aa2686bfecf&",
      scroll: 2600
    }, 
    {   
      botImg: "/imgs/bot/leveling.png",
      title: t("features.leveling.title", "Leveling System"),
      description: t("features.leveling.description", "Track your progress and achievements with a dynamic leveling system that rewards engagement and participation. Celebrate milestones and motivate your community to reach new heights!"),
      Img2: "https://cdn.discordapp.com/attachments/1132423311721250928/1305944175434530896/4aY5agF.png?ex=6761090a&is=675fb78a&hm=9f955fe0ab0a61971594632b2145d78a8ac5381dfd186032d7809aa2686bfecf&",
      scroll: 3100
    },
  ];

  const [currentFeature, setCurrentFeature] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    for (let i = 0; i < FeaturesData.length; i++) {
      if (latest >= FeaturesData[i].scroll && (i === FeaturesData.length - 1 || latest < FeaturesData[i + 1].scroll)) {
        setCurrentFeature(i);
        break;
      }
    }
  });

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <motion.div
          key={FeaturesData[currentFeature].botImg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            alt="Discord Bot"
            src={FeaturesData[currentFeature].botImg}
            className="  w-4/6 lg:w-3/12 md:w-3/12 "
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
        className="divider"
      >
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-4">
        <motion.div
          key={FeaturesData[currentFeature].title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            {FeaturesData[currentFeature].title}
          </h2>
          <p className="text-gray-400 mb-6">
            {FeaturesData[currentFeature].description}
          </p>
        </motion.div>
        <motion.div
          key={FeaturesData[currentFeature].Img2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={FeaturesData[currentFeature].Img2}
            alt="Discord Bot"
            className="rounded-lg shadow-2xl hidden md:block lg:block"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default  (function Component() {
  
  const isArabic = i18n.language === 'ar'; // تحقق من اللغة الحالية

  const { t } = useTranslation('home');




  const [isReady, setIsReady] = useState(false);

  const servers = [
    {name: "Evil", avatar: "https://cdn.discordapp.com/icons/913589714852905030/a_e8bfcc2d1405194c56693b75152d645a.gif?size=1024",members: "16K"},
    {name: "Black Hole", avatar: "https://cdn.discordapp.com/icons/1080952839934844950/a_a9b7b9b0633df9384ae0c2075d6eaca3.gif?size=1024",members: "8K"},
    {name: "Msbah", avatar: "https://cdn.discordapp.com/icons/1143475847391613009/25d4d6c766b9dfcdea970f851ccaa5c0.png?size=1024",members: "1.5K"},
    {name: "Sakura Society", avatar: "https://cdn.discordapp.com/icons/1265521722648690729/ce94c65ea4c75e34f63e48d0266ba712.png?size=1024",members: "650"},
     {name: "Spark Community", avatar: "https://cdn.discordapp.com/icons/1199069490646888518/16d2fa7d402689ce6b3fb2b19db6d1b4.png?size=1024",members: "1K"},
 ]
 useEffect(() => {
  if (i18n.isInitialized) {
    setIsReady(true);
  }
}, [i18n.isInitialized]);

if (!isReady) {
  return <></>;
}
  return (

    <div className=" isolate px-6 pt-14 lg:px-8 min-h-screen text-white ">

   


    <Navbar />
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


     <div className='mb-0 md:mb-20'></div> 


      <main className="pt-32 px-4 max-w-7xl mx-auto ">
    
   
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 "
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#6f74f5] to-[#b8baff]"
          >
            Mared Clans
          </motion.h1>
          <div className="flex justify-center items-center ">

  <motion.p
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="text-xl mb-8 text-gray-400 w-full md:w-4/6 text-center"
  >

        {t('main.Description',"Mared Clans is a fully customizable, multipurpose bot specifically designed for efficient clan management. From personalized clan introductions to advanced logs and many other clan-related features, take full control of your clan community with Mared Clans.")}
  </motion.p>
</div>

<a href="https://discord.com/oauth2/authorize?client_id=1280226211477458945&permissions=1099981909048&integration_type=0&scope=bot" target="_blank" rel="noopener noreferrer">
  <motion.button
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.15 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`bg-[#6f74f5] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg inline-flex group hover:bg-[#5a5fd6] transition-colors items-center ${ 'flex-row'}`}
  >

        {t('main.button', "Add To Discord")}
        {isArabic ? <ArrowLeft className="ml-2 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />}
  </motion.button>
</a>

        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-24"
        >
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">{t("clans.title",'What are Clans?')}</h2>
            <p className="text-gray-400 mb-6">
              {t("clans.description","Clans are groups of players who unite to achieve common goals, whether in electronic games or other activities within the Discord community. Clans provide an ideal environment for cooperation and interaction among members, allowing them to share experiences and plan together to achieve collective accomplishments. By joining a clan, each member can contribute to the team's success and enjoy a shared experience that enhances competitiveness and collaboration among members.")}
              </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#6f74f5] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg inline-flex items-center group hover:bg-[#5a5fd6] transition-colors"
            >
                   {t("clans.button", "Learn More")}
                   {isArabic ? <ArrowLeft className="ml-2 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />}
                   </motion.button>
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 100 }}
          >
            <img
              src="https://cdn.discordapp.com/attachments/1132423311721250928/1305944175434530896/4aY5agF.png?ex=6734deca&is=67338d4a&hm=15d0413d480de24952235beabc376763a7cf375a2430b31e05338ce37d3f64cb&"
              alt="Discord Bot "
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>  
         

        </motion.div>

    <div className="h-[3000px] mb-24">
        <div className=" sticky top-32"> 

< AllFeatures />        
        </div>
        </div>

            
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mb-24 "
        >
          <h2 className="text-3xl font-bold mb-8">{t("Trusted", "Trusted by Top Discord Communities")}</h2>
          <div className="flex flex-wrap justify-center gap-8">

          <div className="relative overflow-hidden ">
  {/* إضافة تدرج بلور على الحافة اليمنى */}
  <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>
  
  {/* إضافة تدرج بلور على الحافة اليسرى */}
  <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>

  <Marquee   style={{ direction: 'ltr'}} // تعديل الاتجاه ديناميكيًا
 pauseOnHover={true} direction='right' autoFill={true} loop={0} speed={150}  className=''>
    {servers.map((server, index) => (
      <motion.div
        key={server.name}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: .1 + index * 0.1, type: 'spring', stiffness: 200 }}
        className="flex flex-col items-center pl-10"
      >
        <div className="flex relative left-0 md:w-full md:left-0 items-center bg-gradient-to-l lg:px-30 from-transparent to-[#6f74f5] justify-start rounded-xl p-6 shadow-lg transform -translate-x-6 md:-translate-x-0">
          <div className="flex-shrink-0">
            <img className="mx-2 w-16 h-16 rounded-full" src={server.avatar} alt={server.name} />
          </div>
          <div className="flex-grow text-center text-white text-xl font-semibold">
            <p>{server.name}</p>
            <div className="flex-grow text-center text-gray-300/70 text-sm">
              <span>+{server.members} Members</span>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </Marquee>
</div>

          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center"
        >

          <h2 className="text-3xl font-bold mb-8"> 
             {t('Ready?', 'Ready to Transform Your Server?')}</h2>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(111, 116, 245, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className={"bg-[#6f74f5] text-white px-8 mb-6 mt-2 py-3 rounded-full text-lg font-semibold shadow-lg inline-flex items-center group hover:bg-[#5a5fd6] transition-all duration-300" + ` items-center ${'flex-row'}`}
          >

        {t('getStartNow', "Get Started Now")}
        {isArabic ? <ArrowLeft className="ml-2 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />}
          </motion.button>
        </motion.div>
      </main>

 
      <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#8787dc] to-[#3c3cbf] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
   
          <Footer/>
      {/* <DiscordVisualizer /> */}
    </div>
  )
} )