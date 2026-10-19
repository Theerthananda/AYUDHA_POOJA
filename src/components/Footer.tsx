import { ArrowUpRight } from 'lucide-react'
import { kannada } from '../data/content'

export function Footer() { return <footer className="footer"><div className="footer-star">✦</div><p lang="kn" className="kannada">{kannada.devotion}</p><h2>A celebration of devotion</h2><div className="footer-line" /><p className="copyright">© 2026. All rights reserved.</p><p className="developer">Designed &amp; Developed by Theerthananda</p><a href="https://theerthananda.github.io/" target="_blank" rel="noreferrer">Visit My Portfolio <ArrowUpRight size={15} /></a></footer> }
