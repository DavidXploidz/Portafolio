import React from 'react'
import '../styles/Spinner.css'

const Spinner = () => {
  return (
    <div className="sk-chase flex mx-auto my-5">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
    </div>
  )
}

export default Spinner