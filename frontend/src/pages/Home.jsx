import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import Testimonials from "../components/Testimonials/Testimonials";
import HowWeWork from "../components/HowWeWork/HowWeWork";
import CTA from "../components/CTA";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <HowWeWork />
      <CTA />
    </>
  );
}

export default Home;
