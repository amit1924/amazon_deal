import React from 'react'
import logo from '../images/logo.png'

const Header = () => {
 
    const today = new Date().toString().slice(0,10)


  return (
    <div>
   <header className='text-container'>
    <div>
        <h1>Deal Finder</h1>
        <p>{today}</p>
    </div>
    <div className='logo-container'>
        <img src={logo} alt='logo' />

    </div>
   </header>
   </div>
  )
}

export default Header
