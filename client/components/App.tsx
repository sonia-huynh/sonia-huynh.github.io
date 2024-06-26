import Navbar from './Navbar'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import MyProjects from './MyProjects'
import BookBound from './BookBound'
import Footer from './Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/my-projects/bookbound" element={<BookBound />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
