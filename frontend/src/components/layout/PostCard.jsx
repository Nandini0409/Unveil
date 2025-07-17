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
      className='bg-card text-light rounded-xl shadow-[rgba(0,0,0,0.35)_0px_5px_15px] p-6 m-3 cursor-pointer transition-transform hover:scale-[1.015] hover:shadow-lg duration-200'
    >
      <h2 className='text-xl font-semibold mb-2 text-accent'>{title}</h2>
      <p className='text-muted mb-3'>{previewContent}</p>

      <div className='flex flex-wrap text-sm justify-between text-white mt-4'>
        <div className='mb-1'>👤 {userAddress.slice(0, 6)}...{userAddress.slice(-4)}</div>
        <div className='mb-1'>📍 {location}</div>
        <div className='mb-1'>🕒 {new Date(timestamp).toLocaleString()}</div>
        <div className='mb-1'>👍 {votes}</div>
      </div>
    </div>
  )
}

export default PostCard

