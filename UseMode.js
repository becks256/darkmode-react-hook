import { useState } from 'react'

const useMode () => {
  const DARK_MODE = 'dark'
  const LIGHT_MODE = 'light'

  const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? DARK_MODE
    : LIGHT_MODE
  const savedColorModePreference = localStorage?.getItem(
    'color-mode-preference'
  )

  const getColorMode = () =>
    savedColorModePreference || prefersColorScheme || LIGHT_MODE

  const [colorMode, setColorMode] = useState(getColorMode())

  const applyColorMode = mode => {
    const html = document.documentElement
    html.getAttribute('color-mode') !== mode &&
      html.setAttribute('color-mode', mode)
  }

  const saveColorMode = mode => {
    ;(!savedColorModePreference || savedColorModePreference !== mode) &&
      localStorage.setItem('color-mode-preference', mode)
    applyColorMode(mode)
    setColorMode(mode)
  }

  return {
    setColorMode: saveColorMode,
    colorMode,
  }
}

export { useMode }
