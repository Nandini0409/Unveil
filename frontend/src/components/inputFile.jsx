import fileEncryption from "../modules/encrypt"

const FileTypeInput = () => {
  const fileReader = (files) => {
    for (const file of files) {
      const reader = new FileReader()
      reader.readAsArrayBuffer(file)
      reader.addEventListener('loadend', (e) => {
        fileEncryption(reader.result)
      })
    }
  }
  return (
    <input type="file" onChange={(e) => { fileReader(e.target.files) }} accept=".jpg,.jpeg,.png" multiple />
  )
}

export default FileTypeInput;