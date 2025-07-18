import Navbar from "../components/layout/Navbar.jsx"
import Hero from '../components/section/HeroSection.jsx';
import WhatIsUnveil from '../components/section/WhatIsUnveil.jsx';
import WhyUnveil from '../components/section/WhyUnveil.jsx';
import HowItWorks from "../components/section/HowItWorks.jsx";
import Footer from '../components/layout/Footer.jsx';

const LandingPage = () => {

  return (
    <>
      <Navbar isConnected={false}/>
      <Hero />
      <WhatIsUnveil />
      <WhyUnveil />
      <HowItWorks />
      <Footer />
    </>
  )
}

export default LandingPage;