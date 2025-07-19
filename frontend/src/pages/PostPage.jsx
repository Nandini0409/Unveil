import { useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import { useState } from "react"
import voteOnPost from "../utils/vote.js"
import Navbar from "../components/layout/Navbar.jsx"
import Footer from "../components/layout/Footer.jsx"


const PostPage = () => {
  const { cid } = useParams()
  const location = useLocation()
  const [postData, setPostData] = useState(location.state?.postData || null)
  const [loading, setLoading] = useState(false)

  const fetchFullPost = async () => {
    const cached = localStorage.getItem(`ipfs-${cid}`)
    if (cached) {
      setPostData(JSON.parse(cached))
    }
  }

  useEffect(() => {
    fetchFullPost()
  }, [])

  return (
    <>
      <Navbar isConnect="true" />
      <div className="max-w-3xl sm:mx-auto m-3 sm:m-10 p-3 sm:p-8 rounded-xl sm:rounded-3xl bg-[#0e1320] shadow-xl border border-white/10 backdrop-blur-lg space-y-8 text-white">
        <h1 className="text-2xl sm:text-5xl font-bold leading-tight tracking-tight text-white">
          {postData.title}
        </h1>

        <div className="text-white/80 text-sm sm:text-base space-y-2 font-medium">
          <p className="text-xs sm:text-sm">
            <span className="font-semibold  text-white">✍️ Author:</span>{" "}
            {postData.isAnonymous ? `${postData.userAddress.slice(0, 3)}...${postData.userAddress.slice(-3)}` : postData.userAddress}
          </p>
          <p>
            <span className="font-semibold text-white">🔥 Votes:</span>{" "}
            {postData.votes}
          </p>
          <p>
            <span className="font-semibold text-white">📍 Location:</span>{" "}
            {postData.location}
          </p>
          <p>
            <span className="font-semibold text-white">🕒 Posted On:</span>{" "}
            {new Date(postData.timestamp).toLocaleString()}
          </p>
        </div>

        <p className="text-white/90 sm:text-lg leading-relaxed font-light">
          {postData.content}
        </p>

        {postData.images && postData.images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {postData.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Post image ${index + 1}`}
                className="w-full rounded-xl object-cover shadow-lg border border-white/10"
              />
            ))}
          </div>
        )}

        <div className="flex sm:justify-end justify-center pt-4">
          <button
            onClick={async () => {
              const res = await voteOnPost(postData.userAddress, postData.postId, setLoading)
              if (res) {
                fetchFullPost()
              }
            }}
            className="bg-[#9333EA] hover:bg-[#7E22CE] text-white font-bold text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3 rounded-full transition duration-200  shadow-md hover:shadow-purple-700"
          >
            {loading ? "Voting..." : "✊ Cast Your Vote for Justice"}
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default PostPage