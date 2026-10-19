import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

export function SectionTitle({ eyebrow, title, children, align = 'left' }: { eyebrow: string; title: ReactNode; children?: ReactNode; align?: 'left' | 'center' }) {
  const { ref, visible } = useInView<HTMLDivElement>()
  return <div ref={ref} className={`section-title ${align} reveal ${visible ? 'is-visible' : ''}`}>
    <p className="eyebrow"><span /> {eyebrow}</p>
    <h2>{title}</h2>
    {children && <div className="section-intro">{children}</div>}
  </div>
}
