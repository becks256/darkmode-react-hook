# react-darkmode-hook

react-darkmode-hook is a react hook for function components that manages setting the color-mode for your app as well as utilizes state to enable a toggle or other control to turn dark mode on or off.  


## Installation
---
`npm i react-darkmode-hook`


## Usage
---
### Set initial mode based on system theme

#### `App.js`
``` javascript
import React, { useEffect } from "react"
import { useColorMode } from "react-darkmode-hook"

const App = () => {
  const { colorMode, setColorMode } = useColorMode()

  useEffect(() => {
    setColorMode(colorMode)
  })
}

```

### How to enable visitors to override the system default with a control element (Toggle, Checkbox, etc.)

#### `DarkmodeToggle.js`
``` javascript
import React from "react"
import { useColorMode, LIGHT_MODE, DARK_MODE } from "react-darkmode-hook"

const DarkmodeToggle = () => {
  const { colorMode, setColorMode } = useColorMode()

  const clickHandler = (e) => {
    const currentMode = colorMode
    const newMode = currentMode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE
  }

  return (
    <MyControlComponent 
      onClick={clickHandler}
      defaultChecked={colorMode === "dark"}
    />
  )
}

```

### How to setup your css file

#### `App.css`
``` css
:root[color-mode="light"] {
  --system-background: #FFF; 
  /* ...custom properties with light-mode specific values */
}

:root[color-mode="dark"] {
  --system-background: #000;
  /* ...custom properties with dark-mode specific values*/
}

```