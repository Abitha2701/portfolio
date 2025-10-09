import React from 'react'

export default function ThemeToggle({ theme, setTheme }){
  return (
    <div style={{position:'fixed', right: 18, top: 18, zIndex: 60}}>
      <button className="btn" onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </div>
  )
}
