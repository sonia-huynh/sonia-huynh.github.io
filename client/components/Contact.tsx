import email from '../../Public/images/email.png'
import hello from '../../Public/images/hello-world.png'
import linkedin from '../../Public/images/linkedin.png'

export default function Contact() {
  return (
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
              <a href="mailto:soniahuynhkl@gmail.com">soniahuynhkl@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img src={linkedin} alt="linkedin" className="icon contact-icon" />
            <p>
              <a href="https://www.linkedin.com/in/sonia-huynh/">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
