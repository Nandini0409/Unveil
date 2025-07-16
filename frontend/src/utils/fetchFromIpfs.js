import axios from "axios"

const fetchFromIpfs = async (item, index) => {
  const cid = item.cidHash
  const cacheKey = `ipfs-${cid}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) return JSON.parse(cached);

  try {
    const metadataRes = await axios.get(`https://${cid}.ipfs.dweb.link/metadata`)
    const metadata = metadataRes.data
    const imageUrls = []

    for (let i = 0; i < 3; i++) {
        const filename = `image_${i}`
        const url = `https://${cid}.ipfs.dweb.link/${filename}`

        try {
          await axios.head(url)
          imageUrls.push(url)
        }
        catch {
          continue
        }
    }

    const fullPost = {
      ...metadata,
      images: imageUrls,
      cid: cid,
      userAddress : item.user,
      votes : item.votes.toString(),
      postId : index
    }

    localStorage.setItem(cacheKey, JSON.stringify(fullPost))
    return fullPost;

  }
  catch (error) {
    console.error('Failed to fetch post:', error)
    return null
  }
}

export default fetchFromIpfs