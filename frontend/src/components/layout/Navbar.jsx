import logo from '../../assets/images/logo.png';
import { useAccount } from 'wagmi'
const Navbar = ({ isConnect }) => {
  const { address } = useAccount()
  return (
    <nav ><img src={logo} height={120} alt="" />
      {isConnect ? <ul><li><button>Post</button></li><li><p>{address}</p></li></ul> : <button>Connect Wallet</button>}
    </nav>
  )
}

export default Navbar

// style={{ backgroundColor: '#0A1C1C', color: 'white' }}