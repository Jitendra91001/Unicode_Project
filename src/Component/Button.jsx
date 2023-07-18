import React from 'react'
import './custom.css'
const Button = ({type,value,onClick}) => {
  return (
    <>
    <button className='button' onClick={onClick} type={type}>{value}</button>
    </>
  )
}

export default Button