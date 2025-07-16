import { PinataSDK } from 'pinata'

const uploadFormData = async (ipfsData) => {

  const pinata = new PinataSDK({
    pinataJwt: import.meta.env.VITE_JWT,
    pinataGateway: import.meta.env.VITE_GATEWAY_URL
  })
  let files = []
  const { imgs, ...rest } = ipfsData
  if (imgs.length > 0) {
    files = imgs.map((buffer, index) => {
      return new File([buffer], `image_${index}`)
    })
  }
  const jsonFile = new File([JSON.stringify(rest)], `metadata`, { type: 'application/json' })
  files.push(jsonFile)
  const result = await pinata.upload.public
    .fileArray(files)
  console.log("uploaded to ipfs", result.cid)
  return result.cid
}

export default uploadFormData;