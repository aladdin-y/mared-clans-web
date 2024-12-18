"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Navbar from '../components/navbar';
import { motion,  } from "framer-motion";
import Footer from '../components/footer';


import {  Menu, MenuButton, MenuItem, MenuItems, MenuSection,  } from '@headlessui/react'

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {name:"General",code:"general"},
    {name:"Moderation",code:"Moderation"},
  ];

  const commands = [
    { command: '/ban', description: 'ban a member', category: 'Moderation', usage: ["[user] [number]"] },
    { command: '/kick', description: 'kick a member', category: 'Moderation' },
    { command: '/mute', description: 'mute a member', category: 'Moderation' },
    { command: '/help', description: 'Bot\'s help menu', category: 'General' },
    { command: '/ping', description: 'Get bot\'s host server status & latency', category: 'General' },
    { command: '/invite', description: 'Invite bot to your server', category: 'General' },
    { command: '/leaderboard', description: 'Get your servers leaderboards', category: 'Leveling' },
    { command: '/reactionrole', description: 'start the setup process for creating a reaction role', category: 'Premium' },
    { command: '/slowmode', description: 'add slowmode for a channel', category: 'Premium' },
  ];

  const filteredCommands = commands.filter(command => 
    (!selectedCategory  || command.category === selectedCategory) &&
    command.command.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      <main className='container mx-auto'>            <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" ml-0 mb-24 "
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#6f74f5] to-[#b8baff]"
          >
            Mared Clans commands
          </motion.h1>
          <div className="">

  <motion.p
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="text-xl mb-8 text-gray-400 w-4/6 "
  >
Discover all Mared Clans commands and get the information you need quickly and effortlessly.
</motion.p>

</div>



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
      placeholder="Search for commands"
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
              <span>Filter</span>
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
                  All
                </span>
              </MenuItem>
              {
                (categories.map((categorie )=> (
                  <div
                  key={categorie.code}
                  >
                    
                    <MenuItem>
                <span
                  className="block px-4 py-2 text-sm text-white data-[focus]:bg-[#2a2a2a] data-[focus]:outline-none hover:bg-[#2a2a2a] transition-colors my-2"
                  onClick={() => {
                    // هنا تضع الوظيفة التي تريد تنفيذها عند الضغط
                    setSelectedCategory(categorie.code)
                  }}
               >
                {categorie.name}
                </span>
              </MenuItem>
                  </div>
                ) ))
              }
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
            
            <div className="flex-1 ">
            <div className=" rounded-lg p-6">
 
  {/* قائمة الأوامر */}
  <div className="space-y-4 mt-4">
    {filteredCommands.map((cmd) => (
 <div
  key={cmd.command}
  className="p-4 rounded-lg cursor-pointer bg-white bg-opacity-10"
>
        <div className="flex justify-between items-center">
          <span className="font-semibold">
            {cmd.command} - <span className="text-gray-400">{cmd.description}</span>
          </span>
        </div>
        {cmd.usage && (
          <div className="mt-4 text-gray-300">
            <h4 className="font-semibold">Usage:</h4>
            <ul className="list-disc ml-6">
              {cmd.usage.map((use, i) => (
                <li key={i}>{use}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ))}
  </div>
</div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
