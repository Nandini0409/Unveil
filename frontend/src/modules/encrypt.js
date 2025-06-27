const fileEncryption = async (arrayBuffer) => {
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
    arrayBuffer
  )
  console.log(encryptedFile)
}


export default fileEncryption;