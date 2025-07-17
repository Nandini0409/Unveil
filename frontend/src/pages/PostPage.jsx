import { useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import { useState } from "react"
import voteOnPost from "../utils/vote.js"
const PostPage = () => {
  const { cid } = useParams()
  const location = useLocation()
  const [postData, setPostData] = useState(location.state?.postData || null)

  const fetchFullPost = async () => {
    if (!postData) {
      const cached = localStorage.getItem(`ipfs-${cid}`)
      if (cached) {
        setPostData(JSON.parse(cached))
      }
    }
  }

  useEffect(() => {
    fetchFullPost()
  }, [])

  return (
    
    <div className="max-w-3xl mx-auto p-6 mt-10 rounded-2xl shadow-xl bg-[#1E3A8A] text-white space-y-6 border border-white/10 backdrop-blur-md">
  <h1 className="text-4xl font-extrabold tracking-tight text-white">{postData.title}</h1>

  <div className="text-white/80 text-sm space-y-1 font-medium">
    <p><span className="text-white font-semibold">Author:</span> {postData.userAddress}</p>
    <p><span className="text-white font-semibold">Votes:</span> {postData.votes}</p>
    <p><span className="text-white font-semibold">Location:</span> {postData.location}</p>
    <p>
      <span className="text-white font-semibold">Posted On:</span>{" "}
      {new Date(postData.timestamp * 1000).toLocaleString()}
    </p>
  </div>

  <p className="text-lg leading-relaxed text-white/90 font-light">{postData.content}</p>

  {postData.images && postData.images.length > 0 && (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {postData.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Post image ${index + 1}`}
          className="w-full rounded-lg object-cover shadow-lg border border-white/10"
        />
      ))}
    </div>
  )}

  <div className="flex justify-end">
    <button
      onClick={() => voteOnPost(postData.userAddress, postData.postId)}
      className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-6 py-2 rounded-full transition duration-200 shadow-md hover:shadow-lg"
    >
      ✊ Vote for Justice
    </button>
  </div>
</div>

  )
}

export default PostPage