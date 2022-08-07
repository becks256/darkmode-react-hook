import React from "react"

const IconContainer = ({ size = "small", children, className='', ...props }) => {
  const classes = [`icon-${size}`]
  className && classes.push(className)
  return (
    <div {...props} className={classes.join(' ')}>
      <svg x="0px" y="0px" viewBox="0 0 100 100">
        {children}
      </svg>
    </div>
  )
}

export { IconContainer }
