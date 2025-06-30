import { PinataSDK } from 'pinata'

const uploadFile = async (files, encryptionKey) => {
  console.log(encryptionKey)
  const pinata = new PinataSDK({
    pinataJwt: import.meta.env.VITE_JWT,
    pinataGateway: import.meta.env.VITE_GATEWAY_URL
  })
  for (const file of files) {
    const blob = await new Blob([file])
    const result = await pinata.upload.public.file(blob)
  }
}

export default uploadFile;









