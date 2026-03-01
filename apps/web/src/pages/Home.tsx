import Hero from '../components/Hero'
import About from '../components/About'
import Mindset from '../components/Mindset'
import Empire from '../components/Empire'
import Passions from '../components/Passions'
import Social from '../components/Social'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider max-w-4xl mx-auto" />
      <About />
      <div className="section-divider max-w-4xl mx-auto" />
      <Mindset />
      <div className="section-divider max-w-4xl mx-auto" />
      <Empire />
      <div className="section-divider max-w-4xl mx-auto" />
      <Passions />
      <div className="section-divider max-w-4xl mx-auto" />
      <Social />
    </>
  )
}
