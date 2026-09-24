import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section className="section" id="about">
      <SectionHeading
        eyebrow="Get to know me"
        title="About Me"
      />

      <div className="about-grid">
        <div className="about-card">
          <h3>My Background</h3>

          <p>
            I'm a full-stack developer and R&D Engineering Team Lead with more
            than five years of experience in enterprise education technology.
          </p>

          <p>
            At Datamobility Corporation, I progressed from Programmer Analyst
            to leading research and development work for new product features
            and integrated system capabilities.
          </p>
        </div>

        <div className="about-card">
          <h3>What I Work On</h3>

          <p>
            I research, design, build, support, and integrate modules within
            the Quick-Campus ERP, CRM, SIS, and LMS ecosystem.
          </p>

          <p>
            My work includes learning-management features, data analytics,
            database design, client-driven enhancements, and locally hosted AI
            capabilities using Ollama and large language models.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;