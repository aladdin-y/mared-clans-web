"use client"

import { useEffect } from "react";
// import { MessageSquare,  Bell, Cog, UserPlus, } from 'lucide-react'
// import {  Menu } from 'lucide-react'


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






import i18n from "./[lang]/i18n";
import { useRouter } from "next/navigation";




export default  (function Component() {
  
  const router = useRouter();


  useEffect(() => {
    if (i18n.language) {
      router.push(`/${i18n.language}`);
    }
  }, [i18n.language]);

if (i18n.language !== 'ar') {
  return <></>;
}
return <></>;
} )