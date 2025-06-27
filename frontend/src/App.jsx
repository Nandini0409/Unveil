import { useState } from 'react'
import FileTypeInput from './components/inputFile.jsx';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <FileTypeInput />
    </>
  )
}

export default App
