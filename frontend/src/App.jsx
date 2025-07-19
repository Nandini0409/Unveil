import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import Feed from './pages/Feed.jsx'
import PostPage from './pages/PostPage.jsx'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/feed/:id" element={<PostPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
