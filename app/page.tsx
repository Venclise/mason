
import About from '@/sections/About'
import Contact from '@/sections/Contact'
import FAQ from '@/sections/Faq'
import Hero from '@/sections/Hero'
import Projects from '@/sections/Projects'
import What from '@/sections/What'


export default function page() {
  return (
    <div>
    <Hero />
    <About />
    <What />
    <Projects />
    <FAQ />
    <Contact />
    </div>
  )
}
