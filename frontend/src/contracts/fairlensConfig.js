import fairlensArtifact from "../abi/fairlens.json"

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS

export const contractConfig = {
  address: contractAddress,
  abi: fairlensArtifact.abi,
}