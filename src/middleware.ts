import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes: string[] = ['/'];
const session = false;

export default function middleware(req: NextRequest) {
  if (!session && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteUrl = new URL('/login', req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }
}
