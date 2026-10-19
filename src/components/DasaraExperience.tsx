import { images, kannada } from '../data/content'
import { SectionTitle } from './SectionTitle'
import { useInView } from '../hooks/useInView'

function ImageReveal({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const { ref, visible } = useInView<HTMLElement>(0.1)
  return <figure ref={ref} className={`image-reveal ${className} ${visible ? 'is-visible' : ''}`}><img src={src} alt={alt} loading="lazy" /><div className="image-glint" /></figure>
}

export function DasaraExperience() {
  return <>
    <section id="dasara" className="royal section">
      <div className="royal-photo"><ImageReveal src={images.palace.src} alt={images.palace.alt} /></div>
      <div className="royal-copy"><SectionTitle eyebrow="Mysuru, Karnataka" title={<>The royal grandeur<br />of <em>Mysuru.</em></>}><p lang="kn" className="kannada">{kannada.mysuru}</p><p>Where a living heritage meets the glow of a hundred thousand lights, Dasara becomes an evening of ceremony, artistry, and shared wonder.</p></SectionTitle><div className="corner-note"><b>10 days</b><span>of colour, culture<br />&amp; celebration</span></div></div>
    </section>
    <section className="illumination section">
      <div className="illumination-text"><p className="eyebrow"><span /> After sunset</p><h2>An illuminated<br /><em>palace.</em></h2><p>As dusk settles over Mysuru, the Amba Vilas Palace is traced in warm light—its silhouette a radiant marker of Dasara’s splendour.</p></div>
      <ImageReveal src={images.palace.src} alt="The illuminated façade of Mysore Palace during Dasara" className="illumination-image" />
      <p className="vertical-word" aria-hidden="true">MYSURU</p>
    </section>
    <section className="procession section">
      <SectionTitle eyebrow="Jamboo Savari" title={<>The magnificent<br /><em>procession.</em></>}><p>A city in motion: ritual, rhythm, colour, and community coming together in one of Karnataka’s most cherished cultural processions.</p></SectionTitle>
      <div className="procession-layout"><ImageReveal src={images.procession.src} alt={images.procession.alt} className="procession-main" /><aside className="procession-aside"><span className="ornament">❖</span><p>“A celebration of heritage, held with devotion and joy.”</p><small>— MYSURU DASARA</small></aside></div>
    </section>
    <section className="culture section">
      <div className="culture-copy"><p className="eyebrow"><span /> The spirit of Karnataka</p><h2>Stories told<br />in <em>rhythm.</em></h2><p>Every beat, fabric, and gesture carries a tradition forward. Karnataka’s living arts give Dasara its unforgettable pulse.</p></div>
      <ImageReveal src={images.dance.src} alt={images.dance.alt} className="culture-image" />
    </section>
  </>
}
