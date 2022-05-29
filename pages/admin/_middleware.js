import { NextResponse } from "next/server";
import { API_URL } from "../../config";

export default async function middleware(req){
    const { cookies } = req;
    const jwt = await cookies.JWT
    const { pathName, origin } = req.nextUrl

    if(!jwt) return NextResponse.redirect(`${origin}/sign-in`)
    const url = `${API_URL}/api/v1/auth/verify`
    const response = await ( await fetch(url,{
        method: "GET",
        headers:{
            'Authorization': `Bearer ${jwt}`
        }
    })).json()
    if(!response.verified) return NextResponse.redirect(`${origin}/sign-in`)
    return NextResponse.next()
}