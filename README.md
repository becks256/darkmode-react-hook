# react-darkmode-hook

react-darkmode-hook is a react hook for function components that assists with light and dark mode support into your react application. The hook enables both the initial setting of the color-mode, as well as exposes state to manage a control elements display state for toggling dark mode on / off.

react-darkmode-hook works by applying a `color-mode` attribute to the document (`<html>`) element. The initial value of the `color-mode` attribute will be based on what is returned from `prefers-color-scheme`. If the browser doesn't support `prefers-color-scheme`, the initial value will default to light mode.

## Installation

---

`npm i react-darkmode-hook`

## Usage

---

### Set initial mode based on system theme

#### `App.js`

```javascript
import React, { useEffect } from "react"
import { useColorMode } from "react-darkmode-hook"

const App = () => {
  const { colorMode, setColorMode } = useColorMode()

  useEffect(() => {
    setColorMode()
  })

  // ...
}
```

### Use the built-in `DarkmodeToggle` component to enable mode control

#### `App.js`

```javascript 

import { DarkmodeToggle } from "react-darkmode-hook"

const App = () => {
  return (
    <DarkmodeToggle />
  )
}

```

### OR create your own using the hook

#### `DarkmodeToggle.js`

```javascript
import React from "react"
import { useColorMode, LIGHT_MODE, DARK_MODE } from "react-darkmode-hook"

const DarkmodeToggle = () => {
  const { colorMode, setColorMode } = useColorMode()

  const clickHandler = (e) => {
    const currentMode = colorMode
    const newMode = currentMode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE
    setColorMode(newMode)
  }

  return (
    <label htmlFor="mode-toggle">
      <input
        id="mode-toggle"
        type="checkbox"
        onClick={clickHandler}
        defaultChecked={colorMode === DARK_MODE}
      />
      {`Dark Mode ${colorMode === DARK_MODE ? "ON" : "OFF"}`}
    </label>
  )
}

export { DarkmodeToggle }
```

### How to setup your css file

#### `App.css`

```css
:root {
  --body-padding: 1rem;
  /* mode-agnostic custom properties" */
}

:root[color-mode="light"] {
  --system-background: #fff;
  /* ...custom properties with light-mode specific values */
}

:root[color-mode="dark"] {
  --system-background: #000;
  /* ...custom properties with dark-mode specific values*/
}
```
