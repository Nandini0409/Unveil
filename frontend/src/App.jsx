import { useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Card from './components/imageCard.jsx';
import Hero from './components/HeroSection.jsx';
import WhatIsUnveil from './components/WhatIsUnveil.jsx';
import WhyUnveil from './components/WhyUnveil.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Hero />
      <WhatIsUnveil />
      <WhyUnveil />
      <Footer />
      {/* <Card/> */}
      <ConnectButton />
    </>
  )
}

export default App
