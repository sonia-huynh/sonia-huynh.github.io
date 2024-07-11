import sonia from '../../Public/images/soniahuynh.png'
import CV from '../../Public/assets/Sonia Huynh CV 2024.pdf'
import linkedin from '../../Public/images/linkedin.png'
import github from '../../Public/images/github.png'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  function openCV() {
    window.open(CV, '_blank')
  }

  return (
    <>
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

export default Home
