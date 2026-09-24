import profileImage from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">Hello, I'm</p>

        <h1>
          Mon Vincent Vi&ntilde;as
          <span>.</span>
        </h1>

        <h2>R&D Engineering Team Lead | Full-Stack Developer</h2>

        <p className="hero-description">
          I am an R&D Engineering Team Lead and full-stack developer with more than
          five years of experience building and supporting enterprise education
          technology.
        </p>

        <p className="hero-description">
          I work across research, system design, database development, backend and
          frontend implementation, integrations, technical support, and AI-powered
          product development.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>

          <a
            href="/resume/mon-vincent-vinas-resume.pdf"
            download="Mon-Vincent-Vinas-Resume.pdf"
            className="btn btn-secondary"
          >
            Download Resume
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profileImage} alt="Mon Vincent Vi&ntilde;as" />
      </div>
    </section>
  );
}

export default Hero;