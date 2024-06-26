import { useNavigate } from 'react-router-dom'
import logo from '../../../Public/images/bookbound.jpg'

export default function LocalStorage() {
  const navigate = useNavigate()
  return (
    <>
      <h1>{`Local Storage`}</h1>
      <div className="divContainer">
        <img src={logo} alt="bookbound logo" className="imgcard" />
      </div>
      <div className="homediv">
        <h2>Struggle:</h2>
        <p>
          While I created the function to add books from the Google api into my
          database, I also set a conditional where if a book was added from the
          Google books API into my database it should no longer be able to be
          added again into the user&apos;s library. However, I didn&apos;t know
          how to make the browser remember the books have been added and those
          that haven&apos;t. This is when I learnt about browser local storage.
        </p>
      </div>
      <div className="homediv">
        <h2>Solution:</h2>
        <p>
          I learnt that many other web applications also make use of the local
          browser storage, such as online shopping. When a user clicks buy on an
          item, it gets added to the shopping cart for the user and that item is
          actually saved in the local browser! We know this because, sometimes
          we may close the webpage and then when we go back to it our item is
          still in the shopping cart.
        </p>
        <p>
          I utilised the local browser storage to remember which books a user
          has saved into their personal library by saving the book title and
          book id as a boolean. Then whenever the page renders it will first
          check the local browser storage to see which books have been saved as
          true and those books will now show &ldquo;added to shelf&rdquo;
          instead of &ldquo;add to shelf&rdquo;
        </p>
      </div>

      <div className="homediv">
        <h2>Current Focus:</h2>
        <p>
          My current focus now is to create a start rating which allows half
          stars too! Many book reading apps usually only allow full star
          ratings, but I believe that a half star rating makes all the
          difference!
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
        <button
          className="blogButtons"
          onClick={() => navigate('/BookBoundBlog/starRating')}
        >
          Next Blog →
        </button>
      </div>
    </>
  )
}
