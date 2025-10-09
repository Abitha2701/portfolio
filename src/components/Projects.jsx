import React from 'react'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <div data-aos="fade-up">
      <h2>Projects</h2>
      <div className="grid cols-3">
        {projects.map(p => (
          <article key={p.title} className="card project-card" style={{display:'flex', flexDirection:'column'}}>
            <img src={p.image} alt={`${p.title} screenshot placeholder`} />
            <h3 style={{marginTop:12}}>{p.title}</h3>
            <p style={{color:'var(--muted)'}}>{p.description}</p>
            <div className="stack">{p.stack.join(' • ')}</div>
            <div style={{marginTop:'auto', display:'flex', gap:10}}>
              <a className="btn" href={p.demo} target="_blank" rel="noreferrer">View Project</a>
              <a className="btn" href={p.repo} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
