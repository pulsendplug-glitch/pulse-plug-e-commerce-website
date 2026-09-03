import Link from 'next/link';
import { Award, ArrowRight, Headset, HeartPulse, ShieldCheck, ShoppingBag, Truck } from 'lucide-react';
import { products } from '@/lib/products';
const img='https://pulse-plug-e-commerce-website.vercel.app/images/';

const benefits = [
  [Award, 'Premium Quality', 'Clinical-grade equipment selected for durability and results.'],
  [HeartPulse, 'Wellness First', 'Every product is chosen to support real recovery and comfort.'],
  [Headset, 'Expert Support', 'Speak with real specialists before and after your purchase.'],
  [ShieldCheck, 'Secure & Trusted', 'Encrypted checkout with flexible, protected payment options.'],
] as const;

export default function Home(){
  const featured=products.slice(0,4);
  return <>
    <section className="hero"><div className="container heroGrid"><div><span className="offer">Launch Offer — 20% Off with code LAUNCH20</span><h1>Premium recovery, engineered for a <span className="blue">healthier</span> life.</h1><p className="lead">Pulse & Plug brings clinical-grade health appliances, therapeutic recovery systems, and premium wellness essentials into your home — with white-glove service you can trust.</p><div className="buttons"><Link className="btn primary" href="/shop">Shop the Collections <ArrowRight size={16}/></Link><Link className="btn" href="/shop#advanced-recovery-systems">Explore Recovery Systems</Link></div><p className="muted"><Truck size={16}/> Free white-glove delivery <ShieldCheck size={16}/> Secure, encrypted checkout</p></div><div className="heroImgWrap"><img className="heroImg" src={img+'hero-wellness.png'} alt="A luxury home wellness room featuring a premium zero-gravity massage chair"/><div className="badge"><strong>4D AI</strong><span>Body-scanning technology</span></div></div></div></section>
    <section className="benefits"><div className="container benefitGrid">{benefits.map(([Icon,t,d])=><div className="benefit" key={t}><div className="benefitIcon"><Icon size={20}/></div><h3>{t}</h3><p>{d}</p></div>)}</div></section>
    <section className="section"><div className="container center"><h2>Shop by collection</h2><p>From flagship recovery systems to everyday wellness rituals, each collection is curated for lasting comfort and results.</p><div className="collections">{[['Advanced Recovery Systems','Flagship, high-ticket systems engineered for whole-body restoration, circulation, and deep therapeutic recovery.','4d-massage-chair.png','advanced-recovery-systems'],['Targeted Therapy Devices','Focused, professional-grade devices that relieve tension and pain in specific areas of the body.','percussion-massage-gun.png','targeted-therapy-devices'],['Daily Wellness Essentials','Premium consumables and accessories to support recovery, relaxation, and healthy daily rituals.','vibrating-foam-roller.png','daily-essentials']].map(([t,d,p,id])=><Link className="card collectionCard" href={'/shop#'+id} key={id}><img src={img+'products/'+p} alt={t}/><div className="cardBody"><h3>{t}</h3><p>{d}</p><span className="blue exploreLink">Explore collection <ArrowRight size={16}/></span></div></Link>)}</div></div></section>
    <section className="section flagship"><div className="container"><div className="sectionHeading"><div><p className="blue"><b>High-ticket systems</b></p><h2>Flagship Advanced Recovery Systems</h2></div><Link className="viewAll" href="/shop#advanced-recovery-systems">View all systems <ArrowRight size={16}/></Link></div><div className="products">{featured.map(p=><ProductCard key={p.slug} p={p}/>)}</div></div></section>
    <section className="section"><div className="container"><div className="cta"><span>Limited Launch Offer</span><h2>Save 20% on your first order</h2><p>Apply code <b>LAUNCH20</b> at checkout and invest in premium recovery for less.</p><Link className="btn" href="/shop">Start Shopping <ArrowRight size={16}/></Link></div></div></section>
  </>
}
function ProductCard({p}:{p:any}){return <article className="card product"><Link href={'/product/'+p.slug}><img src={p.image} alt={p.name}/></Link><div className="cardBody"><Link href={'/product/'+p.slug}><h3>{p.name}</h3></Link><p>{p.description}</p><div className="productRow"><span className="price">${p.price.toLocaleString()}</span><Link className="btn primary smallBtn" href={'/product/'+p.slug}><ShoppingBag size={16}/>Add</Link></div></div></article>}
