import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="my-projects">My Projects</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
