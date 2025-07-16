import logo from '../../assets/images/logo.png'
import { useAccount } from 'wagmi'
import { useState } from 'react'
import UploadForm from './UploadForm'

const Navbar = ({ isConnect }) => {
  const { address } = useAccount()
  const [isUploadFormVisible, setIsUploadFormVisible] = useState(false)

  const UploadButtonHandler = () => {
    setIsUploadFormVisible(true)
  }

  return (
    <>
      <nav >
        <img src={logo} height={120} alt="" />
        {isConnect ? <ul><li><button onClick={UploadButtonHandler}>Post</button></li><li><p>{address}</p></li></ul> : <button>Connect Wallet</button>}
      </nav>
      {isUploadFormVisible && <UploadForm />}
    </>
  )
}

export default Navbar
