import { NextResponse } from 'next/server'
import { listProducts } from '@/lib/db'
export async function GET(){try{return NextResponse.json({products:await listProducts(false)})}catch{return NextResponse.json({products:[]})}}
