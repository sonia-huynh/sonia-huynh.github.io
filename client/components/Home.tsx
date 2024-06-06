import waving from '../../Public/images/hello-world.png'

function Home() {
  return (
    <div>
      <div>
        <img id="helloimg" className="center" src={waving} alt="waving" />
      </div>
      <div className="homediv">
        <p>Hello there!</p>
        <p>
          My name is Sonia and I am an enthusiastic and compassionate full-stack
          developer with an interest in creating projects that add entertainment
          or improve our day-to-day lives. Take a look at the projects I&apos;ve
          worked on and what I am currently working on in My Projects tab.
          <p>
            I enjoy the collaborative and problem solving aspect of development
            and am always open to learning new concepts.
          </p>
        </p>
        <p>
          Outside of coding, I have an interest in reading, crocheting and
          playing card/board games with my friends and family.
        </p>
        <div className="contact">
          <h2 className="underline">Contact me: </h2>
          <p>
            <strong>Email: </strong> soniahuynhkl@gmail.com
          </p>
          <p>
            <strong>CV: </strong>
            <a href="https://drive.google.com/file/d/1L8O4_ZO00-q_MCAcbTtgQx1WmHaDHp-k/view">
              Sonia's CV
            </a>
          </p>
          <p>
            <strong>Github: </strong>
            <a href="https://github.com/sonia-huynh">Sonia's Github</a>
          </p>
          <p>
            <strong>LinkedIn: </strong>
            <a href="https://www.linkedin.com/in/sonia-huynh/">
              Sonia's LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
