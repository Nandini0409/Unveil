import { useState } from 'react'
import FileTypeInput from './components/inputFile.jsx';
import uploadFile from './utils/pinata.js';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <FileTypeInput />
    </>
  )
}

export default App


//gateway--> lime-top-gorilla-58.mypinata.cloud