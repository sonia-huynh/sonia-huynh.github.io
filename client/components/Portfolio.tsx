import sonia from '../../Public/images/soniahuynh.png'
import CV from '../../Public/assets/Sonia Huynh CV 2024.pdf'
import linkedin from '../../Public/images/linkedin.png'
import github from '../../Public/images/github.png'
import about from '../../Public/images/about.png'
import arrow from '../../Public/images/arrow.png'
import check from '../../Public/images/checkmark.png'
import email from '../../Public/images/email.png'
import qr from '../../Public/assets/simple-qr.gif'
import bookBound from '../../Public/assets/BookBoundDemo.mp4'
import bean from '../../Public/assets/dreambeanmemeteam.mp4'
import Lucas from '../../Public/assets/LucasMansionDemo.mp4'
import hello from '../../Public/images/hello-world.png'

import { useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'

function Portfolio() {
  const [toggle, setToggle] = useState(false)
  const [hamburgerIcon, setHamburgerIcon] = useState(true)

  // motion animation
  const aboutRef = useRef(null)
  const techRef = useRef(null)
  const projectRef1 = useRef(null)
  const projectRef2 = useRef(null)
  const projectRef3 = useRef(null)
  const projectRef4 = useRef(null)
  const isAboutInView = useInView(aboutRef, { once: true })
  const isTechInView = useInView(techRef, { once: true })
  const isProject1InView = useInView(projectRef1, { once: true })
  const isProject2InView = useInView(projectRef2, { once: true })
  const isProject3InView = useInView(projectRef3, { once: true })
  const isProject4InView = useInView(projectRef4, { once: true })

  function toggleMenu() {
    setToggle((prevState) => !prevState)
    setHamburgerIcon((prevState) => !prevState)
  }
  function openCV() {
    window.open(CV, '_blank')
  }

  // Framer Motion Animation
  const profileVariants = {
    hidden: {
      y: -200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,

      transition: {
        delay: 0.1,
        type: 'spring',
        stiffness: 60,
      },
    },
  }

  const aboutContainerVariants = {
    hidden: {
      x: 250,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.75,
      },
    },
  }

  const techVariants = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        type: 'spring',
        stiffness: 80,
        easeIn: 'easeIn',
        duration: 0.5,
      },
    },
  }

  const projectOddVariants = {
    hidden: {
      x: 200,
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.75,
      },
    },
  }

  const projectEvenVariants = {
    hidden: {
      x: -200,
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.75,
      },
    },
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
      <section id="profile">
        <motion.div
          className="section-container"
          variants={profileVariants}
          initial="hidden"
          animate="visible"
        >
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
                onClick={() => (location.href = '/#contact')}
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
        </motion.div>
      </section>
      <section id="about">
        <p className="section-text-p1">A Bit</p>
        <h1 className="title">About me</h1>
        <span ref={aboutRef}></span>
        <motion.div
          className="section-container"
          variants={aboutContainerVariants}
          initial="hidden"
          animate={isAboutInView ? 'visible' : 'hidden'}
        >
          <div className="about-pic-container">
            <img src={about} alt="about me coding" className="about-pic" />
          </div>
          <div className="text-container">
            <p>
              I am an enthusiastic and compassionate full-stack developer with
              an interest in creating projects that add entertainment or improve
              our day-to-day lives.
            </p>
            <br />
            <p>
              I hold a Bachelor of Commerce majoring in Economics and
              Management, conjoint with a Bachelor of Science majoring in
              Physiology. After my degree, I worked in clinical trials because I
              value improving the lives of others.
            </p>
            <br />
            <p>
              However, I decided to switch careers driven by my desire to
              acquire technical skills for personal and career growth and I
              believe the tech industry provides a unique opportunity to
              continue making a positive impact on people&apos;s lives.
            </p>
            <br />
            <p>
              I completed an NZQA Level 6 Full-Stack Applied Software
              Development course at DevAcademy, where I honed my skills and
              worked on various projects. I enjoy the collaborative and
              problem-solving aspects of development and am always open to
              learning new concepts.
            </p>
            <br />
            <p>
              Outside of coding, I have an interest in reading, crocheting and
              playing card/board games with my friends and family.
            </p>
          </div>
        </motion.div>
        <button
          className="nav-button"
          onClick={() => (location.href = './#tech')}
        >
          <img src={arrow} alt="move to next section" className="arrow icon" />
        </button>
      </section>
      <section id="tech">
        <div className="section-container">
          <p className="section-text-p1">Explore My</p>
          <h1 className="title">Tech Stack</h1>
          <span ref={techRef}></span>
          <motion.div
            className="tech-details-container"
            variants={techVariants}
            initial="hidden"
            animate={isTechInView ? 'visible' : 'hidden'}
          >
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
          </motion.div>
          <button
            className="nav-button"
            onClick={() => (location.href = './#projects')}
          >
            <img
              src={arrow}
              alt="move to next section"
              className="arrow icon"
            />
          </button>
        </div>
      </section>
      <section id="projects">
        <div className="section-container">
          <p className="section-text-p1">Browse My Recent</p>
          <h1 className="title" ref={projectRef1}>
            Projects
          </h1>
          <div className="tech-details-container project-details-container">
            <motion.div
              className="project-box"
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 8px rgb(100,149,237)',
              }}
              variants={projectOddVariants}
              initial="hidden"
              animate={isProject1InView ? 'visible' : ''}
            >
              <h2 className="project-title">Simple QR Code</h2>
              <div className="project-container">
                <div className="gif-container">
                  <img
                    className="project-gif"
                    src={qr}
                    alt="sonia's qr code demo"
                  />
                </div>
                <div className="text-container">
                  <p>
                    To practice my frontend CSS styling I completed the{' '}
                    <a
                      href="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H"
                      target="_blank"
                      rel="noreferrer"
                      className="other-links"
                    >
                      QR Code Component Challenge{' '}
                    </a>
                    from Frontend Mentor.
                  </p>
                  <br />
                  <p>
                    I tweaked the challenge a bit by adding a button, creating
                    my own QR code that links to my github page and added some
                    simple animation.
                  </p>
                  <br />
                  <p>
                    I then practiced my testing with React Testing Library by
                    writing tests to test the Title exists, the button works and
                    the button click shows the QR code.
                  </p>
                  <br />
                  <p>
                    I have also deployed this app on Vercel, click the deployed
                    button to check it out.
                  </p>
                  <br />
                  <h3>Tech Stack:</h3>
                  <div className="project-badges-container">
                    <img
                      src="https://img.shields.io/badge/React-badge?style=flat&logo=react&color=07405E"
                      alt="React"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/JavaScript-07405E?style=flat&logo=javascript"
                      alt="JavaScript"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/HTML-07405E?style=flat&logo=html5"
                      alt="HTML"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/CSS-07405E?&style=flat&logo=css3"
                      alt="CSS"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/React Testing Library-07405E?&style=flat&logo=testinglibrary"
                      alt="React Testing Library"
                      className="tech-badge"
                    />
                  </div>
                </div>
              </div>
              <div className="project-button home-button-container">
                <a
                  href="https://github.com/sonia-huynh/simple-qr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="home-button project-button">Github</button>
                </a>
                <a
                  href="https://sonia-github-qr-code.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="home-button project-button">
                    Deployed App
                  </button>
                </a>
              </div>
            </motion.div>
            <motion.div
              className="project-box"
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 8px rgb(210,105,30)',
              }}
              variants={projectEvenVariants}
              initial="hidden"
              animate={isProject2InView ? 'visible' : ''}
            >
              <h2 className="project-title" ref={projectRef2}>
                BookBound
              </h2>
              <div className="project-container">
                <video controls className="project-video">
                  <source src={bookBound} type="video/mp4" />
                  <track kind="captions" src="" srcLang="en" label="English" />
                  Your browser does not support the video tag.
                </video>
                <div className="text-container">
                  <p>
                    My first personal project I created is a personal book
                    review and rating app. One of my hobbies is reading and I
                    also love to write down my reviews for books, however, I
                    wanted to have it all saved in a personal journal type way
                    without the social aspect of sharing my reivews to others.
                  </p>
                  <br />
                  <p>
                    This project helped consolidate my learning on using
                    external APIs and how to build a fullstack web app from
                    scratch.
                  </p>
                  <br />
                  <br />
                  <h3>Tech Stack:</h3>
                  <div className="project-badges-container">
                    <img
                      src="https://img.shields.io/badge/TypeScript-07405E?style=flat&logo=typescript"
                      alt="Typescript"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/React-badge?style=flat&logo=react&color=07405E"
                      alt="React"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/Tailwind%20CSS-07405E?style=flat&logo=tailwindcss"
                      alt="TailwindCSS"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/CSS-07405E?&style=flat&logo=css3"
                      alt="CSS"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/Node.js-07405E?style=flat&logo=node.js"
                      alt="Node.js"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/Express-07405E?style=flat&logo=express"
                      alt="Express.js"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/SQLite-07405E?style=flat&logo=sqlite"
                      alt="SQLite"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/knex.js-07405E?style=flat&logo=knexdotjs"
                      alt="Knex.js"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/GoogleBooksAPI-badge?style=flat&logoColor=%2307405e&color=%2307405e"
                      alt="Knex.js"
                      className="tech-badge"
                    />
                  </div>
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
            </motion.div>
            <motion.div
              className="project-box"
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 8px 	rgb(139,0,0)',
              }}
              variants={projectOddVariants}
              initial="hidden"
              animate={isProject3InView ? 'visible' : ''}
            >
              <h2 className="project-title" ref={projectRef3}>
                Lucas&apos; Mansion
              </h2>
              <div className="project-container">
                <div className="text-container">
                  <p>
                    My bootcamp final showcase group project was a point and
                    click digital escape room.
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

                  <div className="project-badges-container">
                    <img
                      src="https://img.shields.io/badge/TypeScript-07405E?style=flat&logo=typescript"
                      alt="Typescript"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/React-badge?style=flat&logo=react&color=07405E"
                      alt="React"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/CSS-07405E?&style=flat&logo=css3"
                      alt="CSS"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/Node.js-07405E?style=flat&logo=node.js"
                      alt="Node.js"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/Express-07405E?style=flat&logo=express"
                      alt="Express.js"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/SQLite-07405E?style=flat&logo=sqlite"
                      alt="SQLite"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/knex.js-07405E?style=flat&logo=knexdotjs"
                      alt="Knex.js"
                      className="tech-badge"
                    />
                  </div>
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
            </motion.div>
            <motion.div
              className="project-box"
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 8px rgb(127,255,212)',
              }}
              variants={projectEvenVariants}
              initial="hidden"
              animate={isProject4InView ? 'visible' : ''}
            >
              <h2 className="project-title" ref={projectRef4}>
                DreamBeanMemeTeam
              </h2>
              <div className="project-container">
                <video controls className="project-video">
                  <source src={bean} type="video/mp4" />
                  <track kind="captions" src="" srcLang="en" label="English" />
                  Your browser does not support the video tag.
                </video>
                <div className="text-container">
                  <p>
                    This Friday Group Project&apos;s focus was to use an
                    external api to build something, so we created a fun
                    guessing game using the JellyBelly Api where we randomised
                    the names of the jelly beans given to you and you have to
                    click on the correct jelly bean that matches the name.
                  </p>
                  <br />
                  <p>
                    For a bit more of a challenge I added in hard mode which
                    quizzes the player on a selection of 114 jelly beans instead
                    of 10.
                  </p>
                  <br />
                  <h3>Tech Stack:</h3>
                  <div className="project-badges-container">
                    <img
                      src="https://img.shields.io/badge/TypeScript-07405E?style=flat&logo=typescript"
                      alt="Typescript"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/React-badge?style=flat&logo=react&color=07405E"
                      alt="React"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/CSS-07405E?&style=flat&logo=css3"
                      alt="CSS"
                      className="tech-badge"
                    />
                    <img
                      src="https://img.shields.io/badge/JellyBellyAPI-badge?style=flat&logoColor=%2307405e&color=%2307405e"
                      alt="jelly belly api"
                      className="tech-badge"
                    />
                  </div>
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
            </motion.div>
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
        </div>
      </section>
      <section id="contact">
        <div className="section-container">
          <div id="contact-container" className="helloimg-container">
            <img src={hello} alt="hello" className="helloimg" />
          </div>
          <p className="section-text-p1">Get In Touch</p>
          <h1 className="title">Contact Me</h1>
          <div className="contact-info-upper-container">
            <div className="contact-info-container">
              <img src={email} alt="email" className="icon email-icon" />
              <p>
                <a href="mailto:soniahuynhkl@gmail.com">
                  soniahuynhkl@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-info-container">
              <img
                src={linkedin}
                alt="linkedin"
                className="icon contact-icon"
              />
              <p>
                <a href="https://www.linkedin.com/in/sonia-huynh/">LinkedIn</a>
              </p>
            </div>
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
