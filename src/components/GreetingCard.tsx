import { Check, Copy, Share2 } from 'lucide-react'
import { useState } from 'react'
import { images, kannada } from '../data/content'

export function GreetingCard() {
  const [message, setMessage] = useState('')
  const share = async () => {
    const shareData = { title: 'Sri Chamundeshwari — Happy Ayudha Pooja', text: 'Happy Ayudha Pooja! May Sri Chamundeshwari Devi bless your home with strength and prosperity.', url: window.location.href }
    try { if (navigator.share) await navigator.share(shareData); else { await navigator.clipboard.writeText(window.location.href); setMessage('Link copied to your clipboard'); window.setTimeout(() => setMessage(''), 3500) } } catch { setMessage('Sharing was cancelled') }
  }
  const copy = async () => { try { await navigator.clipboard.writeText(window.location.href); setMessage('Link copied to your clipboard'); } catch { setMessage('Copy this page’s address from your browser'); } window.setTimeout(() => setMessage(''), 3500) }
  return <section id="greeting" className="greeting section">
    <div className="greeting-intro"><p className="eyebrow"><span /> Send a little light</p><h2>A beautiful<br /><em>festival greeting.</em></h2><p>Share a wish woven with grace, gratitude, and the warm glow of Dasara.</p><div className="greeting-actions"><button className="gold-button" onClick={share}><Share2 size={17} /> Share greeting</button><button className="outline-button" onClick={copy}><Copy size={16} /> Copy link</button></div>{message && <p className="status" role="status"><Check size={16} /> {message}</p>}</div>
    <article className="greeting-card" aria-label="Ayudha Pooja greeting"><div className="card-arch"><img src={images.deity.src} alt="" loading="lazy" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = images.deity.fallbackSrc }} /></div><div className="card-content"><span>ॐ</span><p>Wishing you a luminous</p><h3>Happy Ayudha<br />Pooja</h3><p lang="kn" className="kannada">{kannada.wish}</p><small>WITH DIVINE BLESSINGS</small></div></article>
  </section>
}
