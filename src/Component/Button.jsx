import React from 'react'
import './custom.css'
const Button = ({type,value,onClick,classname}) => {
  return (
    <>
    <button className={classname} onClick={onClick} type={type}>{value}</button>
    </>
  )
}

export default Button