import logo from '../../Public/images/bookbound.jpg'

export default function BookBound() {
  return (
    <>
      <h1>{`BookBound`}</h1>
      <div className="divContainer">
        <img src={logo} alt="bookbound logo" className="imgcard" />
      </div>
      <div className="homediv">
        <h2>Goals:</h2>
        <p>
          A few things I wanted to try while building this app was having the
          search bar, and how to save data from the api into my own database and
          then render that out onto the page.
        </p>
        <p>
          The search bar took lots of trial and error and help from others
          before I got it working and now it&apos;s able to search through the
          GoogleBooks Api and return back the book image, title, author and
          description!
        </p>
        <p>
          My struggle with the search bar was that my intial idea was to use
          useParams to pass the users search from the frontend to the backend,
          however, after some help from my facilitator I realised that a more
          efficient and conventional way was to use the useSearchParams hook
          instead, after implementing that, everything clicked into place.
        </p>
      </div>
      <div className="homediv">
        <h2>Current Focus:</h2>
        <p>
          My current focus now is to try save the books the user has searched up
          into my database and ensure that if the user searches up the book
          again, the book remains as &quot;saved&quot; instead of having the
          option to save the book again.
        </p>
      </div>
    </>
  )
}
