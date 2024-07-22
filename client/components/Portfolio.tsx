import { useState } from 'react'
import { motion } from 'framer-motion'

function Portfolio() {
  const [toggle, setToggle] = useState(false)
  const [hamburgerIcon, setHamburgerIcon] = useState(true)

  function toggleMenu() {
    setToggle((prevState) => !prevState)
    setHamburgerIcon((prevState) => !prevState)
  }

  const shakeVariants = {
    initial: {
      opacity: 1,
      rotate: 0,
    },
    visible: {
      opacity: 1,
      rotate: [0, -5, 5, -5, 5, -5, 0],
      transition: {
        type: 'tween',
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <>
      <nav className="navbar">
        <motion.div
          className="logo"
          variants={shakeVariants}
          whileHover="visible"
          initial="initial"
        >
          <a href="#profile" id="logo">
            Sonia Huynh
          </a>
        </motion.div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#tech">Tech Stack</a>
            </li>
            <li>
              <a href="#projects">My Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="hamburger-nav">
        <div className="logo">
          <a href="#profile" id="logo">
            Sonia Huynh
          </a>
        </div>

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
                  <button className="nav-button" onClick={toggleMenu}>
                    <a href="#about">About</a>
                  </button>
                </li>
                <li>
                  <button className="nav-button" onClick={toggleMenu}>
                    <a href="#tech">Tech Stack</a>
                  </button>
                </li>
                <li>
                  <button className="nav-button" onClick={toggleMenu}>
                    <a href="#projects">My Projects</a>
                  </button>
                </li>
                <li>
                  <button className="nav-button" onClick={toggleMenu}>
                    <a href="#contact">Contact</a>
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

export default Portfolio
