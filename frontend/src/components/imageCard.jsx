import { useState } from "react"
import fileReader from "../utils/readFile"
import { useAccount } from 'wagmi'
import uploadFormData from "../utils/pinata"
import { useWriteContract } from 'wagmi'
import { contractConfig } from "../config/UnveilConfig"

const Card = () => {
  const { isConnected, address } = useAccount()
  const { writeContractAsync } = useWriteContract()
  const [formdata, setFormdata] = useState({
    imgs: [],
    caption: '',
    desc: '',
    time: '',
    location: '',
    votes: 0,
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
    const result = writeContractAsync({
      abi: contractConfig.abi,
      address: contractConfig.address,
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





// "caption": "Voices in the Shadows: A Student’s Protest Silenced",
//   "desc": "In a small university town, hundreds of students staged a peaceful protest over rising tuition fees. The local police responded with batons and internet shutdowns. One student leader, Ayesha, shared her story anonymously, detailing how she was detained for 36 hours without a lawyer and questioned about political affiliations. Her statement exposes the quiet suppression of dissent happening in democratic settings. She calls for transparency, legal support for students, and international awareness of these actions.",
//   "imgs": [],
//   "time": "2025-07-10T10:45:00Z",
//   "location": "Ahmedabad, India",
//   "walletAddress": "0x1111fakewallet001",
//   "votes": 0

// "caption": "Poisoned Waters: A Town’s Secret Battle",
//   "desc": "Residents of a remote town in Maharashtra noticed increasing illnesses — rashes, vomiting, and chronic fatigue. A local health worker collected samples and uncovered alarming levels of industrial waste in the groundwater. When the state health office failed to act, she uploaded her findings anonymously, fearing retaliation. This article includes redacted lab data and calls on national environmental watchdogs to intervene. The whistleblower urges citizens to test their own water and speak out.",
//   "imgs": [],
//   "time": "2025-07-08T16:00:00Z",
//   "location": "Nashik, India",
//   "walletAddress": "0x2222fakewallet002",
//   "votes": 0

// A former editor of a major news channel shares how government officials regularly called in to shape headlines and remove sensitive topics. She reveals email logs, pressure tactics, and the financial threats used to suppress uncomfortable truths. This anonymous piece offers a rare glimpse into newsroom politics and suggests a decentralized publishing platform may be the only way to protect honest journalism in the digital age.