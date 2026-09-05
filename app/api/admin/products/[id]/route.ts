import { NextResponse } from 'next/server'
import { deleteProduct, updateProduct } from '@/lib/db'
import { isAdmin } from '@/lib/auth'
export async function PATCH(request:Request,context:{params:Promise<{id:string}>}){if(!(await isAdmin()))return NextResponse.json({error:'Unauthorized'},{status:401});try{const {id}=await context.params;const product=await updateProduct(id,await request.json());return NextResponse.json({product})}catch(error:any){return NextResponse.json({error:error?.message||'Could not update product'},{status:500})}}
export async function DELETE(_:Request,context:{params:Promise<{id:string}>}){if(!(await isAdmin()))return NextResponse.json({error:'Unauthorized'},{status:401});try{const {id}=await context.params;await deleteProduct(id);return NextResponse.json({ok:true})}catch(error:any){return NextResponse.json({error:error?.message||'Could not delete product'},{status:500})}}
