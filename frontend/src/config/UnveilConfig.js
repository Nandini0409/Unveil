import UnveilArtifact from "../abi/UnveilAbi.json"

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS

export const contractConfig = {
  address: contractAddress,
  abi: UnveilArtifact.abi,
}