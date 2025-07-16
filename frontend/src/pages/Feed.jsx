import Navbar from "../components/layout/Navbar"
import { useState } from "react"
import { useEffect } from "react"
import { contractConfig } from "../config/UnveilConfig"
import { readContract } from 'wagmi/actions'
import { config } from "../wagmi"
import PostCard from "../components/layout/PostCard"
import fetchFromIpfs from "../utils/fetchFromIpfs"

const Feed = () => {
  const [posts, setPosts] = useState([])

  const fetchPost = async () => {
    const data = await readContract(config, {
      abi: contractConfig.abi,
      address: contractConfig.address,
      functionName: 'getPosts',
      args: []
    })
    const ipfsPosts = await Promise.all(data.map(async (item, index) => {
      const ipfsData = await fetchFromIpfs(item, index)
      return ipfsData
    }))
    setPosts(ipfsPosts)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <>
      <Navbar isConnect="true" />
      {posts.map((post) => {
        if (!post) return null;
        return <PostCard key={post.cid} postData={post} />
      })}
    </>
  )
}

export default Feed