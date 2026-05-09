import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ darkMode, onToggle }) {
  return (
    <button
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className="icon-button"
      type="button"
      onClick={onToggle}
    >
      {darkMode ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  )
}
