import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'

import about from '../../Public/images/about.png'
import arrow from '../../Public/images/arrow.png'

export default function About() {
  const aboutRef = useRef(null)
  const isAboutInView = useInView(aboutRef, { once: true })

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

  return (
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
            I am an enthusiastic and compassionate full-stack developer with an
            interest in creating projects that add entertainment or improve our
            day-to-day lives.
          </p>
          <br />
          <p>
            I hold a Bachelor of Commerce majoring in Economics and Management,
            conjoint with a Bachelor of Science majoring in Physiology. After my
            degree, I worked in clinical trials because I value improving the
            lives of others.
          </p>
          <br />
          <p>
            However, I decided to switch careers driven by my desire to acquire
            technical skills for personal and career growth and I believe the
            tech industry provides a unique opportunity to continue making a
            positive impact on people&apos;s lives.
          </p>
          <br />
          <p>
            I completed an NZQA Level 6 Full-Stack Applied Software Development
            course at DevAcademy, where I honed my skills and worked on various
            projects. I enjoy the collaborative and problem-solving aspects of
            development and am always open to learning new concepts.
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
  )
}
