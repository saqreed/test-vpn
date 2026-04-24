import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

function getSystemPrefersDark() {
  return typeof window !== 'undefined'
    && typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? savedTheme === 'dark' : getSystemPrefersDark()
  })

  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    if (isDark) {
      root.classList.add('dark')
      body.style.background = '#0f172a'
      body.style.color = '#f1f5f9'
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      body.style.background = '#ffffff'
      body.style.color = '#0f172a'
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((value) => !value)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
