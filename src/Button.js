import React from 'react'

const Button = ({text, handler, disabled}) => {
  return (
    <div className={`button ${disabled ? 'disabled' : ''}`} onClick={handler}>{text}</div>
  )
}

export default Button
