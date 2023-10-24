import { useState } from 'react'

function useCustomTheme() {
  const [theme, setTheme] = useState<'LIGHT' | 'DARK'>('LIGHT')

  const obtainTheme = () => {
    return theme
  }

  const changeTheme = () => {
    if (theme === 'LIGHT') {
      setTheme('DARK')
    } else {
      setTheme('LIGHT')
    }
  }

  return { obtainTheme, changeTheme }
}

export default useCustomTheme
