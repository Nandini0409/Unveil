import uploadFile from "./pinata"

const fileEncryption = async (array) => {
  let encryptedFiles = []
  for (const buffer of array){
    const cryptoKey = await window.crypto.subtle.generateKey(
      {
        name: "AES-GCM",
        length: 256,
      },
      true,
      ["encrypt", "decrypt"],)
    const iv = crypto.getRandomValues(new Uint8Array(12))
    const encryptedFile = await window.crypto.subtle.encrypt(
      {
        name: "AES-GCM",
        iv: iv
      },
      cryptoKey,
      buffer
    )
    encryptedFiles.push(encryptedFile)
  }
  uploadFile(encryptedFiles)
}

export default fileEncryption;