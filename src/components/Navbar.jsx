import React, { useEffect, useState } from 'react'

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
  const [active, setActive] = useState('#home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sectionIds = links.map(l => l.href.replace('#',''))
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`)
        }
      })
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] })

    sections.forEach(sec => observer.observe(sec))
    return () => observer.disconnect()
  }, [])
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on Escape for better accessibility
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900 && open) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])
  return (
    <nav className={`navbar${open ? ' open' : ''}${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="pill brand" aria-label="Go to home">AM • Portfolio</a>

        <button
          className="btn nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(v => !v)}
        >
          {open ? '✕' : '☰'}
        </button>

        <div
          id="primary-nav"
          className="nav-links"
          role="navigation"
          aria-label="Primary"
          onClick={() => setOpen(false)}
        >
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href ? 'active' : undefined}
              aria-current={active === l.href ? 'page' : undefined}
            >
              {l.label}
            </a>
          ))}

          {/* Prominent CTA like the reference design */}
          <a
            href="/resume.pdf"
            className="btn btn--primary nav-cta"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  )
}
