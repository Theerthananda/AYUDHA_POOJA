import { BookOpen, Hammer, Laptop, Palette, CarFront } from 'lucide-react'
import type { CSSProperties } from 'react'
import { SectionTitle } from './SectionTitle'

const tools = [
  { icon: BookOpen, label: 'Learning', text: 'Books that open new worlds' },
  { icon: Laptop, label: 'Technology', text: 'Ideas shaped into possibility' },
  { icon: Hammer, label: 'Craft', text: 'Tools honoured with gratitude' },
  { icon: CarFront, label: 'Journey', text: 'Vehicles that carry our dreams' },
  { icon: Palette, label: 'Creation', text: 'Instruments of imagination' },
]

export function AyudhaSection() {
  return <section id="ayudha" className="ayudha section">
    <div className="ayudha-heading"><SectionTitle eyebrow="The meaning of Ayudha Pooja" title={<>Celebrating the tools<br />that <em>empower us.</em></>}><p>Ayudha Pooja is a quiet act of gratitude: a moment to honour the knowledge, instruments, and effort that enable every meaningful pursuit.</p></SectionTitle></div>
    <div className="tool-orbit" aria-hidden="true"><span>✦</span><span>✦</span><span>✦</span></div>
    <div className="tool-grid">{tools.map(({ icon: Icon, label, text }, index) => <article className="tool-item" key={label} style={{ '--delay': `${index * 80}ms` } as CSSProperties}><Icon strokeWidth={1.25} /><h3>{label}</h3><p>{text}</p></article>)}</div>
  </section>
}
