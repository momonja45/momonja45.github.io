import skillCategories from "../data/skills";
import SectionHeading from "./SectionHeading";

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills & Technologies"
      />

      <div className="skill-categories">
        {skillCategories.map((category) => (
          <article className="skill-category" key={category.id}>
            <h3>{category.title}</h3>

            <ul className="skill-list">
              {category.skills.map((skill) => (
                <li className="skill" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;