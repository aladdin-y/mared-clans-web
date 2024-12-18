"use client"

import { motion } from 'framer-motion'
import {  Command, HelpCircle, Globe } from 'lucide-react'




export default function Header() {
return (
    <div>
          <header className="bg-gray-800 p-4 flex items-center justify-between">
          <div className="flex items-center">

            <h2 className="text-xl font-bold">
            Dashboard
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <Command size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <HelpCircle size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <Globe size={20} />
            </motion.button>
          </div>
        </header>
    </div>
)
}