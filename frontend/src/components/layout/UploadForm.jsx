import { useState } from "react"
import fileReader from "../../utils/readFile"
import { useAccount } from 'wagmi'
import uploadFormData from "../../utils/pinata"
import { useWriteContract } from 'wagmi'
import { contractConfig } from "../../config/UnveilConfig"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const UploadForm = ({ state, stateFunction }) => {
  const { isConnected, address } = useAccount()
  const navigate = useNavigate()
  const { writeContractAsync } = useWriteContract()
  const [formdata, setFormdata] = useState({
    title: '',
    content: '',
    walletAddress: '',
    timestamp: '',
    location: '',
    imgs: [],
    votes: 0,
    isAnonymous: false,
  })
  const [content, setContent] = useState('')
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [loading, setLoading] = useState(false)

  const formHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      if (content.trim() === '' || content === '<p><br></p>') {
        alert("Content field is required.")
        setLoading(false)
        return
      }
      const updatedFormdata = { ...formdata, timestamp: new Date().toISOString(), walletAddress: address, content: content, isAnonymous: isAnonymous }
      setFormdata(updatedFormdata)
      const { walletAddress, votes, ...rest } = updatedFormdata
      const ipfsData = { ...rest }
      const cid = await uploadFormData(ipfsData)
      const result = await writeContractAsync({
        abi: contractConfig.abi,
        address: contractConfig.address,
        functionName: 'uploadPost',
        args: [cid],
      })
      toast.success("Post uploaded successfully!")
      navigate('/feed')
    }
    catch (error) {
      console.error("Error uploading post:", error)
      toast.error("Failed to upload post. Please try again.")
    }
    finally {
      setLoading(false)
    }
  }
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-4 overflow-y-auto">
        <form
          onSubmit={formHandler}
          className="relative max-h-[95vh] overflow-y-auto w-full max-w-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white sm:p-8 p-4 rounded-2xl shadow-xl space-y-4 sm:space-y-6 mt-20 mb-10"
        >
          <button
            type="button"
            onClick={() => stateFunction(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
          >
            &times;
          </button>
          {loading && (
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
              <span>Uploading post. Please wait...</span>
            </div>
          )}
          <div>
            <label htmlFor="title" className="block font-semibold mb-1">
              Add Title
            </label>
            <input
              required
              type="text"
              id="title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) =>
                setFormdata({ ...formdata, title: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="content" className="block font-semibold mb-1">
              Add Content
            </label>
            <div className="h-auto max-h-[300px] overflow-y-auto">
              <ReactQuill value={content} onChange={setContent} className="bg-white dark:bg-gray-800 rounded-md" />
            </div>
          </div>

          <div>
            <label htmlFor="location" className="block font-semibold mb-1">
              Add Location
            </label>
            <input
              required
              type="text"
              id="location"
              placeholder="City, State..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) =>
                setFormdata({ ...formdata, location: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="imageFile" className="block font-semibold mb-1">
              Upload Images(optional, upto 2)
            </label>
            <input
              type="file"
              id="imageFile"
              accept=".jpg,.jpeg,.png"
              multiple
              className="w-full"
              onChange={async (e) =>
                setFormdata({ ...formdata, imgs: await fileReader(e.target.files) })
              }
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="anonimity"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)} />
            <label htmlFor="anonimity" className="text-sm">
              Post Without Showing full Wallet Address
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="checkbox" required />
            <label htmlFor="checkbox" className="text-sm">
              I confirm the content of this post is truthful to the best of my knowledge.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
          >
            {loading ? "Uploading..." : "Upload Post"}
          </button>
        </form>
      </div>
    </>
  )
}

export default UploadForm



