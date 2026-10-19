import { Sparkles } from 'lucide-react'
import { useState } from 'react'
import type { CSSProperties } from 'react'

export function Blessings() {
  const [burst, setBurst] = useState(0)
  return <section id="blessings" className="blessings">
    <div className="blessing-pattern" aria-hidden="true" />
    <div className="blessing-content">
      <p className="eyebrow"><span /> A sacred pause</p>
      <h2>May grace light<br /><em>your way.</em></h2>
      <p>Pause for a moment of gratitude—for the hands that create, the tools that serve, and the courage that carries us forward.</p>
      <button className="gold-button" onClick={() => { setBurst(burst + 1); window.setTimeout(() => setBurst(0), 1100) }}><Sparkles size={18} /> Receive golden blessings</button>
    </div>
    {burst > 0 && <div className="particle-burst" aria-hidden="true">{Array.from({ length: 28 }, (_, i) => <i key={i} style={{ '--n': i } as CSSProperties} />)}</div>}
  </section>
}
