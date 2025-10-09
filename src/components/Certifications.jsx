import React from 'react'
import { certifications } from '../data/content'

export default function Certifications(){
  return (
    <div data-aos="fade-up">
      <h2>Certifications & Achievements</h2>
      <div className="grid cols-3">
        {certifications.map((c, i) => (
          <a key={i} href={c.link} className="card" style={{textDecoration:'none', color:'inherit'}}>
            <h3>{c.title}</h3>
            <p className="kbd">Hover to view</p>
          </a>
        ))}
      </div>
    </div>
  )
}
