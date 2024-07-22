import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import arrow from '../../Public/images/arrow.png'
import check from '../../Public/images/checkmark.png'

export default function TechStack() {
  const techRef = useRef(null)
  const isTechInView = useInView(techRef, { once: true })

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

  return (
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
          <img src={arrow} alt="move to next section" className="arrow icon" />
        </button>
      </div>
    </section>
  )
}
