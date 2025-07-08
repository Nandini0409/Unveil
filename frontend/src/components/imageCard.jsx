import { useState } from "react"
import fileReader from "../utils/readFile"
import { useAccount } from 'wagmi'
import uploadFormData from "../utils/pinata"

const Card = () => {
  const { isConnected, address } = useAccount()
  const [formdata, setFormdata] = useState({
    imgs: [],
    caption: '',
    desc: '',
    time: '',
    location: '',
    upvote: 0,
    downvote: 0,
    walletAddress: ''
  })
  const formHandler = (e) => {
    e.preventDefault()
    const updatedFormdata = { ...formdata, walletAddress: address }
    setFormdata(updatedFormdata)
    const ipfsData = {
      imgs : updatedFormdata.imgs,
      caption : updatedFormdata.caption,
      desc : updatedFormdata.desc,
      time : updatedFormdata.time,
      location : updatedFormdata.location
    }
    const cid = uploadFormData(ipfsData)
    console.log(cid)
  }
  return (
    <>
      {!isConnected ? alert('connect wallet before uploading photo!') : <p>connected to {address}</p>}
      <form onSubmit={formHandler}>
        <div>
          <label htmlFor="imageFile">Add files</label>
          <input type="file" accept=".jpg,.jpeg,.png" id="imageFile" multiple onChange={async (e) => { setFormdata({ ...formdata, imgs: await fileReader(e.target.files) }) }} />
        </div>
        <div>
          <label htmlFor="caption">Caption</label>
          <input type="text" id="caption" onChange={(e) => { setFormdata({ ...formdata, caption: e.target.value }) }} />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea id="desc" onChange={(e) => setFormdata({ ...formdata, desc: e.target.value })}></textarea>
        </div>
        <div>
          <label htmlFor="time">Select time</label>
          <input type="datetime-local" id="time" onChange={(e) => { setFormdata({ ...formdata, time: e.target.value }) }} />
        </div>
        <div> 
          <label htmlFor="location">Add location</label>
          <input type="text" placeholder="city, state..." id="location" onChange={(e) => { setFormdata({ ...formdata, location: e.target.value }) }} />
        </div>
        <div>
          <input type="checkbox" id="checkbox" required />
          <label htmlFor="checkbox">I confirm this image is truthful to the best of my knowledge.</label>
        </div>
        <button type="submit" >Upload Image</button>
      </form>
    </>
  )
}

export default Card