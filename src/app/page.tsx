import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import FeaturedCarousel from '@/components/FeaturedCarousel'
import FindUs from '@/components/FindUs'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <FeaturedCarousel />
        <Menu />
        <FindUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
