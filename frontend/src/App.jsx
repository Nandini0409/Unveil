import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import Feed from './pages/Feed.jsx'
import PostPage from './pages/PostPage.jsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/feed/:id" element={<PostPage />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
