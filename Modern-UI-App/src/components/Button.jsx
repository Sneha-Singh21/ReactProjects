import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-3 px-5 bg-blue-gradient font-poppins font-medium 
    text-[18px] text-primary outline-none rounded-[10px] ${styles}`}>
      Get Started
    </button>
  )
} 

export default Button