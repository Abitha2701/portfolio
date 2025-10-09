import React from 'react'
import { profile } from '../data/content'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer>
      <div style={{width:'min(1100px,92vw)', margin:'0 auto'}}>
        <div>© {year} {profile.name}. Built with React + Vite.</div>
        <div style={{marginTop:8}}>Made with pastel gradients and glassmorphism ✨</div>
      </div>
    </footer>
  )
}
