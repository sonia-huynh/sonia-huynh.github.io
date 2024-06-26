export default function Menu() {
  return (
    <>
      <div className="homediv">
        <h1>BookBound Blog Posts</h1>
        <div className="homediv">
          <ol>
            <p>
              <li>
                <a href="/BookBoundBlog/SearchBar">Search Bar</a>
              </li>
            </p>
            <p>
              <li>
                <a href="/BookBoundBlog/localStorage">
                  Save Book in Browser Local Storage
                </a>
              </li>
            </p>
            <p>
              <li>
                <a href="/BookBoundBlog/starRating">Half Star Rating</a>
              </li>
            </p>
          </ol>
        </div>
      </div>
    </>
  )
}
