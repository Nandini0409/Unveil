import { useNavigate } from 'react-router-dom'

const PostCard = ({ postData }) => {
  const navigate = useNavigate()
  const { title, content, userAddress, timestamp, votes, location, cid, postId} = postData
  const previewContent = content.length > 70 ? content.slice(0, 70) + '...' : content

  const showFullPost = () => {
    navigate(`/feed/${cid}`,{ state : {postData}})
    console.log(postData)
  }

  return (

<div
  onClick={showFullPost}
  className="bg-[#0e1320] border border-white/10 text-white rounded-2xl shadow-xl p-6 m-2 cursor-pointer transition-transform hover:scale-[1.02] hover:shadow-purple-700/30 duration-300"
>
  <h2 className="sm:text-xl text-lg font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
    {title}
  </h2>

  <p className="text-gray-300 mb-4 text-sm line-clamp-3">{previewContent}</p>

  <div className="flex flex-wrap text-sm justify-between text-gray-400 mt-4 gap-y-2">
    <div>👤 {userAddress.slice(0, 6)}...{userAddress.slice(-4)}</div>
    <div>📍 {location}</div>
    <div>🕒 {new Date(timestamp).toLocaleString()}</div>
    <div>👍 {votes}</div>
  </div>
</div>


  )
}

export default PostCard

