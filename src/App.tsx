import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { DasaraExperience } from './components/DasaraExperience'
import { Blessings } from './components/Blessings'
import { AyudhaSection } from './components/AyudhaSection'
import { GreetingCard } from './components/GreetingCard'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Navigation /><main id="main"><Hero /><DasaraExperience /><Blessings /><AyudhaSection /><GreetingCard /></main><Footer /><BackToTop /></>
}
