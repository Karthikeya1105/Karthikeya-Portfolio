import { projects } from '../data/portfolio'

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="grid cols-3">
        {projects.map((project) => (
          <article key={project.title} className="card project-card">
            <h3>{project.title}</h3>
            <p className="muted">{project.about}</p>
            <div className="chip-row">
              {project.tech.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
