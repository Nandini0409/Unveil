import Navbar from "../components/layout/Navbar"
import { useState } from "react"
import { useEffect } from "react"
import { contractConfig } from "../config/UnveilConfig"
import { readContract } from 'wagmi/actions'
import { config } from "../wagmi"
import PostCard from "../components/layout/PostCard"
import fetchFromIpfs from "../utils/fetchFromIpfs"
import Footer from "../components/layout/Footer"
import toast from "react-hot-toast"

const Feed = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchPost = async () => {
    setLoading(true)
    try {
      const data = await readContract(config, {
        abi: contractConfig.abi,
        address: contractConfig.address,
        functionName: 'getPosts',
        args: []
      })
      const ipfsPosts = await Promise.all(data.map(async (item, index) => {
        let ipfsData = await fetchFromIpfs(item, index)
        return ipfsData
      }))
      setPosts(ipfsPosts)
    }
    catch (error) {
      console.error("Error fetching posts:", error)
      toast.error("Failed to fetch posts. Please try again.")
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <>
      <Navbar isConnect="true" />
      {loading && (
        <div className="flex justify-center items-center py-8 min-h-[550px]">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <svg
                className="animate-spin h-4 w-4 text-purple-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
              <span>Loading posts. Please wait...</span>
            </div>
        </div>
          )}
      <section className="bg-[#cac6ca79] grid lg:grid-cols-3 sm:grid-cols-2 sm:p-5 p-1 mx-auto">
        {posts.map((post) => {
          if (!post) return null;
          return <PostCard key={post.cid} postData={post} />
        })}
      </section>
      <Footer />
    </>
  )
}

export default Feed