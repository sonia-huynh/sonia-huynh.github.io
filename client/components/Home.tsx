import '../../style/main.css'

function Home() {
  return (
    <div>
      <div>
        <img
          id="helloimg"
          className="center"
          src="../../Public/images/hello-world.png"
          alt="waving"
        />
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
      </div>
    </div>
  )
}

export default Home
