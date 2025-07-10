import { useState } from "react"
import fileReader from "../utils/readFile"
import { useAccount } from 'wagmi'
import uploadFormData from "../utils/pinata"
import { useWriteContract } from 'wagmi'
import {contractConfig} from "../contracts/fairlensConfig"

const Card = () => {
  const { isConnected, address } = useAccount()
  const { writeContractAsync } = useWriteContract()
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
  const formHandler = async (e) => {
    e.preventDefault()
    const updatedFormdata = { ...formdata, walletAddress: address }
    setFormdata(updatedFormdata)
    console.log(address)
    const ipfsData = {
      imgs: updatedFormdata.imgs,
      caption: updatedFormdata.caption,
      desc: updatedFormdata.desc,
      time: updatedFormdata.time,
      location: updatedFormdata.location
    }
    const cid = await uploadFormData(ipfsData)
    console.log(contractConfig.abi)
    const result = writeContractAsync({
      abi: contractConfig.abi,
      address : contractConfig.address,
      functionName: 'uploadImage',
      args: [cid],
    })
    console.log(result)
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


// color pallate--->
// #B3E7F2
// #56878C
// #14403B
// #0C2624
// #F2F2F2

// Use transparency and fade-in effects to represent “unveiling”