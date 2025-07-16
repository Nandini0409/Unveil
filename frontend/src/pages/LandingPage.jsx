import Navbar from "../components/layout/Navbar.jsx"
import Hero from '../components/section/HeroSection.jsx';
import WhatIsUnveil from '../components/section/WhatIsUnveil.jsx';
import WhyUnveil from '../components/section/WhyUnveil.jsx';
import Footer from '../components/layout/Footer.jsx';

const LandingPage = () => {

  return (
    <>
    <h1 className="text-3xl font-bold underline text-blue-600">
  Tailwind is working!
</h1>
      <Navbar isConnected={false}/>
      <Hero />
      <WhatIsUnveil />
      <WhyUnveil />
      <Footer />
    </>
  )
}

export default LandingPage;