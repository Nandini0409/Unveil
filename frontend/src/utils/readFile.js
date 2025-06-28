import fileEncryption from "./encrypt"

const fileReader = async (files) => {
  let arrayOfArrayBuffers = []
  for (const file of files) {
    const buffer = await readFileAsBuffer(file)
    arrayOfArrayBuffers.push(buffer)
  }
  fileEncryption(arrayOfArrayBuffers)
}

const readFileAsBuffer = (file)=>{
  return new Promise((resolve, reject)=>{
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = ()=>resolve(reader.result)
    reader.onerror = ()=> reject
  })
}

export default fileReader