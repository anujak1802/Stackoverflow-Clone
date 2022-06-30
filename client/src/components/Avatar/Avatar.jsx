import React from 'react'

const Avatar = ({children, textDecoration, padding, borderRadius, py, px, fontSize, color, backgroundColor, textAlign, cursor}) => {
  const style = {
    backgroundColor,
    textDecoration: 'none',
    padding: `${py} ${px}`,
    borderRadius,
    fontSize,
    color: color || `black`,
    cursor: cursor || null,
    textAlign: "center"
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar