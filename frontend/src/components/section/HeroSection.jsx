import { useAccount } from 'wagmi'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import UploadForm from '../layout/UploadForm'
import { useState } from 'react'

const Hero = () => {
  const { isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()
  const navigate = useNavigate()
  const [isUploadFormVisible, setIsUploadFormVisible] = useState(false)

  // useEffect(() => {
  //   if (isConnected === true) {
  //     navigate('/feed')
  //   }
  // }, [isConnected, navigate])

  const handleClick = (whatToShow) => {
    console.log("Button clicked:", whatToShow);
    if (!isConnected) {
      openConnectModal();
    }
    else if(whatToShow === "feed"){
      navigate('/feed')
    }
    else if(whatToShow === "uploadForm"){
      setIsUploadFormVisible(true)
    }

  }
  return (


    <section className="bg-gradient-to-br from-purple-950 via-black to-gray-900 text-white sm:py-24 py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Unveil the Truth. <span className="text-pink-400">Decentralized.</span> <br />
          <span className="text-purple-400">Uncensored.</span> <span className="text-indigo-300">Unstoppable.</span>
        </h1>
        <p className="text-md md:text-xl text-gray-300">
          A censorship-resistant platform built for whistleblowers, citizen journalists, and truth-seekers.<br />
          <span className="text-white font-medium">Publish and preserve what matters — forever.</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center content-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <button
          onClick={()=>{handleClick("feed")}}
          className="w-64 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 font-semibold sm:px-6 py-3 rounded-full shadow-lg transition duration-300"
        >
          Reveal a Story
        </button>
        <button
          onClick={()=>{handleClick("uploadForm")}}
          className="mt-6 w-64 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 font-semibold sm:px-6 py-3 rounded-full shadow-lg transition duration-300"
        >
        Explore the Truth
        </button>
        </div>
      </div>
      {isUploadFormVisible && <UploadForm state={isUploadFormVisible} stateFunction={setIsUploadFormVisible}/>}
    </section>

  )
}

export default Hero