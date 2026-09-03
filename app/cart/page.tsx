import Link from 'next/link';

export const metadata={title:'Shopping Cart | Pulse & Plug',description:'Review your Pulse & Plug recovery, wellness, studio, and clinical equipment selections.'};

export default function Cart(){return <section className="section"><div className="container"><div className="center"><h1>Shopping Cart</h1><p className="muted">Your cart is ready for your next recovery investment.</p></div><div className="empty"><div style={{fontSize:50}}>🛍</div><h2>Your cart is empty.</h2><p className="muted">Browse our premium health, recovery, studio, clinical, and wellness collections to get started.</p><Link className="btn primary" href="/shop">Browse the collections</Link></div></div></section>}
