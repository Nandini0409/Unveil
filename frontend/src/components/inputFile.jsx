import fileReader from '../utils/readFile'

const FileTypeInput = () => {
  
  return (
    <input type="file" onChange={(e) => { fileReader(e.target.files) }} accept=".jpg,.jpeg,.png" multiple />
  )
}

export default FileTypeInput;