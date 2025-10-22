import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle({ theme, setTheme }){
  return (
    <div style={{position:'fixed', right: 18, top: 18, zIndex: 60}}>
      <button
        className="btn btn--secondary btn--icon theme-toggle"
        onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}
        aria-pressed={theme !== 'light'}
        aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
        title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      >
        <FiSun className="sun" />
        <FiMoon className="moon" />
      </button>
    </div>
  )
}
