import { type NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import config from '../../../config.json'
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');

  if (!code) {
    return  new Response('<script>window.close();</script>', {
    headers: {
      'Content-Type': 'text/html',
    },
  });
  }

  const cookieStore = cookies()

  const hasCookie = cookieStore.has('scc-code')
  if (hasCookie) {
    return  new Response('<script>window.close();</script>', {
    headers: {
      'Content-Type': 'text/html',
    },
  });
  }
  const response = await fetch(`${config.API_URL}/users/oauth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer testw125asdgsdty13dfhad@tW#$YSHG#WHSFY#@hdrhRDTY#hDH#$WTY3wH', // استبدل بالتوكن الصحيح
    },
    body: new URLSearchParams({
      code: code,
    }).toString(),
  });

  const data = await response.json();

  // التحقق مما إذا كان تم الحصول على رمز الوصول
  if (data.error) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // ضبط الكوكي بحيث ينتهي عند انتهاء صلاحية التوكن
  const expiresInMilliseconds = data.expiresAt * 1000; // تحويل expiresAt إلى ميللي ثانية
  const expirationDate = new Date(Date.now() + expiresInMilliseconds); // حساب تاريخ انتهاء الصلاحية

  cookies().set('scc-code', code, { expires: expirationDate });

  return new Response('<script>window.close();</script>', {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
