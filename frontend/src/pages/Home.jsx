import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import PackageBuilder from '../components/PackageBuilder/PackageBuilder'
import Industries from '../components/Industries/Industries'
import Testimonials from '../components/Testimonials/Testimonials'

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PackageBuilder />
      <Industries />
      <Testimonials />
    </>
  )
}

export default Home