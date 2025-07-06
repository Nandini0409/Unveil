// import uploadFile from "./pinata"

const fileReader = async (files) => {
  let arrayOfArrayBuffers = []
  for (const file of files) {
    const buffer = await readFileAsBuffer(file)
    arrayOfArrayBuffers.push(buffer)
  }
  console.log(arrayOfArrayBuffers)
  return arrayOfArrayBuffers
  // uploadFile(arrayOfArrayBuffers)
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