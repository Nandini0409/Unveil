import { PinataSDK } from 'pinata'

const uploadFormData = async (ipfsData) => {

  const pinata = new PinataSDK({
    pinataJwt: import.meta.env.VITE_JWT,
    pinataGateway: import.meta.env.VITE_GATEWAY_URL
  })
  const { imgs, ...rest } = ipfsData
  const files = imgs.map((buffer, index) => {
    return new File([buffer], `image_${index}`)
  })
  const jsonFile = new File([JSON.stringify(rest)], `metadata`,{ type: 'application/json' })
  files.push(jsonFile)
  const result = await pinata.upload.public
    .fileArray(files)

  console.log("uploaded to ipfs")
  return result.cid
}

export default uploadFormData;