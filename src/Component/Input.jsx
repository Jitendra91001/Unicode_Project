import React from 'react'
import './custom.css'
const Input = ({type,name, value,onChange,placeholder}) => {
  return (
    <>
    <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} className='input'/>
    </>
  )
}

export default Input