import { motion } from 'framer-motion'
import linkedin from '../../Public/images/linkedin.png'
import github from '../../Public/images/github.png'
import CV from '../../Public/assets/soniahuynhCV.pdf'
import sonia from '../../Public/images/soniahuynh.png'

export default function Profile() {
  function openCV() {
    window.open(CV, '_blank')
  }

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

  return (
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
              <motion.div
                whileHover={{
                  scale: 1.15,
                }}
              >
                <img
                  src={linkedin}
                  alt="Sonia's linkedIn profile"
                  className="icon"
                />
              </motion.div>
            </a>
            <motion.div
              whileHover={{
                scale: 1.15,
              }}
            >
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
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
