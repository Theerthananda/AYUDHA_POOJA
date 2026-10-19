import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
export function BackToTop() { const [show, setShow] = useState(false); useEffect(() => { const onScroll = () => setShow(window.scrollY > 700); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, []); return <button className={`top-button ${show ? 'show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Return to top"><ArrowUp size={19} /></button> }
