import Navbar from "../components/layout/Navbar"
import { useState } from "react"
import { useEffect } from "react"
import { contractConfig } from "../config/UnveilConfig"
import { readContract } from 'wagmi/actions'
import { config } from "../wagmi"
import PostCard from "../components/layout/PostCard"
import fetchFromIpfs from "../utils/fetchFromIpfs"
import Footer from "../components/layout/Footer"

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
      <div className="bg-light">
      <section className="grid grid-cols-2 p-5 gap-4 max-w-4xl mx-auto">
      {posts.map((post) => {
        if (!post) return null;
        return <PostCard key={post.cid} postData={post} />
      })}
      </section>
      </div>
      <Footer />
    </>
  )
}

export default Feed