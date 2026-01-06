import { createContext, useContext, useEffect, useState } from 'react'

const initialState = {
  theme: 'system',
  setTheme: () => null,
  resolvedTheme: 'light',
}

const ThemeProviderContext = createContext(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'rishab-portfolio-theme',
  ...props
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  )
  const [resolvedTheme, setResolvedTheme] = useState(defaultTheme === 'system' 
    ? (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement

    // Use requestAnimationFrame for smooth theme transitions
    requestAnimationFrame(() => {
      root.classList.remove('light', 'dark')

      let actualTheme = theme

      if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
          .matches
          ? 'dark'
          : 'light'
        actualTheme = systemTheme
      }

      root.classList.add(actualTheme)
      setResolvedTheme(actualTheme)
    })

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'system') {
        requestAnimationFrame(() => {
          const systemTheme = mediaQuery.matches ? 'dark' : 'light'
          root.classList.remove('light', 'dark')
          root.classList.add(systemTheme)
          setResolvedTheme(systemTheme)
        })
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  const value = {
    theme,
    setTheme: (newTheme) => {
      localStorage.setItem(storageKey, newTheme)
      setTheme(newTheme)
    },
    resolvedTheme,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
