function ProjectCard({ project, onViewDetails }) {
  return (
    <article className="project-card">
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.imageAlt} />
        ) : (
          <span>{project.title}</span>
        )}
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p className="project-status">
          {project.category} - {project.status}
        </p>

        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <button
          className="project-details-button"
          type="button"
          onClick={(event) => onViewDetails(project, event.currentTarget)}
        >
          View details
        </button>

        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}

          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live Demo &rarr;
            </a>
          )}

          {!project.github && !project.demo && (
            <span className="project-coming-soon">
              {project.category === "Professional"
                ? "Private professional work"
                : "Links coming soon"}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;