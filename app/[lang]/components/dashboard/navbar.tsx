"use client"
import { Menu } from 'lucide-react';
import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';

interface NavbarProps {
  toggleSidebar: () => void;
}

export default function Navbar({ toggleSidebar }: NavbarProps) {
const Profile = dynamic(() => import('../idkkk/Profile'), { ssr: false });
const sccCode = Cookies.get('scc-code') || "";

return (
      <header className="bg-gray-800 p-4 flex items-center justify-between ">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="mr-4 md:hidden">
            <Menu size={24} />
          </button>
          <h2 className="text-xl font-bold  ">Mared Clans</h2>
        </div>
        <div className="flex item9-center space-x-4">
<Profile UserCode={sccCode} />
         
        </div>
      </header>
    );
  }