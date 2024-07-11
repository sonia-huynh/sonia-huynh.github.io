import { Route, Routes } from 'react-router-dom'
import MyProjects from './MyProjects'
import BookBound from './BookBound'
// import Footer from './Footer'
import Portfolio from './Portfolio'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/my-projects/bookbound" element={<BookBound />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
