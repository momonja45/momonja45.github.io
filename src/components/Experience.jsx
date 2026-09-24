import experience from "../data/experience";
import SectionHeading from "./SectionHeading";

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeading
        eyebrow="Professional journey"
        title="Experience"
      />

      <ol className="experience-list">
        {experience.map((job) => (
          <li className="experience-item" key={job.id}>
            <div className="experience-heading">
              <div>
                <h3>{job.role}</h3>
                <p className="experience-company">
                  {job.company}
                </p>
              </div>

              <p className="experience-period">
                {job.period}
              </p>
            </div>

            <p className="experience-summary">
              {job.summary}
            </p>

            <ul className="experience-highlights">
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;