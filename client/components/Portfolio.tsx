import sonia from '../../Public/images/soniahuynh.png'
import CV from '../../Public/assets/Sonia Huynh CV 2024.pdf'
import linkedin from '../../Public/images/linkedin.png'
import github from '../../Public/images/github.png'
import about from '../../Public/images/about.png'
import arrow from '../../Public/images/arrow.png'
import check from '../../Public/images/checkmark.png'
import email from '../../Public/images/email.png'
import bookBound from '../../Public/assets/BookBoundDemo.mp4'
import bean from '../../Public/assets/dreambeanmemeteam.mp4'
import Lucas from '../../Public/assets/LucasMansionDemo.mp4'

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
        <div className="section-container">
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
                onClick={() => navigate('/#contact')}
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
                <img
                  src={github}
                  alt="Sonia's Github profile"
                  className="icon"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section-text-p1">A Bit</p>
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
          <div className="about-pic-container">
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
      <section id="projects" className="project-section">
        <p className="section-text-p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="tech-details-container project-details-container">
          <div className="project-box">
            <h2 className="project-title">BookBound</h2>
            <div className="project-container">
              <video controls className="project-video">
                <source src={bookBound} type="video/mp4" />
                <track kind="captions" src="" srcLang="en" label="English" />
                Your browser does not support the video tag.
              </video>
              <div className="text-container">
                <p>
                  My first personal project I created is a personal book review
                  and rating app. One of my hobbies is reading and I also love
                  to write down my reviews for books, however, I wanted to have
                  it all saved in a personal journal type way without the social
                  aspect of sharing my reivews to others.
                </p>
                <br />
                <p>
                  This project helped consolidate my learning on using external
                  APIs and how to build a fullstack web app from scratch.
                </p>
                <br />
                <br />
                <h3>Tech Stack:</h3>
                <p>
                  React, Typescript, Tailwind, SQLite (with knex.js), Node.js,
                  Superagent, Express and GoogleBooks api
                </p>
              </div>
            </div>
            <div className="project-button">
              <a
                href="https://github.com/sonia-huynh/BookBound"
                target="_blank"
                rel="noreferrer"
              >
                <button className="home-button project-button">Github</button>
              </a>
            </div>
          </div>
          <div className="project-box">
            <h2 className="project-title">Lucas&apos; Mansion</h2>
            <div className="project-container">
              <div className="text-container">
                <p>
                  My bootcamp final showcase group project was a point and click
                  digital escape room.
                </p>
                <br />
                <p>
                  Our goal was to create at least four different games to
                  practice game logic, create multiple clickable items within
                  the room each with their own pop up component and lastly,
                  create at least 3 separate routes to different rooms.
                </p>

                <br />
                <p>
                  The game has been deployed and is only supported by desktop.
                </p>
                <br />
                <br />

                <h3>Tech Stack:</h3>
                <p>
                  React, Typescript, CSS, SQLite (with knex.js), Node.js and
                  Express.js
                </p>
              </div>
              <video controls className="project-video">
                <source src={Lucas} type="video/mp4" />
                <track kind="captions" src="" srcLang="en" label="English" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="project-button home-button-container">
              <a
                href="https://github.com/sonia-huynh/Lucas-Mansion"
                target="_blank"
                rel="noreferrer"
              >
                <button className="home-button project-button">Github</button>
              </a>
              <a
                href="https://lucas-mansion.pushed.nz/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="home-button project-button">
                  Play Game!
                </button>
              </a>
            </div>
          </div>
          <div className="project-box">
            <h2 className="project-title">DreamBeanMemeTeam</h2>
            <div className="project-container">
              <video controls className="project-video">
                <source src={bean} type="video/mp4" />
                <track kind="captions" src="" srcLang="en" label="English" />
                Your browser does not support the video tag.
              </video>
              <div className="text-container">
                <p>
                  This Friday Group Project&apos;s focus was to use an external
                  api to build something, so we created a fun guessing game
                  using the JellyBelly Api where we randomised the names of the
                  jelly beans given to you and you have to click on the correct
                  jelly bean that matches the name.
                </p>

                <br />
                <br />
                <h3>Tech Stack:</h3>
                <p>React, Typescript, CSS and Jelly Belly api</p>
              </div>
            </div>
            <div className="project-button">
              <a
                href="https://github.com/sonia-huynh/DreamBeanMemeTeam"
                target="_blank"
                rel="noreferrer"
              >
                <button className="home-button project-button">Github</button>
              </a>
            </div>
          </div>
        </div>
        <button
          className="nav-button"
          onClick={() => (location.href = './#contact')}
        >
          <img
            src={arrow}
            alt="move to next section"
            className="icon"
            id="project-arrow"
          />
        </button>
      </section>
      <section id="contact">
        <p className="section-text-p1">Get In Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src={email} alt="email" className="icon email-icon" />
            <p>
              <a href="mailto:soniahuynhkl@gmail.com">soniahuynhkl@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img src={linkedin} alt="linkedin" className="icon contact-icon" />
            <p>
              <a href="https://www.linkedin.com/in/sonia-huynh/">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <p>Copyright &#169; 2024 Sonia Huynh All Rights Reserved</p>
      </footer>
      <br />
    </>
  )
}

export default Portfolio
