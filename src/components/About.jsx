import React from 'react'
import { profile } from '../data/content'

export default function About() {
  return (
    <div className="card" data-aos="fade-up">
      <h2>About Me</h2>
      <p style={{whiteSpace:'pre-line', color:'var(--muted)'}}>{profile.about}</p>
    </div>
  )
}
