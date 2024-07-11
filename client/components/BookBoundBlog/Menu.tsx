import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <>
      <div className="homediv">
        <h1>BookBound Blog Posts</h1>
        <div className="homediv">
          <ol>
            <p>
              <li>
                <Link to="/BookBoundBlog/SearchBar">Search Bar</Link>
              </li>
            </p>
            <p>
              <li>
                <Link to="/BookBoundBlog/localStorage">
                  Save Book in Browser Local Storage
                </Link>
              </li>
            </p>
            <p>
              <li>
                <Link to="/BookBoundBlog/starRating">Half Star Rating</Link>
              </li>
            </p>
          </ol>
        </div>
      </div>
    </>
  )
}
