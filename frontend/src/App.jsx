import { useState } from 'react'
import FileTypeInput from './components/InputFile.jsx';
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

function App() {
  const { isConnected, address } = useAccount()
  return (
    <>
      <FileTypeInput />
      <ConnectButton />
      {isConnected ? <p>Connected as {address}</p> : <p>Not connected</p>}
    </>
  )
}

export default App

