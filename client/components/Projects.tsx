import qr from '../../Public/assets/simple-qr.gif'
import bookBound from '../../Public/assets/BookBoundDemo.mp4'
import bean from '../../Public/assets/dreambeanmemeteam.mp4'
import bubbleNotes from '../../Public/assets/bubblegumNotesDemo.gif'
import nameScrmblr from '../../Public/assets/nameScrmblr.gif'
import Lucas from '../../Public/assets/LucasMansionDemo.mp4'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import React from 'react'

const projectWorks = [
  {
    title: 'NameScrmblr',
    demo: { type: 'gif', source: nameScrmblr },
    demoAlt: 'nameScrmblr demo',
    body: [
      {
        type: 'text',
        content:
          "For me and my friend's birthday we decided our friends should dress as each other, so I created this quick app to randomly assign each person a friend to dress as and send it to them in an email so everything stays anonymous unless the user clicks the reveal assignment button.",
      },

      { type: 'break' },

      {
        type: 'text',
        content:
          'This app is a frontend project built with NextJS and has been deployed on Vercel.',
      },
    ],
    techStack: [
      {
        language: 'React',
        logo: 'https://img.shields.io/badge/React-badge?style=flat&logo=react&color=07405E',
      },
      {
        language: 'Typescript',
        logo: 'https://img.shields.io/badge/Typescript-07405E?&style=flat&logo=typescript',
      },
      {
        language: 'NextJS',
        logo: 'https://img.shields.io/badge/NextJS-07405E?&style=flat&logo=nextdotjs',
      },
      {
        language: 'TailwindCSS',
        logo: 'https://img.shields.io/badge/TailwindCSS-07405E?&style=flat&logo=tailwindcss',
      },
    ],
    githubUrl: 'https://github.com/sonia-huynh/name-scrambler',
    deployedUrl: 'https://name-scrmblr.vercel.app/',
  },
  {
    title: 'Bubblegum Notes - Work in Progress',
    demo: { type: 'gif', source: bubbleNotes },
    demoAlt: 'Bubblegum notes demo',
    body: [
      {
        type: 'text',
        content:
          'This project was built to practice my React states, learn how to use the MongoDB database and to practice implementing Auth0 in my projects.',
      },

      { type: 'break' },
      {
        type: 'text',
        content:
          'This is currently a work in progress, I am currently thinking of moving this to a NextJS app so that I can deploy it on Vercel',
      },
    ],
    techStack: [
      {
        language: 'React',
        logo: 'https://img.shields.io/badge/React-badge?style=flat&logo=react&color=07405E',
      },
      {
        language: 'Typescript',
        logo: 'https://img.shields.io/badge/Typescript-07405E?&style=flat&logo=typescript',
      },
      {
        language: 'HTML',
        logo: 'https://img.shields.io/badge/HTML-07405E?style=flat&logo=html5',
      },
      {
        language: 'CSS',
        logo: 'https://img.shields.io/badge/CSS-07405E?&style=flat&logo=css3',
      },
      {
        language: 'Node.js',
        logo: 'https://img.shields.io/badge/Node.js-07405E?style=flat&logo=node.js',
      },
      {
        language: 'MongoDB',
        logo: 'https://img.shields.io/badge/MongoDB-07405E?&style=flat&logo=mongodb',
      },
    ],
    githubUrl: 'https://github.com/sonia-huynh/bubblegumNotes',
  },
  {
    title: 'Simple QR Code',
    demo: { type: 'gif', source: qr },
    demoAlt: 'Simple QR Code demo',
    body: [
      {
        type: 'text',
        content:
          'To practice my frontend CSS styling I completed the Frontend Mentor challenge: ',
      },
      {
        type: 'link',
        content: 'QR Code Component Challenge',
        url: 'https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H',
      },
      { type: 'break' },
      {
        type: 'text',
        content:
          'I tweaked the challenge a bit by adding a button, creating my own QR code that links to my github page and added some simple animation.',
      },
      { type: 'break' },
      {
        type: 'text',
        content:
          'I then practiced my testing with React Testing Library by writing tests to test the Title exists, the button works and the button click shows the QR code.',
      },
      { type: 'break' },
      {
        type: 'text',
        content:
          'I have also deployed this app on Vercel, click the deployed button to check it out.',
      },
    ],
    techStack: [
      {
        language: 'React',
        logo: 'https://img.shields.io/badge/React-badge?style=flat&logo=react&color=07405E',
      },
      {
        language: 'JavaScript',
        logo: 'https://img.shields.io/badge/JavaScript-07405E?style=flat&logo=javascript',
      },
      {
        language: 'HTML',
        logo: 'https://img.shields.io/badge/HTML-07405E?style=flat&logo=html5',
      },
      {
        language: 'CSS',
        logo: 'https://img.shields.io/badge/CSS-07405E?&style=flat&logo=css3',
      },
      {
        language: 'React Testing Library',
        logo: 'https://img.shields.io/badge/React Testing Library-07405E?&style=flat&logo=testinglibrary',
      },
    ],
    githubUrl: 'https://github.com/sonia-huynh/simple-qr',
    deployedUrl: 'https://sonia-github-qr-code.vercel.app/',
  },

  {
    title: 'BookBound',
    demo: { type: 'video', source: bookBound },
    demoAlt: 'BookBound Demo',
    body: [
      {
        type: 'text',
        content:
          'My first personal project I created is a personal book review and rating app. One of my hobbies is reading and I also love to write down my reviews for books, however, I wanted to have it all saved in a personal journal type way without the social aspect of sharing my reivews to others.',
      },
      {
        type: 'break',
      },
      {
        type: 'text',
        content:
          'This project helped consolidate my learning on using external APIs and how to build a fullstack web app from scratch on my own.',
      },
    ],
    techStack: [
      {
        language: 'Typescript',
        logo: 'https://img.shields.io/badge/TypeScript-07405E?style=flat&logo=typescript',
      },
      {
        language: 'React',
        logo: 'https://img.shields.io/badge/React-badge?style=flat&logo=react&color=07405E',
      },
      {
        language: 'TailwindCSS',
        logo: 'https://img.shields.io/badge/Tailwind%20CSS-07405E?style=flat&logo=tailwindcss',
      },
      {
        language: 'CSS',
        logo: 'https://img.shields.io/badge/CSS-07405E?&style=flat&logo=css3',
      },
      {
        language: 'Node.js',
        logo: 'https://img.shields.io/badge/Node.js-07405E?style=flat&logo=node.js',
      },
      {
        language: 'Express.js',
        logo: 'https://img.shields.io/badge/Express-07405E?style=flat&logo=express',
      },
      {
        language: 'SQLite',
        logo: 'https://img.shields.io/badge/SQLite-07405E?style=flat&logo=sqlite',
      },
      {
        language: 'Knex.js',
        logo: 'https://img.shields.io/badge/knex.js-07405E?style=flat&logo=knexdotjs',
      },
      {
        language: 'GoogleBooksAPI',
        logo: 'https://img.shields.io/badge/GoogleBooksAPI-badge?style=flat&logoColor=%2307405e&color=%2307405e',
      },
    ],
    githubUrl: 'https://github.com/sonia-huynh/BookBound',
  },
  {
    title: "Lucas' Mansion",
    demo: { type: 'video', source: Lucas },
    demoAlt: "Lucas' Mansion demo",
    body: [
      {
        type: 'text',
        content:
          'My bootcamp final showcase group project was a point and click digital escape room.',
      },
      {
        type: 'break',
      },
      {
        type: 'text',
        content:
          'Our goal was to create at least four different games to practice game logic, create multiple clickable items within the room each with their own pop up component and lastly, create at least 3 separate routes to different rooms.',
      },
      {
        type: 'break',
      },
      {
        type: 'text',
        content: 'The game has been deployed and is only supported by desktop.',
      },
    ],
    techStack: [
      {
        language: 'Typescript',
        logo: 'https://img.shields.io/badge/TypeScript-07405E?style=flat&logo=typescript',
      },
      {
        language: 'React',
        logo: 'https://img.shields.io/badge/React-badge?style=flat&logo=react&color=07405E',
      },
      {
        language: 'CSS',
        logo: 'https://img.shields.io/badge/CSS-07405E?&style=flat&logo=css3',
      },
      {
        language: 'Node.js',
        logo: 'https://img.shields.io/badge/Node.js-07405E?style=flat&logo=node.js',
      },
      {
        language: 'Express.js',
        logo: 'https://img.shields.io/badge/Express-07405E?style=flat&logo=express',
      },
      {
        language: 'SQLite',
        logo: 'https://img.shields.io/badge/SQLite-07405E?style=flat&logo=sqlite',
      },
      {
        language: 'Knex.js',
        logo: 'https://img.shields.io/badge/knex.js-07405E?style=flat&logo=knexdotjs',
      },
    ],
    githubUrl: 'https://github.com/sonia-huynh/Lucas-Mansion',
    deployedUrl: 'https://lucas-mansion.pushed.nz/',
  },
  {
    title: 'DreamBeanMemeTeam',
    demo: { type: 'video', source: bean },
    demoAlt: 'DreamBeanMemeTeam demo',
    body: [
      {
        type: 'text',
        content: `This Friday Group Project's focus was to use an external api to build something, so we created a fun guessing game using the JellyBelly Api where we randomised the names of the jelly beans given to you and you have to click on the correct jelly bean that matches the name.`,
      },
      {
        type: 'break',
      },
      {
        type: 'text',
        content:
          'For a bit more of a challenge I added in hard mode which quizzes the player on a selection of 114 jelly beans instead of 10.',
      },
    ],
    techStack: [
      {
        language: 'Typescript',
        logo: 'https://img.shields.io/badge/TypeScript-07405E?style=flat&logo=typescript',
      },
      {
        language: 'React',
        logo: 'https://img.shields.io/badge/React-badge?style=flat&logo=react&color=07405E',
      },
      {
        language: 'CSS',
        logo: 'https://img.shields.io/badge/CSS-07405E?&style=flat&logo=css3',
      },
      {
        language: 'JellyBellyApi',
        logo: 'https://img.shields.io/badge/JellyBellyAPI-badge?style=flat&logoColor=%2307405e&color=%2307405e',
      },
    ],
    githubUrl: 'https://github.com/sonia-huynh/DreamBeanMemeTeam',
  },
]
export default function Projects() {
  const refs = useRef(projectWorks.map(() => React.createRef()))
  const inView = refs.current.map((ref) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useInView(ref, { once: true })
  })

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
        <h1 className="title">Projects</h1>
        <div className="tech-details-container project-details-container">
          {projectWorks.map((project, i) => (
            <motion.div
              key={i}
              className="project-box"
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 0px 8px rgb(100,149,237)',
              }}
              // eslint-disable-next-line no-constant-condition
              variants={i % 2 === 0 ? projectEvenVariants : projectOddVariants}
              initial="hidden"
              animate={inView[i] ? 'visible' : ''}
            >
              <h2 className="project-title" ref={refs.current[i]}>
                {project.title}
              </h2>
              <div className="project-container">
                {project.demo.type === 'gif' ? (
                  <div className="gif-container">
                    <img
                      className="project-gif"
                      src={project.demo.source}
                      alt={project.demoAlt}
                    />
                  </div>
                ) : (
                  <video controls className="project-video">
                    <source src={project.demo.source} type="video/mp4" />
                    <track kind="captions" srcLang="en" label="English" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <div className="text-container">
                  {project.body.map((text, i) => {
                    switch (text.type) {
                      case 'text':
                        return <p key={i}>{text.content}</p>
                      case 'link':
                        return (
                          <a
                            href={text.url}
                            target="_blank"
                            rel="noreferrer"
                            className="other-links"
                            key={i}
                          >
                            {text.content}
                          </a>
                        )
                      case 'break':
                        return <br />
                      default:
                        return null
                    }
                  })}
                  <br />
                  <h3>Tech Stack:</h3>
                  <div className="project-badges-container">
                    {project.techStack.map((tech, i) => (
                      <img
                        src={tech.logo}
                        alt={tech.language}
                        key={i}
                        className="tech-badge"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="project-button home-button-container">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <button className="home-button project-button">Github</button>
                </a>
                {project.deployedUrl && (
                  <a
                    href={project.deployedUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="home-button project-button">
                      Deployed App
                    </button>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
