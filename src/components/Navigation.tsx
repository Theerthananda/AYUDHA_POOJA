import { useEffect, useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const links = [
  ['Home', '#home'], ['Dasara', '#dasara'], ['Ayudha Pooja', '#ayudha'], ['Greetings', '#greeting'],
]

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  const close = () => setOpen(false)
  return <header className={`nav-shell ${scrolled ? 'scrolled' : ''}`}>
    <a className="brand" href="#home" onClick={close} aria-label="Sri Chamundeshwari home"><span className="brand-mark">✦</span><span>Shri Chamundeshwari<small>AYUDHA POOJA · 2026</small></span></a>
    <nav id="main-menu" className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
      {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
      <a className="nav-blessing" href="#blessings" onClick={close}><Sparkles size={15} /> Receive blessings</a>
    </nav>
    <button className="menu-button" aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
  </header>
}
