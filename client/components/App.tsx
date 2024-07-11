import { Route, Routes } from 'react-router-dom'
// import MyProjects from './MyProjects'
// import BookBound from './BookBound'
// import Footer from './Footer'
import Portfolio from './Portfolio'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
