import Navbar from './Navbar'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import MyProjects from './MyProjects'
import BookBound from '../components/BookBoundBlog/BookBound'
import Footer from './Footer'
import Menu from '../components/BookBoundBlog/Menu'
import LocalStorage from '../components/BookBoundBlog/LocalStorage'
import StarRating from '../components/BookBoundBlog/StarRating'

function App() {
  return (
    <>
      <h1>{`Sonia's Portfolio`}</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="my-projects" element={<MyProjects />} />
        <Route path="my-projects/BookBoundBlog/Menu" element={<Menu />} />
        <Route path="BookBoundBlog/SearchBar" element={<BookBound />} />
        <Route path="BookBoundBlog/localStorage" element={<LocalStorage />} />
        <Route path="BookBoundBlog/starRating" element={<StarRating />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
