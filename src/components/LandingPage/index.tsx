import CTA from './CTA'
import HeroSection from './HeroSection'
import ListCars from './ListCars'
import Testimonials from './Testimonials'
import WhyChooseUs from './WhyRentWithUs'

const LandingPage = () => {
  return (
    <div>
        <HeroSection />
        <WhyChooseUs />
        <ListCars />
        <Testimonials />
        <CTA />
    </div>
  )
}

export default LandingPage