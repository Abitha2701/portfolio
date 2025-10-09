import React, { useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#home" className="pill" style={{fontWeight:600}}>AM • Portfolio</a>
        <button className="btn" aria-label="menu" onClick={() => setOpen(v=>!v)} style={{display:'none'}}>
          ☰
        </button>
        <div className="nav-links">
          {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>
      </div>
    </nav>
  )
}
