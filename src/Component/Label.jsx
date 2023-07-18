import React from 'react'

const Label = ({label}) => {
  return (
    <>
    <label htmlFor={label}>{label}</label><br/>
    </>
  )
}

export default Label