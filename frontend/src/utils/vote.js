import { contractConfig } from "../config/UnveilConfig"
import { readContract, writeContract } from 'wagmi/actions'
import { config } from "../wagmi"
import toast from "react-hot-toast"

const voteOnPost = async (userAddress, postId, setLoading) => {
  if(setLoading) setLoading(true)
  try {
    const hasVoted = await readContract(config, {
      abi: contractConfig.abi,
      address: contractConfig.address,
      functionName: 'hasVoted',
      args: [postId, userAddress]
    })
    if (hasVoted === false) {
      const tx = await writeContract(config, {
        abi: contractConfig.abi,
        address: contractConfig.address,
        functionName: 'vote',
        args: [postId],
      })
      localStorage.clear()
      toast.success("Vote successful! Thank you for your support.")
      return tx
    }
    else {
      console.log("User has already voted on this post")
      toast.error("You have already voted on this post.")
    }
  }
  catch (error) {
    console.error("Vote failed:", error)
    toast.error("Vote failed. Please try again later.")
    throw error
  }
  finally {
    if (setLoading) setLoading(false)
  }
}

export default voteOnPost

