import { NextResponse } from 'next/server';

// Middleware الرئيسي
export function middleware(req) {
  console.log('Middleware is running');

  // الحصول على ملف تعريف الارتباط 'scc-code'
  const sccCodeCookie = req.cookies.get('scc-code');
  if (!sccCodeCookie) {
    return NextResponse.redirect(
      'https://discord.com/oauth2/authorize?client_id=1280226211477458945&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth&scope=identify+guilds+email'
    );
  }

  // السماح بمرور الطلب
  return NextResponse.next();
}

// تكوين المطابقة
export const config = {
  matcher: ['/dashboard/:path*'], // تأكد من استهداف جميع الصفحات مؤقتاً
};
