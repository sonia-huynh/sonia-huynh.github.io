import arrow from '../../Public/images/arrow.png'
import qr from '../../Public/assets/simple-qr.gif'
import bookBound from '../../Public/assets/BookBoundDemo.mp4'
import bean from '../../Public/assets/dreambeanmemeteam.mp4'
import Lucas from '../../Public/assets/LucasMansionDemo.mp4'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'

export default function Projects() {
  const projectRef1 = useRef(null)
  const projectRef2 = useRef(null)
  const projectRef3 = useRef(null)
  const projectRef4 = useRef(null)

  const isProject1InView = useInView(projectRef1, { once: true })
  const isProject2InView = useInView(projectRef2, { once: true })
  const isProject3InView = useInView(projectRef3, { once: true })
  const isProject4InView = useInView(projectRef4, { once: true })

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

  return (
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
                  I tweaked the challenge a bit by adding a button, creating my
                  own QR code that links to my github page and added some simple
                  animation.
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
                  This Friday Group Project&apos;s focus was to use an external
                  api to build something, so we created a fun guessing game
                  using the JellyBelly Api where we randomised the names of the
                  jelly beans given to you and you have to click on the correct
                  jelly bean that matches the name.
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
  )
}
