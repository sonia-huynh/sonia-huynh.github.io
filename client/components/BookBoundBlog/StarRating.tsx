import { useNavigate } from 'react-router-dom'
import logo from '../../../Public/images/bookbound.jpg'

export default function StarRating() {
  const navigate = useNavigate()
  return (
    <>
      <h1>{`Half Star Ratings`}</h1>
      <div className="divContainer">
        <img src={logo} alt="bookbound logo" className="imgcard" />
      </div>
      <div className="homediv">
        <h2>Goal:</h2>
        <p>
          The goal here is to create a 5 star rating that also allows half
          stars. The stars should be empty first and have a grey outline, when
          the user hovers their mouse over the stars it should turn yellow. When
          the user clicks once on the star it should fill it half way and a
          double click will fully fill the star.
        </p>
      </div>
      <div className="homediv">
        <h2>Solution:</h2>
        <p>
          I watched a few youtube tutorials on how to create a star rating in
          React and used the React full star icons and half star icons get the
          full and half star effect.
        </p>
      </div>

      <div className="homediv">
        <h2>Current Focus:</h2>
        <p>
          Adding a date picker so users can add their start and end dates of a
          book.
        </p>
      </div>
      <br />
      <div className="homediv" id="blogButtonDiv">
        <button
          className="blogButtons"
          onClick={() => navigate('/my-projects/BookBoundBlog/Menu')}
        >
          ← Blog Menu
        </button>
        {/* <button className="blogButtons">Next Blog →</button> */}
      </div>
    </>
  )
}
