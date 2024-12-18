"use client"; // تأكد من تشغيل الكود في جهة العميل

import { useEffect } from "react";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import "./i18n";
import i18n from "./i18n";
import Footer from "./components/footer";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin", "arabic"],
  display: "swap",
});

export default function RootLayout({ children,params     }: { children: React.ReactNode ,params:{lang:string}}) {
  const isArabic = i18n.language === "ar";
  const router = useRouter();
  useEffect(() => {
    // ضبط خاصية الاتجاه (RTL أو LTR) عند تحميل الصفحة
    const html = document.documentElement;
    html.setAttribute("dir", isArabic ? "rtl" : "ltr");
    html.setAttribute("lang", isArabic ? "ar" : "en");
  }, [isArabic]); // يتم تنفيذ الكود عند تغيير اللغة

  if (params.lang !== i18n.language) {
    if (i18n.languages.includes(params.lang)) {
      i18n.changeLanguage(params.lang);
    } else {
      // إعادة التوجيه إلى صفحة not-found إذا لم تكن اللغة موجودة
      router.push(`${i18n.language}/not-found`);
    }
  }
  return (
      <div className={`${isArabic ? cairo.className : inter.className}  text-white App min-h-screen text-white isolate bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]`}>
    
     
        {children}
      <Footer />
      </div>
  );
}
