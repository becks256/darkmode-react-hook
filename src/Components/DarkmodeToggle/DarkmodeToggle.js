import React from "react"
import { useColorMode, DARK_MODE, LIGHT_MODE } from "../../Hooks/UseColorMode"
import { IconMoon, IconSun } from "../Icons"
import "./DarkmodeToggle.css"

const DarkmodeToggle = ({ size, className, ...props }) => {
  const { colorMode, setColorMode } = useColorMode()

  const clickHandler = () => {
    const currentMode = colorMode
    const newMode = currentMode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE
    setColorMode(newMode)
  }

  const Icon = colorMode === LIGHT_MODE ? IconSun : IconMoon

  return (
    <>
      <Icon
        {...props}
        size={size}
        onClick={clickHandler}
        className={`${
          className ? `${className} ` : ""
        }DarkmodeToggle ${colorMode}-mode`}
      />
    </>
  )
}

export { DarkmodeToggle }
