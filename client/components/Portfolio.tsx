import sonia from '../../Public/images/soniahuynh.png'
import CV from '../../Public/assets/Sonia Huynh CV 2024.pdf'
import linkedin from '../../Public/images/linkedin.png'
import github from '../../Public/images/github.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Portfolio() {
  const [toggle, setToggle] = useState(false)
  const [hamburgerIcon, setHamburgerIcon] = useState(true)

  function toggleMenu() {
    setToggle((prevState) => !prevState)
    setHamburgerIcon((prevState) => !prevState)
  }
  const navigate = useNavigate()
  function openCV() {
    window.open(CV, '_blank')
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo">Sonia Huynh </div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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
                  <button className="nav-button" onClick={toggleMenu}>
                    <a href="#home">Home</a>
                  </button>
                </li>
                <li>
                  <button className="nav-button" onClick={toggleMenu}>
                    <a href="#about">About</a>
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

      <section id="profile">
        <div className="home-pic-container">
          <img src={sonia} alt="Sonia Huynh" />
        </div>
        <div className="home-text">
          <p className="home-text-p1">Hello, I&apos;m</p>
          <h1 className="title">Sonia Huynh</h1>
          <p className="home-text-p2">Web Developer</p>
          <div className="home-button-container">
            <button className="home-button" id="cv" onClick={openCV}>
              Check CV
            </button>
            <button
              className="home-button"
              id="contact"
              onClick={() => navigate('/contact')}
            >
              Contact me
            </button>
          </div>
          <div id="socials-container">
            <a
              href="https://www.linkedin.com/in/sonia-huynh/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt="Sonia's linkedIn profile"
                className="icon"
              />
            </a>
            <a
              href="https://github.com/sonia-huynh"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="Sonia's Github profile" className="icon" />
            </a>
          </div>
        </div>
      </section>

      {/* <h1 id="intro2">I&apos;m Sonia </h1>
      <div className="homeBox">
        <div className="homeAboutDiv">
          <p>
            My name is Sonia and I am an enthusiastic and compassionate
            full-stack developer with an interest in creating projects that add
            entertainment or improve our day-to-day lives. Take a look at the
            projects I&apos;ve worked on and what I am currently working on in
            My Projects tab.
            <p>
              I enjoy the collaborative and problem solving aspect of
              development and am always open to learning new concepts.
            </p>
          </p>
          <p>
            Outside of coding, I have an interest in reading, crocheting and
            playing card/board games with my friends and family.
          </p>
         

        <div className="icons">
          <img id="helloimg" className="" src={waving} alt="waving" />
        </div>
      </div> */}
    </>
  )
}

export default Portfolio
