import logo from '../assets/logo.png';

const Hero = ()=>{
  return(
    <section>
      <nav style={{ backgroundColor: '#0A1C1C', color: 'white' }}><img src={logo} height={120} alt="" /></nav>
      <h1>Unveil the Truth. Decentralized. Uncensored. Unstoppable.</h1>
      <p>A censorship-resistant platform built for whistleblowers, citizen journalists, and truth-seekers. Publish and preserve what matters — forever.</p>
      <button>👉 Reveal a Story | 🔍 Explore the Truth</button>
    </section>
  )
}

export default Hero