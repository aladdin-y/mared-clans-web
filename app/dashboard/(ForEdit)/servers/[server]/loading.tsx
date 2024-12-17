"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Star, Award, ThumbsUp, Globe } from 'lucide-react';

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            {(
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4">Dashboard Overview</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <StatCard icon={Star} title="Total Users" value="10,532" change="+5%" />
                  <StatCard icon={Award} title="Active Servers" value="25" change="+2" />
                  <StatCard icon={ThumbsUp} title="Commands Used" value="1,234,567" change="+10%" />
                  <StatCard icon={Globe} title="Global Rank" value="#42" change="+3" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ChartCard title="User Growth" />
                  <ChartCard title="Command Usage" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function StatCard({ icon: Icon, title, value, change }:{icon: React.ComponentType, title: string, value: string, change: string}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center mb-4">
        <Icon />
        <h3 className="text-gray-400">{title}</h3>
      </div>
      <p className="text-2xl font-bold">{value}</p>
      <p className={`text-sm ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
        {change}
      </p>
    </motion.div>
  );
}

function ChartCard({ title }:{title: string}) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-700 rounded-lg">
        <span className="text-gray-500">Chart Placeholder</span>
      </div>
    </div>
  );
}
