import { useState } from 'react'
import FileTypeInput from './components/InputFile.jsx';
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Card from './components/imageCard.jsx';

function App() {
  return (
    <>
      {/* <FileTypeInput /> */}
      <Card/>
      <ConnectButton />
    </>
  )
}

export default App

//Pick icons like 📷 lens, 🔗 chain, 🔊 speaker, 👁️ eye, 📣 megaphone, or 🧠 truth themes to represent your mission.