import { useCallback, useRef, useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import ProjectModal from "./ProjectModal";

const projectCategories = [
  "All",
  "Professional",
  "Learning",
];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const previousFocusRef = useRef(null);

  function openProject(project, button) {
    previousFocusRef.current = button;
    setSelectedProject(project);
  }

  const closeProject = useCallback(() => {
    setSelectedProject(null);

    requestAnimationFrame(() => {
      previousFocusRef.current?.focus();
    });
  }, []);

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" ||
      project.category === selectedCategory;

    const searchableText = [
      project.title,
      project.category,
      project.status,
      project.description,
      ...project.technologies,
      ...project.highlights,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchableText.includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section" id="projects">
      <SectionHeading eyebrow="Selected work" title="Projects" />

      <div className="project-search">
        <label htmlFor="project-search">Search projects</label>

        <div className="project-search-controls">
          <input
            id="project-search"
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by name or technology"
          />

          {searchTerm && (
            <button type="button" onClick={() => setSearchTerm("")}>
              Clear
            </button>
          )}
        </div>
      </div>

      <div
        className="project-filters"
        aria-label="Filter projects"
      >
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={
              selectedCategory === category
                ? "filter-active"
                : ""
            }
            aria-pressed={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={openProject}
            />
          ))
        ) : (
          <p className="no-projects">No projects match your filters.</p>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeProject}
        />
      )}
    </section>
  );
}

export default Projects;