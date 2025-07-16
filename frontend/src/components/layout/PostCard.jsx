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
    <div onClick={showFullPost}>
      <h2>{title}</h2>
      <p>{previewContent}</p>
      <p>{userAddress}</p>
      <p>{timestamp}</p>
      <p>{votes}</p>
      <p>{location}</p>
    </div>
  )
}

export default PostCard

