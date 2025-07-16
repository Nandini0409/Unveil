import { contractConfig } from "../config/UnveilConfig"
import { readContract, writeContract } from 'wagmi/actions'
import { config } from "../wagmi"

const voteOnPost = async (userAddress, postId) => {
  const hasVoted = await readContract(config, {
    abi: contractConfig.abi,
    address: contractConfig.address,
    functionName: 'hasVoted',
    args: [postId, userAddress]
  })
  if (hasVoted === false) {
    try {
      const tx = await writeContract(config, {
        abi: contractConfig.abi,
        address: contractConfig.address,
        functionName: 'vote',
        args: [postId],
      })
      console.log("Vote transaction submitted:", tx)
      return tx
    }
    catch (error) {
      console.error("Vote failed:", error)
      throw error
    }
  }
}

export default voteOnPost