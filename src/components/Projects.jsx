import React from 'react'
import { projects as projectsData } from '../data/content'

export default function Projects() {
  const projects = Array.isArray(projectsData) ? projectsData : []

  if (!projects.length) {
    return (
      <section id="projects" className="projects section">
        <div className="container">
          <h2>Projects</h2>
          <p>No projects to display.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((p, idx) => {
            const id = p.id ?? `project-${idx}`
            const title = p.title ?? 'Untitled'
            const desc = p.description ?? ''
            // use public/ path like /images/projects/name.png OR a placeholder
            const image = p.image ?? '/images/projects/project-placeholder.png'
            const tech = Array.isArray(p.stack) ? p.stack : Array.isArray(p.tech) ? p.tech : []
            const live = p.live ?? p.demo ?? null
            const repo = p.repo ?? null

            return (
              <article key={id} className="project-card card">
                <div className="project-image">
                  <img src={image} alt={title} onError={(e)=>{ e.currentTarget.src = '/images/projects/project-placeholder.png' }} />
                </div>

                <div className="project-body">
                  <h3 className="project-title">{title}</h3>
                  <p className="project-desc">{desc}</p>

                  {tech.length > 0 && (
                    <div className="project-tech">
                      {tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                    </div>
                  )}

                  <div className="project-links">
                    {live && <a className="btn" href={live} target="_blank" rel="noreferrer">View Project</a>}
                    {repo && <a className="btn" href={repo} target="_blank" rel="noreferrer">GitHub</a>}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
