"use client"

import { i18n } from 'next-i18next'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'




export default function Footer() {
    const {t} = useTranslation('footer')
return (
    <div className="relative">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#8787dc] to-[#3c3cbf] opacity-30 sm:w-[72.1875rem]"
                        />
                    </div>
                  <footer className=" py-10">
                    
                <div className="pt-10 mx-auto">
                    <div className="lg:grid lg:grid-cols-6 gap-20">
                        <div className="col-span-3">
                            <div className="flex items-center space-x-5">
                                <img src="/img/logo2.png" className="rounded-full w-12" />
                                <p className="font-semibold text-xl text-white">{t("title","Mared Clans")}</p>
                            </div>
                            <div className="relative mt-1 inline-block text-left">
                                <p className="animateHeader w-4/6 text-white text-opacity-50 text-left mt-5">
{t('description',"Mared Clans is a fully customizable, multipurpose bot specifically designed for efficient clan management. From personalized clan introductions to advanced logs and many other clan-related features, take full control of your clan community with Mared Clans.")}
</p>
                            </div>
                        </div>
                        
                        <div className="col-span-1 mt-7">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">{t("Links.title","Links")}</p>
                            <div>
                                <Link href={`${i18n?.language}/`}>
                                    <span className="text-white/50 text-sm hover:text-white hover:underline transform duration-200">
                                        {t("Links.Home","Home")}
                                    </span>
                                </Link>
                            </div>
                             <div>
                                <Link href={`${i18n?.language}/commands`}>
                                    <span className="text-white/50 text-sm hover:text-white hover:underline transform duration-200">
                                        {t("Links.Commands","Commands")}
                                    </span>
                                </Link>
                            </div>
                             <div>
                                <Link href={`${i18n?.language}/dashboard`}>
                                    <span className="text-white/50 text-sm hover:text-white hover:underline transform duration-200">
                                        {t("Links.Dashboard","Dashboard")}
                                    </span>
                                </Link>
                            </div>
                            <div>
                                <a href="https://discord.com/oauth2/authorize?client_id=1280226211477458945&permissions=1099981909048&integration_type=0&scope=bot" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    {t("Links.Invite","Invite Mared Clans")}
                                </a>
                            </div>
                           
                        </div>

                        <div className="col-span-1 mt-7">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">{t("Social.title", "Social")}</p>
                            <div>
                                <Link href="https://discord.gg/YGWdsJx7UX">
                                    <span className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        <i className={`fa-brands fa-discord`} /> 
                                        {t("Social.Discord","Discord")}
                                    </span>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://github.com/aladdin-y">
                                    <span className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        <i className={`fa-brands fa-github`} /> 
                                        {t("Social.GitHub","Github")}
                                    </span>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://www.instagram.com/mahde_atia/">
                                    <span className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        <i className={`fa-brands fa-instagram`} /> {t("Social.Instagram","Instagram")}
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className="col-span-1 mt-7">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">{t("Rules.title","Rules")}</p>
                            <div>
                                <Link href="https://discord.com/users/376752463971352577">
                                    <span className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    {t("Rules.Terms","Terms of Service")}


                                    </span>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://github.com/aladdin-y">
                                    <span className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    {t("Rules.Privacy","Privacy Policy")}
                                                                      </span>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://www.instagram.com/mahde_atia/">
                                    <span className="text-white/50 hover:text-white hover:underline transform duration-200">
                                       {t("Rules.Refund","Refund Policy")} 
                                    </span>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="mt-10 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        <p className="text-white text-center sm:text-left text-opacity-50">
                           2023-{new Date().getFullYear()} &copy; Msbah
                        </p>
                        <div className="hidden md:flex items-center justify-center">
                            <p className={"text-xs text-green-400"}>
                                {/* 24/7 Work */}
                            </p>
                        </div>
                        {/* <p className="text-white text-center sm:text-right text-opacity-50">
                            {"Made with ❤️ by Aladdin"}
                        </p> */}
                    </div>
                </div>
                
            </footer>
      
    </div>
)
}