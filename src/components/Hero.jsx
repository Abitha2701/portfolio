import React, { useEffect, useRef, useState } from 'react'
import { profile } from '../data/content'

function useTyping(text, speed=50, delay=300) {
  const [out, setOut] = useState('')
  useEffect(() => {
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
  return (
    <div className="hero" data-aos="fade-up">
      <div>
        <div className="pill" style={{marginBottom:12}}>👋 Hello</div>
        <h1 className="title">{profile.name}</h1>
        <p className="subtitle">{profile.title}</p>
        <p className="subtitle kbd">{typed || ' '}<span style={{opacity:.6}}>|</span></p>
        <div style={{display:'flex', gap:12, marginTop:16}}>
          <a className="btn" href={`mailto:${profile.email}`}>Email</a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <div style={{display:'grid', placeItems:'center'}}>
        <div className="avatar" aria-hidden />
      </div>
    </div>
  )
}
