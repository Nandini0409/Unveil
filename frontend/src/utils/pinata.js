import { PinataSDK } from 'pinata'

const uploadFile = async (files) => {
  const pinata = new PinataSDK({
    pinataJwt:"PINATA_JWT",
    pinataGateway: import.meta.env.VITE_GATEWAY_URL
  })

  for (const file of files) {
    const result = await pinata.upload.public.file(file)
    console.log(result)
  }
}

export default uploadFile;









