import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/nccnitj.png'

import './navbar.css'

const Navbar = () => {
  //setting mobile nav
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  // change navcolor when scrolling
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    }
    else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)
  //close menu on click
  const closeMenu = () => setClick(false)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <nav className='navbar'>
        <a href='/' className='logo'>
          <img src={logo} alt='logo' />
        </a>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
            : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <a href='/' onClick={closeMenu}>HOME</a>
          </li>
          <li className='nav-item'>
            <a href='#about' onClick={closeMenu}>ABOUT</a>
          </li>
          <li className='nav-item'>
            <a href='#events' onClick={closeMenu}>EVENTS</a>
          </li>
          <li className='nav-item'>
            <a href='#annualreports' onClick={closeMenu}>ANNUAL REPORTS</a>
          </li>
          <li className='nav-item'>
            <a href='#enrollement' onClick={closeMenu}>ENROLLEMENTS</a>
          </li>
          <li className='nav-item'>
            <a href='#faqs' onClick={closeMenu}>FAQs</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar