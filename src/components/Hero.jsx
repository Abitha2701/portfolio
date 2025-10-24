import React, { useEffect, useRef, useState } from 'react'
import { profile } from '../data/content'

function useTyping(text, speed=50, delay=300) {
  const [out, setOut] = useState('')
  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setOut(text)
      return
    }
    let i = 0
    const t = setTimeout(() => {
      const id = setInterval(() => {
        setOut(text.slice(0, i+1))
        i++
        if (i >= text.length) clearInterval(id)
      }, speed)
    }, delay)
    return () => clearTimeout(t)
  }, [text, speed, delay])
  return out
}

export default function Hero() {
  const typed = useTyping(profile.intro, 20, 400)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const heroStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column-reverse' : 'row',
    gap: '2rem',
    alignItems: 'center',
    textAlign: isMobile ? 'center' : 'left',
  }

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: isMobile ? 'center' : 'flex-start',
  }

  const buttonsContainerStyle = {
    display:'flex', 
    gap:12, 
    marginTop:16,
    flexWrap: 'wrap',
    justifyContent: isMobile ? 'center' : 'flex-start',
  }

  const socialButtonsContainerStyle = {
    display:'flex', 
    gap:12, 
    marginTop:12,
    flexWrap: 'wrap',
    justifyContent: isMobile ? 'center' : 'flex-start',
  }

  return (
    <div className="hero" data-aos="fade-up" style={heroStyle}>
      <div style={contentStyle}>
        <div className="pill" style={{marginBottom:12}}>👋 Hello</div>
        <h1 className="title">{profile.name}</h1>
        <p className="subtitle">{profile.title}</p>
        <p className="subtitle kbd">{typed || ' '}<span style={{opacity:.6}}>|</span></p>
        <div style={buttonsContainerStyle}>
          <a className="btn btn--primary" href="#projects">View Projects</a>
          <a className="btn btn--secondary" href={profile.resume} download>Download Resume</a>
        </div>
        <div style={socialButtonsContainerStyle}>
          <a className="btn" href={`mailto:${profile.email}`}>Email</a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <div style={{display:'grid', placeItems:'center'}}>
        <div className="avatar" aria-hidden >
          <img src={profile.image}  height={200} width={200} style={{borderRadius: '50%', objectFit: 'cover', objectPosition: 'center', display: 'block', margin: '0 auto'}}/>
        </div>
      </div>
      </div>
  )
}