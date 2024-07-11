import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [hamburgerIcon, setHamburgerIcon] = useState(true)

  function toggleMenu() {
    setToggle((prevState) => !prevState)
    setHamburgerIcon((prevState) => !prevState)
  }

  console.log(toggle)

  return (
    <>
      <nav className="navbar">
        <div className="logo">Sonia Huynh </div>
        <div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="my-projects">My Projects</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="hamburger-nav">
        <div className="logo">Sonia Huynh</div>
        <div className="hamburger-menu">
          <div
            className={hamburgerIcon ? 'hamburger-icon' : 'hamburger-icon-open'}
            onClick={toggleMenu}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                toggleMenu()
              }
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {toggle && (
            <>
              <div className={toggle ? 'menu-links-open' : 'menu-links'}>
                <li>
                  <button onClick={toggleMenu}>
                    <Link to="/">Home</Link>
                  </button>
                </li>
                <li>
                  <button onClick={toggleMenu}>
                    <Link to="about">About</Link>
                  </button>
                </li>
                <li>
                  <button onClick={toggleMenu}>
                    <Link to="my-projects">My Projects</Link>
                  </button>
                </li>
                <li>
                  <button onClick={toggleMenu}>
                    <Link to="contact">Contact</Link>
                  </button>
                </li>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  )
}
