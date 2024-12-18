import { type NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import config from '../../config.json';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get('code');

    // التحقق من وجود الكود
    if (!code) {
      console.error('Authorization code is missing.');
      return NextResponse.redirect(new URL('/', request.url));
    }

    const cookieStore = cookies();

    // التحقق من وجود الكوكي مسبقًا
    if (cookieStore.has('scc-code')) {
      console.log('Cookie already exists, redirecting to dashboard.');
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // إرسال الطلب إلى API
    const response = await fetch(`${config.API_URL}/users/oauth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer testw125asdgsdty13dfhad@tW#$YSHG#WHSFY#@hdrhRDTY#hDH#$WTY3wH`, // التوكن من المتغيرات البيئية
      },
      body: new URLSearchParams({
        code: code,
      }).toString(),
    });

    // التحقق من استجابة الـ API
    if (!response.ok) {
      console.error('Failed to fetch data from API:', response.statusText);
      return NextResponse.redirect(new URL('/', request.url));
    }

    const data = await response.json();

    // التحقق مما إذا كان هناك خطأ في البيانات المسترجعة
    if (data.error) {
      console.error('API Error:', data.error);
      return NextResponse.redirect(new URL('/', request.url));
    }

    // حساب مدة انتهاء الكوكي
    const expiresInMilliseconds = data.expiresAt * 1000;
    const expirationDate = new Date(Date.now() + expiresInMilliseconds);

    // ضبط الكوكي بطريقة آمنة
    cookies().set('scc-code', code, {
      expires: expirationDate,
      secure: true, // يضمن أن الكوكي يعمل مع HTTPS
      httpOnly: true, // يجعل الكوكي غير قابل للوصول من الجافاسكربت في المتصفح
      sameSite: 'lax', // حماية ضد هجمات CSRF
    });

    console.log('Cookie set successfully. Redirecting...');

    // إغلاق النافذة بعد العملية
    return new Response('<script>window.close();</script>', {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    console.error('Unexpected Error:', error);
    return NextResponse.redirect(new URL('/', request.url));
  }
}
