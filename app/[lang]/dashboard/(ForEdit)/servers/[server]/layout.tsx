"use client"
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { useEffect, useState } from 'react'
import Sidebar from '../../../../components/dashboard/sidebar'
import Navbar from '../../../../components/dashboard/navbar'
import { Award, Star, ThumbsUp } from 'lucide-react'
import config from '../../../../../../config.json'




export default function RootLayout({
  children,
params
}: {
  children: React.ReactNode,
  params:{ server: string }
}) {


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || "";
    const mobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
    setIsMobile(mobile);
  }, [isMobile]);

  interface GuildInfoType {
    avatar: string;
    name: string;
  }

  const [GuildInfo, setGuildInfo] = useState<GuildInfoType>({ avatar: '', name: '' })
  const [isMenuOpen, setIsMenuOpen] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const storedMenuState = sessionStorage.getItem('IsMenuOpen');
      if (storedMenuState !== null) {
        setIsMenuOpen(Number(storedMenuState));
      }
    }, 0);
    if (!isMobile) {
      return () => clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, []);





  const menuItems = [
    { label: 'Overview2', Items: [
      { icon: Award, label: 'Membership', isNew: true , href: `/dashboard/${params.server}/membership`},
      { icon: ThumbsUp, label: 'Manage Premium', isNew: false, href: '/dashboard/manage-premium'},
    ]},
    { label: 'test', Items: [
      { icon: Star, label: 'Overview', isNew: false, href: '/dashboard/test/overview' },
      { icon: Award, label: 'Membership', isNew: true , href: '/dashboard/test/membership'},
      { icon: ThumbsUp, label: 'Manage Premium', isNew: false , href: '/dashboard/test/manage-premium'},
    ]},
  ]
  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await fetch(`${config.API_URL}/guild/${params.server}`, {
        headers: {
          'Authorization': `Bearer ${config.AUTHORIZATION}`
        }
      });
      const data = await response.json();
      setGuildInfo(data);
      } catch (error) {
      console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [params.server]);
  
  return (

<div className={`${inter.className} flex h-screen bg-gray-900 text-white overflow-hidden`}>


    <div className='flex h-screen bg-gray-900 text-white overflow-hidden'>
      <Sidebar 
        FullInfo={{ type: "Servers", info: { avatar: GuildInfo.avatar, name: GuildInfo.name } }} 
        isMenuOpen={!!isMenuOpen} 
        isMobile={isMobile} 
        isSidebarOpen={isSidebarOpen} 
        menuItems={menuItems} 
      />
    </div>
      <div className='flex-1 flex flex-col overflow-hidden'>
        <Navbar toggleSidebar={toggleSidebar} />
        {children}
    
      </div>
    
</div>

  )
}