import { useAccount } from 'wagmi'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Hero = () => {
  const { isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()
  const navigate = useNavigate()

  useEffect(() => {
    if (isConnected) {
      navigate('/feed')
    }
  }, [isConnected])

  const handleClick = () => {
    if (!isConnected) {
      openConnectModal();
    }

  }
  return (
    <section>
      <h1>Unveil the Truth. Decentralized. Uncensored. Unstoppable.</h1>
      <p>A censorship-resistant platform built for whistleblowers, citizen journalists, and truth-seekers. Publish and preserve what matters — forever.</p>
      <button onClick={handleClick}>👉 Reveal a Story | 🔍 Explore the Truth</button>
    </section>
  )
}

export default Hero