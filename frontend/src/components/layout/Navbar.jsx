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

  return (
    <>
      {/* <nav className="flex justify-between items-center p-4 rounded-sm bg-neutral text-white shadow-md border-b border-neutral
">
        <div className="flex space-x-2 items-center">
          <img src={logoIcon} className="h-12 w-auto" alt="Unveil logoIcon" />
          <img src={logoText} className="h-8 w-auto" alt="Unveil logoText" />
        </div>
        {isConnected
          ?
          <ul className="flex space-x-8 ">
            <li>
              <button onClick={UploadButtonHandler} className='bg-blue-gradient hover:bg-blue-gradient-hover font-medium px-6 py-2 transition-all duration-300 rounded-md'>Post</button>
            </li>
            <li className='bg-blue-gradient hover:bg-blue-gradient-hover px-6 py-2 transition-all duration-300 font-medium rounded-md '>{address.slice(0, 4)}...{address.slice(-3)}</li>
          </ul>
          :
          <ul className="flex space-x-4">
            <li><button onClick={openConnectModal} className='bg-blue-gradient hover:bg-blue-gradient-hover px-6 py-1 transition-all duration-300 rounded-sm '>Connect Wallet</button></li>
          </ul>}
        {isUploadFormVisible && <UploadForm />}
      </nav> */}

<nav className="flex justify-between items-center px-6 py-4 bg-gray-950 text-white shadow-md border-b border-gray-800">
  <div className="flex space-x-3 items-center">
    <img src={logoIcon} className="h-10 w-auto" alt="Unveil Logo Icon" />
    <img src={logoText} className="h-7 w-auto" alt="Unveil Logo Text" />
  </div>

  {isConnected ? (
    <ul className="flex space-x-6 items-center">
      <li>
        <button
          onClick={UploadButtonHandler}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 font-semibold px-5 py-2 rounded-md transition-all duration-300"
        >
          Post
        </button>
      </li>
      <li className="bg-gray-800 text-sm px-4 py-2 rounded-md font-medium">
        {address.slice(0, 4)}...{address.slice(-3)}
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

  {isUploadFormVisible && <UploadForm />}
</nav>

      

    </>
  )
}

export default Navbar

//       <nav className="flex justify-between items-center px-6 py-4 bg-gray-950 text-white shadow-md border-b border-gray-800">
//   {/* Logo section */}
//   <div className="flex space-x-3 items-center">
//     <img src={logoIcon} className="h-10 w-auto" alt="Unveil Logo Icon" />
//     <img src={logoText} className="h-7 w-auto" alt="Unveil Logo Text" />
//   </div>

//   {/* Wallet Connected */}
//   {isConnected ? (
//     <ul className="flex space-x-6 items-center">
//       <li>
//         <button
//           onClick={UploadButtonHandler}
//           className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-5 py-2 rounded-md transition-all duration-300"
//         >
//           Post
//         </button>
//       </li>
//       <li className="bg-gray-800 text-sm px-4 py-2 rounded-md font-medium">
//         {address.slice(0, 4)}...{address.slice(-3)}
//       </li>
//     </ul>
//   ) : (
//     // Wallet Not Connected
//     <ul className="flex space-x-4">
//       <li>
//         <button
//           onClick={openConnectModal}
//           className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-5 py-2 text-sm rounded-md transition-all duration-300"
//         >
//           Connect Wallet
//         </button>
//       </li>
//     </ul>
//   )}

//   {/* Conditional Upload Form */}
//   {isUploadFormVisible && <UploadForm />}
// </nav>