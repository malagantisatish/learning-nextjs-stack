import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server"

export const proxy = async (request: NextRequest) => {
    const path = request.nextUrl.pathname;

    const isPublicPath = ['/authentication/userCredentials/login', '/authentication/userCredentials/register'].includes(path)

    const token = await getToken({ req: request, secret: process.env.SECRET_KEY })

    if (token && isPublicPath) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if (!token && !isPublicPath) {
        return NextResponse.redirect(new URL('/authentication/userCredentials/login', request.url))
    }
    return NextResponse.next()

}


export const config = {
    matcher: ['/authentication/userCredentials/login', '/authentication/userCredentials/register', "/all-products/:path*"]
}