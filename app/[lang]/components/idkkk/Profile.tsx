"use client";

import { useState, useEffect, Suspense } from 'react';
import { ChevronDown } from 'lucide-react';
import { Menu, MenuButton, MenuHeading, MenuItem, MenuItems, MenuSection, MenuSeparator } from '@headlessui/react';
import config from "../../../../config.json";
import { useTranslation } from 'next-i18next';
import { Cairo } from 'next/font/google';
const cairo = Cairo({ weight: ['400', '700'], style: ['normal'], subsets: ['latin', "arabic"], display: 'swap' });

import { useRouter } from 'next/navigation';
import i18n from "../../i18n";
import "flag-icons";
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const LanguageSelector = dynamic(() => import('./LanguageSelector'), { ssr: false });

interface User {
  global_name: string;
  id: string;
  avatar: string;
  email: string;
}

const Profile = ({ UserCode }: { UserCode: string }) => {
  const [UserData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const handleLogin = () => {
    const loginWindow = window.open('https://discord.com/oauth2/authorize?client_id=1280226211477458945&response_type=code&redirect_uri=https%3A%2F%2Fmared-clans-web.vercel.app%2Foauth&scope=identify+guilds+email', 'loginWindow', 'width=600,height=600');
    if (loginWindow) {
      loginWindow.focus();
    }
  };
  const { t } = useTranslation('navbar');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${config.API_URL}/users/${UserCode}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${config.AUTHORIZATION}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        console.log(response)
        if (!response.ok) {
          Cookies.remove('scc-code');
          throw new Error(`Error: ${response.status}`);
        }

          const data = await response.json();
        if (data.status === "error" && data.errorCode === 1004) {
          Cookies.remove('scc-code');
        } else {
          setUserData(data.user);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [UserCode]);

  if (Cookies.get("scc-code") == null || Cookies.get("scc-code") == undefined) return (
    <>
      <button onClick={() => handleLogin()} className="bg-gradient-to-r from-[#6f74f5] to-[#8e92ff] text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:from-[#5a5fd6] hover:to-[#7a7ee6] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
        Login
      </button>
      <div className='mx-2'></div>
      <LanguageSelector isMobileMenuOpen={false} />
    </>
  );

  const isArabic = i18n.language === 'ar';
  return (
    <Suspense fallback="loading">
      {loading ? (
        <div className="animate-pulse flex items-center space-x-1 bg-white bg-opacity-10 rounded-full px-3 py-2 text-sm">
          <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
          <div className="h-4 bg-gray-300 rounded w-24"></div>
          <ChevronDown size={16} />
        </div>
      ) : (
        <Menu as="div" className={"relative ml-3" + `${isArabic ? `${cairo.className} font-bold` : cairo.className}`}>
          {() => (
            <>
              <div>
                <MenuButton className="flex items-center space-x-1 bg-white bg-opacity-10 rounded-full px-3 py-2 text-sm">
                  <span className="absolute -inset-1.5" />
                  {UserData && <span className="">{UserData.global_name}</span>}
                  {UserData && (
                    <img
                      alt=""
                      src={`https://cdn.discordapp.com/avatars/${UserData.id}/${UserData.avatar}?size=1024`}
                      className="size-8 rounded-full"
                    />
                  )}
                  <ChevronDown size={16} />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-[#1a1a1a] text-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuSection>
                  <div className="text-left">
                    <MenuHeading>
                      <span className="text-lg opacity-90 text-white mx-2 text-left">{UserData?.global_name}</span>
                    </MenuHeading>
                    <MenuHeading>
                      <span className="text-sm opacity-50 text-white mx-2 text-left">{UserData?.email}</span>
                    </MenuHeading>
                  </div>
                  <MenuSeparator className="my-1 h-px bg-[#2a2a2a]" />
                  <MenuItem>
                    <Link
                      href="/dashboard?type=servers"
                      className="block px-4 py-2 text-sm text-white data-[focus]:bg-[#2a2a2a] data-[focus]:outline-none hover:bg-[#2a2a2a] transition-colors"
                    >
                      {t("user.guilds","Guilds")}
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      href="/dashboard?type=clans"
                      className="block px-4 py-2 text-sm text-white data-[focus]:bg-[#2a2a2a] data-[focus]:outline-none hover:bg-[#2a2a2a] transition-colors"
                    >
                      {t("user.clans","Clans")}
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      href="/commands"
                      className="block px-4 py-2 text-sm text-white data-[focus]:bg-[#2a2a2a] data-[focus]:outline-none hover:bg-[#2a2a2a] transition-colors"
                    >
                      {t("user.commands","Commands")}
                    </Link>
                  </MenuItem>
                  <MenuSeparator className="my-1 h-px bg-[#2a2a2a]" />
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-white data-[focus]:bg-[#2a2a2a] data-[focus]:outline-none hover:bg-[#2a2a2a] transition-colors"
                    >
                      {t("user.topClans","Top Clans")}
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-white data-[focus]:bg-[#2a2a2a] data-[focus]:outline-none hover:bg-[#2a2a2a] transition-colors"
                    >
                      {t("user.topMembers","Top Members")}
                    </a>
                  </MenuItem>
                  <MenuSeparator className="my-1 h-px bg-[#262626]" />
                  <MenuItem>
                    <a
                      href="#"
                      onClick={() => {
                        Cookies.remove('scc-code');
                        router.refresh();
                      }}
                      className="block px-4 py-2 text-sm text-white data-[focus]:bg-[#2a2a2a] data-[focus]:outline-none hover:bg-[#2a2a2a] transition-colors my-2"
                    >
                      {t("user.Logout","Logout")}
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <LanguageSelector isMobileMenuOpen={false} />
                  </MenuItem>
                </MenuSection>
              </MenuItems>
            </>
          )}
        </Menu>
      )}
    </Suspense>
  );
}

export default Profile;