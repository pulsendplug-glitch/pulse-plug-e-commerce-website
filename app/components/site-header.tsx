'use client'

import Link from 'next/link'
import { Mail, Menu, Moon, Phone, ShoppingBag, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function SiteHeader() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('pulse-theme')
    const isDark = saved === 'dark'
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  function toggleTheme() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('pulse-theme', next ? 'dark' : 'light')
  }

  return <header className="siteHeader">
    <div className="topbar"><div className="container topbarInner"><span>Free white-glove delivery on Advanced Recovery Systems</span><div className="toplinks"><a href="tel:+17864066937"><Phone size={14} />+1 786-406-6937</a><a href="mailto:pulsendplug@gmail.com"><Mail size={14} />pulsendplug@gmail.com</a></div></div></div>
    <div className="header"><div className="container nav"><Link href="/" aria-label="Pulse & Plug home"><img className="logo" src="https://pulse-plug-e-commerce-website.vercel.app/images/pndp.png" alt="Pulse & Plug — Relief & Power" /></Link><nav className="links" aria-label="Primary"><Link className="active" href="/">Home</Link><Link href="/shop">Shop</Link><Link href="/contact">Contact</Link></nav><div className="actions"><button className="iconbtn" type="button" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun size={20} /> : <Moon size={20} />}</button><Link className="iconbtn" href="/cart" aria-label="Open cart"><ShoppingBag size={20} /></Link><button className="iconbtn mobile" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div></div>{menuOpen && <nav className="mobileMenu container" aria-label="Mobile navigation"><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link><Link href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></nav>}</div>
  </header>
}
