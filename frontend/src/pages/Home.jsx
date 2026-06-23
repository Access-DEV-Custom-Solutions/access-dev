import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Industries from '../components/Industries/Industries'
import PackageBuilder from '../components/PackageBuilder/PackageBuilder'
import Testimonials from '../components/Testimonials/Testimonials'


function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      <PackageBuilder />
      <Testimonials />
    </>
  )
}

export default Home