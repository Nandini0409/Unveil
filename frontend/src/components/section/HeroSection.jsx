import { useAccount } from 'wagmi'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Hero = () => {
  const { isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()
  const navigate = useNavigate()

  useEffect(() => {
    if (isConnected === true) {
    navigate('/feed')
  }
  }, [isConnected, navigate])
  
  const handleClick = () => {
    if (!isConnected) {
      openConnectModal();
    }
    else {
      navigate('/feed')
    }
    
  }
  return (


<section className="bg-gradient-to-br from-purple-950 via-black to-gray-900 text-white py-24 px-6 text-center">
  <div className="max-w-4xl mx-auto space-y-6">
    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
      Unveil the Truth.<br />
      <span className="text-pink-400">Decentralized.</span> 
      <span className="text-purple-400"> Uncensored.</span> 
      <span className="text-indigo-300"> Unstoppable.</span>
    </h1>
    <p className="text-lg md:text-xl text-gray-300">
      A safe space where voices aren’t just heard — they’re protected. For every girl, woman, or citizen who refuses to stay silent.
    </p>
    <button 
      onClick={handleClick}
      className="mt-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
    >
      ✨ Reveal a Story | Explore the Truth
    </button>
  </div>
</section>

  )
}

export default Hero