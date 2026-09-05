import { NextResponse } from 'next/server'
import { sessionCookie } from '@/lib/auth'
export async function POST(){const response=NextResponse.json({ok:true});response.cookies.set(sessionCookie.name,'',{httpOnly:true,expires:new Date(0),path:'/'});return response}
