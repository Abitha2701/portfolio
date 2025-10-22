import React from 'react'
import { profile, skills, projects, certifications} from '../data/content';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'

export default function Contact(){
  return (
    <div className="card" data-aos="fade-up">
      <h2>Contact</h2>
      <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks! This demo form does not send yet.')}} style={{display:'grid', gap:12}}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" required placeholder="Your Name" style={inputStyle} />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" required type="email" placeholder="your@example.com" style={inputStyle} />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required rows={5} placeholder="How can I help you?" style={inputStyle}></textarea>

        <button className="btn btn--primary" type="submit"><FiSend/> Send Message</button>
      </form>
      <div style={{display:'flex', gap:12, marginTop:16}}>
        <a className="btn" href={`mailto:${profile.email}`}><FiMail/> Email</a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin/> LinkedIn</a>
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer"><FiGithub/> GitHub</a>
      </div>
    </div>
  )
}

const inputStyle = {
  padding: '12px 14px', background: 'transparent', color: 'var(--text)', borderRadius: 12, border: '1px solid var(--border)'
}
