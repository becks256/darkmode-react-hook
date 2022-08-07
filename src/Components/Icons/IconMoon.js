import React from "react"
import { IconContainer } from "./IconContainer"

const IconMoon = ({ fill, size, className, ...props }) => {
  return (
    <IconContainer {...props} className={className} size={size}>
      <path
        d="M72.5,66.3c-20.9-0.8-38-17.9-38.8-38.8c-0.2-5.8,0.8-11.3,2.8-16.4c0.8-2.1-1.4-4-3.4-3c-15.4,7.3-26,23.4-25.2,41.8
	c1,22.8,19.5,41.3,42.2,42.2c18.4,0.8,34.5-9.7,41.8-25.2c0.9-2-1-4.2-3-3.4C83.8,65.6,78.3,66.6,72.5,66.3z"
      />
    </IconContainer>
  )
}

export { IconMoon }
