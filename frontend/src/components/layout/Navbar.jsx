import logoIcon from '../../assets/images/logoIcon.png'
import logoText from '../../assets/images/logoText.png'
import { useAccount } from 'wagmi'
import { useState } from 'react'
import UploadForm from './UploadForm'
import { useConnectModal } from '@rainbow-me/rainbowkit'

const Navbar = () => {
  const { address, isConnected } = useAccount()
  const [isUploadFormVisible, setIsUploadFormVisible] = useState(false)
  const { openConnectModal } = useConnectModal()
  const UploadButtonHandler = () => {
    setIsUploadFormVisible(true)
  }
  const showProfile = () => {

  }

  return (
    <>
<nav className="sticky top-0 z-10 flex justify-between items-center sm:px-6 px-2 py-4 bg-nav-gradient text-white shadow-md border-b border-gray-800">
  <div className="flex sm:space-x-1 items-center">
    <img src={logoIcon} className="h-12 w-auto sm:h-12" alt="Unveil Logo Icon" />
    <img src={logoText} className="h-5 w-auto sm:h-6" alt="Unveil Logo Text" />
  </div>

  {isConnected ? (
    <ul className="flex space-x-3 sm:space-x-6 items-center">
      <li>
        <button
          onClick={UploadButtonHandler}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 font-semibold sm:px-5 px-3 sm:py-2 py-[3px] rounded-md transition-all duration-300"
        >
          Post
        </button>
      </li>
      <li className='group relative '>
        <span className="bg-gray-800 sm:text-sm text-xs group:hover-hidden px-4 py-2 rounded-md font-medium cursor-pointer">{address.slice(0, 4)}...{address.slice(-3)}</span>
        <span className='hidden absolute group-hover:block right-0 top-9 bg-[#302e30] text-white px-2 py-2 rounded shadow-lg z-10'>{address}</span>
      </li>
    </ul>
  ) : (
    <ul className="flex space-x-4">
      <li>
        <button
          onClick={openConnectModal}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 px-5 py-2 text-sm rounded-md transition-all duration-300"
        >
          Connect Wallet
        </button>
      </li>
    </ul>
    
  )}

</nav>

  {isUploadFormVisible && <UploadForm state={isUploadFormVisible} stateFunction={setIsUploadFormVisible}/>}
  
      

    </>
  )
}

export default Navbar
