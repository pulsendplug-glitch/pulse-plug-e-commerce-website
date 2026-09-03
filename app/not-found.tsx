import Link from 'next/link';

export const metadata={title:'Page Not Found | Pulse & Plug',description:'The page you are looking for could not be found. Explore Pulse & Plug premium recovery, wellness, studio, and clinical equipment.'};

export default function NotFound(){return <main className="container"><section className="empty" style={{margin:'80px 0'}}><p className="blue"><b>404</b></p><h1 style={{fontFamily:'Manrope,Inter,sans-serif',fontSize:'48px',margin:'8px 0'}}>This recovery path is unavailable.</h1><p className="muted" style={{justifyContent:'center'}}>The page may have moved, or the address may be incorrect. Let’s get you back to premium recovery equipment.</p><div className="buttons" style={{justifyContent:'center'}}><Link className="btn primary" href="/">Back to home</Link><Link className="btn" href="/shop">Shop equipment</Link><Link className="btn" href="/contact">Contact Pulse &amp; Plug</Link></div></section></main>}
