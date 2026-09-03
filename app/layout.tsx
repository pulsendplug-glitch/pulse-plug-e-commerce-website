import "./globals.css";
import Link from "next/link";
import { CreditCard, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import SiteHeader from "./components/site-header";

export const metadata = {
  title: "Pulse & Plug | Premium Health, Recovery & Wellness Systems",
  description: "Pulse & Plug delivers high-end health appliances, therapeutic recovery equipment, and premium wellness consumables. Trusted by discerning customers across the US, Canada, UK, and Australia.",
  keywords: ["massage chair", "red light therapy", "recovery equipment", "wellness", "health appliances", "compression boots"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body><SiteHeader /><main>{children}</main><Footer /></body></html>;
}

function Footer() {
  return <footer className="footer"><div className="container footerGrid">
    <div><Link href="/" aria-label="Pulse & Plug home"><img className="logo" src="https://pulse-plug-e-commerce-website.vercel.app/images/pndp.png" alt="Pulse & Plug — Relief & Power" /></Link><p>Premium health appliances, therapeutic recovery equipment, and wellness consumables for a healthier, more comfortable life.</p></div>
    <div><h4>Explore</h4><ul><li><Link href="/">Home</Link></li><li><Link href="/shop">Shop</Link></li><li><Link href="/contact">Contact</Link></li><li><Link href="/cart">Cart</Link></li></ul></div>
    <div><h4>Collections</h4><ul><li><Link href="/shop#advanced-recovery-systems">Advanced Recovery Systems</Link></li><li><Link href="/shop#targeted-therapy-devices">Targeted Therapy Devices</Link></li><li><Link href="/shop#daily-essentials">Daily Wellness Essentials</Link></li></ul></div>
    <div><h4>Contact</h4><ul className="contactList"><li><a href="tel:+17864066937"><Phone size={16} />+1 786-406-6937</a></li><li><a href="mailto:pulsendplug@gmail.com"><Mail size={16} />pulsendplug@gmail.com</a></li><li><span><MapPin size={16} />Serving the US, Canada, UK & Australia</span></li></ul></div>
  </div><div className="container subfooter"><div><span className="secure"><ShieldCheck size={16} />Secure, encrypted checkout</span><div className="payments">{["Visa", "Mastercard", "Amex", "Apple Pay", "Google Pay", "Affirm", "Klarna"].map(x => <span key={x}><CreditCard size={14} />{x}</span>)}</div></div><p>© 2026 Pulse & Plug. All rights reserved.</p></div></footer>
}
