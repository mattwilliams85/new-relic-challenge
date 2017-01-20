import React from 'react'

const Title = ({title, description}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{description}</div>
    </div>
  )
}

export default Title
