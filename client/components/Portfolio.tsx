import sonia from '../../Public/images/soniahuynh.png'
import CV from '../../Public/assets/Sonia Huynh CV 2024.pdf'
import linkedin from '../../Public/images/linkedin.png'
import github from '../../Public/images/github.png'
import about from '../../Public/images/about.png'
import arrow from '../../Public/images/arrow.png'
import check from '../../Public/images/checkmark.png'
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
              <a href="#profile">Home</a>
            </li>
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
                    <a href="#profile">Home</a>
                  </button>
                </li>
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

      <section id="profile">
        <div className="pic-container">
          <img src={sonia} alt="Sonia Huynh" />
        </div>
        <div className="home-text">
          <p className="section-text-p1">Hello, I&apos;m</p>
          <h1 className="profile-title">Sonia Huynh</h1>
          <p className="section-text-p2">Web Developer</p>
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
      <br />
      <section id="about">
        <p className="section-text-p1">Get To Know More</p>
        <h1 className="title">About me</h1>
        <div className="section-container">
          <div className="text-container">
            <p>
              My name is Sonia and I am an enthusiastic and compassionate
              full-stack developer with an interest in creating projects that
              add entertainment or improve our day-to-day lives.
            </p>
            <br />
            <p>
              I enjoy the collaborative and problem solving aspect of
              development and am always open to learning new concepts.
            </p>
            <br />
            <p>
              Take a look at the projects I&apos;ve worked on and what I am
              currently working on in the Projects tab.
            </p>
            <br />
            <p>
              Outside of coding, I have an interest in reading, crocheting and
              playing card/board games with my friends and family.
            </p>
          </div>
          <div className="about-pic-container pic-container">
            <img src={about} alt="about me coding" className="about-pic" />
          </div>
        </div>
        <button
          className="nav-button"
          onClick={() => (location.href = './#tech')}
        >
          <img src={arrow} alt="move to next section" className="arrow icon" />
        </button>
      </section>

      <section id="tech">
        <p className="section-text-p1">Explore My</p>
        <h1 className="title">Tech Stack</h1>
        <div className="tech-details-container">
          <div className="tech-container">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img src={check} alt="experience icon" className="icon" />
                  <div>
                    <h3>HTML</h3>
                  </div>
                </article>
                <article>
                  <img src={check} alt="experience icon" className="icon" />
                  <div>
                    <h3>CSS</h3>
                  </div>
                </article>
                <article>
                  <img src={check} alt="experience icon" className="icon" />
                  <div>
                    <h3>TailWind</h3>
                  </div>
                </article>
                <article>
                  <img src={check} alt="experience icon" className="icon" />
                  <div>
                    <h3>JavaScript</h3>
                  </div>
                </article>
                <article>
                  <img src={check} alt="experience icon" className="icon" />
                  <div>
                    <h3>TypeScript</h3>
                  </div>
                </article>
                <article>
                  <img src={check} alt="experience icon" className="icon" />
                  <div>
                    <h3>React</h3>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article>
                  <img src={check} alt="experience icon" className="icon" />
                  <div>
                    <h3>Node.js</h3>
                  </div>
                </article>
                <article>
                  <img src={check} alt="experience icon" className="icon" />
                  <div>
                    <h3>SQLite</h3>
                  </div>
                </article>
                <article>
                  <img src={check} alt="experience icon" className="icon" />
                  <div>
                    <h3>Knex.js</h3>
                  </div>
                </article>
                <article>
                  <img src={check} alt="experience icon" className="icon" />
                  <div>
                    <h3>Express.js</h3>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <button
          className="nav-button"
          onClick={() => (location.href = './#projects')}
        >
          <img src={arrow} alt="move to next section" className="arrow icon" />
        </button>
      </section>
    </>
  )
}

export default Portfolio
