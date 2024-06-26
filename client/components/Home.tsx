import waving from '../../Public/images/hello-world.png'
import browser from '../../Public/images/widebrowser.png'

function Home() {
  return (
    <>
      <h1 id="intro1">Hello! </h1>
      <h1 id="intro2">I&apos;m Sonia </h1>
      <div className="homeBox">
        <img src={browser} alt="background" id="browser" />
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
            <p className="rightIcons">📧 soniahuynhkl@gmail.com</p>
            <p className="rightIcons">
              📝
              <a href="https://drive.google.com/file/d/1L8O4_ZO00-q_MCAcbTtgQx1WmHaDHp-k/view">
                Sonia's CV
              </a>
            </p>
            <p className="icons rightIcons">
              <img
                src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
                alt="github icon"
                style={{ height: '30px' }}
              />
              <a
                href="https://github.com/sonia-huynh"
                style={{ padding: '5px' }}
              >
                Sonia's Github
              </a>
            </p>
            <p className="icons rightIcons">
              <img
                src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                alt="linkedin icon"
                style={{ maxHeight: '30px' }}
              />
              <a
                href="https://www.linkedin.com/in/sonia-huynh/"
                style={{ padding: '5px' }}
              >
                Sonia's LinkedIn
              </a>
            </p>
          </div>
        </div>

        <div className="icons">
          <img id="helloimg" className="" src={waving} alt="waving" />
        </div>
      </div>
    </>
  )
}

export default Home
