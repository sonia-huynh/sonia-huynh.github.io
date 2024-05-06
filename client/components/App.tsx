import Navbar from './Navbar'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import MyProjects from './MyProjects'

function App() {
  return (
    <>
      <h1>{`Sonia's Portfolio`}</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-projects" element={<MyProjects />} />
      </Routes>
    </>
  )
}

export default App
