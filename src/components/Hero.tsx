import { ArrowDown, Sparkles } from 'lucide-react'
import type { CSSProperties } from 'react'
import { kannada, images } from '../data/content'

export function Hero() {
  return <section id="home" className="hero" aria-labelledby="hero-title">
    <div className="hero-aura" aria-hidden="true" /><div className="petals" aria-hidden="true">{Array.from({ length: 11 }, (_, i) => <i key={i} style={{ '--i': i } as CSSProperties} />)}</div>
    <div className="hero-inner">
      <div className="hero-copy">
        <p className="eyebrow intro-1"><Sparkles size={15} /> Navaratri • Dasara • Ayudha Pooja</p>
        <p lang="kn" className="kannada hero-kannada intro-2">{kannada.hero}</p>
        <h1 id="hero-title" className="intro-3">Happy <em>Ayudha</em><br />Pooja</h1>
        <p lang="kn" className="kannada hero-wish intro-4">{kannada.wish}</p>
        <p className="hero-message intro-4">May the Divine Mother bless every path with courage, every craft with purpose, and every home with abundance.</p>
      </div>
      <div className="deity-frame intro-deity">
        <div className="sunburst" aria-hidden="true" />
        <img src={images.deity.src} alt={images.deity.alt} width="1232" height="2048" fetchPriority="high" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = images.deity.fallbackSrc }} />
        <div className="deity-label">ॐ <span>With reverence</span> ॐ</div>
      </div>
    </div>
    <a className="scroll-cue" href="#dasara"><span>Explore the celebration</span><ArrowDown size={17} /></a>
  </section>
}
