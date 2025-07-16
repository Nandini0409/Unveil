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
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.content}</p>
      <p>Author: {postData.userAddress}</p>
      <p>Votes: {postData.votes}</p>
      <p>Location: {postData.location}</p>
      <p>Timestamp: {new Date(postData.timestamp * 1000).toLocale} </p>
      <div>
        {postData.images.map((image, index) => (
          <img key={index} src={image} alt={`Post image ${index + 1}`} />
        ))}
      </div>
      <button onClick={()=>voteOnPost(postData.userAddress, postData.postId)}>Vote</button>
    </div>
  )
}

export default PostPage