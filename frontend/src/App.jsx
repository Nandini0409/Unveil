import { useState } from 'react'
import FileTypeInput from './components/InputFile.jsx';


function App() {
  const [isConnect, setConnect] = useState(false)

  return (
    <>
      <FileTypeInput />
      {isConnect ? <appkit-button /> : <button onClick={() => setConnect(true)}>Connect Wallet</button>}
      
    </>
  )
}

export default App


//gateway--> lime-top-gorilla-58.mypinata.cloud