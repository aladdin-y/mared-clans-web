"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Icon as LucideIcon, Star, Award, ThumbsUp, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

interface DashboardProps {
  params: {
    clan: string;
  };
}

interface ServerData {
  status?: string;
  errorCode?: number;
  // Add other properties as needed
}

interface StatCardProps {
  icon: typeof LucideIcon;
  title: string;
  value: string;
  change: string;
}

interface ChartCardProps {
  title: string;
}

interface SettingsCardProps {
  title: string;
  description: string;
}

export default function Dashboard({ params }: DashboardProps) {
  const [ServerData, setServerData] = useState<ServerData>({});
  
  useEffect(() => {
    const fetchGuild = async () => {
      try {
        const response = await fetch(`http://localhost:3001/guild/${params.clan}`, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer testw125asdgsdty13dfhad@tW#$YSHG#WHSFY#@hdrhRDTY#hDH#$WTY3wH',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data: ServerData = await response.json();
        if (data.status === "error" && data.errorCode === 1010) {
          setServerData({});
        } else {
          setServerData(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchGuild();
  }, [params.clan]);

  console.log(ServerData);

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-x-hidden">
      <main className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            {false ? (
              <motion.div
                key={1}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4">{"test"} Settings</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <SettingsCard title="General" description="Configure general settings" />
                  <SettingsCard title="Permissions" description="Manage user permissions" />
                  <SettingsCard title="Integrations" description="Set up external integrations" />
                  <SettingsCard title="Notifications" description="Customize notification preferences" />
                  <SettingsCard title="Analytics" description="View detailed analytics" />
                  <SettingsCard title="Advanced" description="Advanced configuration options" />
                </div>
              </motion.div>
            ) : (
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

function StatCard({ icon: Icon, title, value, change }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center mb-4">
        <Icon  />
        <h3 className="text-gray-400">{title}</h3>
      </div>
      <p className="text-2xl font-bold">{value}</p>
      <p className={`text-sm ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
        {change}
      </p>
    </motion.div>
  );
}

function ChartCard({ title }: ChartCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-700 rounded-lg">
        <span className="text-gray-500">Chart Placeholder</span>
      </div>
    </div>
  );
}

function SettingsCard({ title, description }: SettingsCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 px-4 py-2 bg-[#6f74f5] rounded-lg hover:bg-opacity-80 transition-colors"
      >
        Configure
      </motion.button>
    </motion.div>
  );
}