import React from 'react'
import { profile } from '../data/content'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Contact(){
  return (
    <div className="card" data-aos="fade-up">
      <h2>Contact</h2>
      <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks! This demo form does not send yet.')}} style={{display:'grid', gap:12}}>
        <input required placeholder="Your Name" style={inputStyle} />
        <input required type="email" placeholder="Your Email" style={inputStyle} />
        <textarea required rows={5} placeholder="Message" style={inputStyle}></textarea>
        <button className="btn" type="submit">Send Message</button>
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
  padding: '12px 14px', background: 'rgba(255,255,255,.06)', color: 'var(--text)', borderRadius: 12, border: '1px solid var(--border)'
}
