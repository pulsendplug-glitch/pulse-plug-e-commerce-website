import { createHmac, timingSafeEqual } from 'node:crypto'
import { cookies } from 'next/headers'
const COOKIE='pulse_admin_session'; const MAX_AGE=60*60*24*7
function secret(){return process.env.ADMIN_SESSION_SECRET||process.env.ADMIN_PASSWORD||'change-this-secret'}
function sign(value:string){return createHmac('sha256',secret()).update(value).digest('hex')}
export function makeSession(){const value=String(Date.now());return `${value}.${sign(value)}`}
export function isValidSession(value?:string){if(!value)return false;const [timestamp,signature]=value.split('.');if(!timestamp||!signature)return false;const age=Date.now()-Number(timestamp);if(!Number.isFinite(age)||age<0||age>MAX_AGE*1000)return false;const expected=sign(timestamp);try{return timingSafeEqual(Buffer.from(signature),Buffer.from(expected))}catch{return false}}
export async function isAdmin(){const store=await cookies();return isValidSession(store.get(COOKIE)?.value)}
export const sessionCookie={name:COOKIE,maxAge:MAX_AGE}
