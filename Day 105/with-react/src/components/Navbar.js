import React from 'react'
import Footer from './Footer'

const Navbar = (props) => {
  return (
    <div>
      <div className="logo">{props.logoText}</div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
      <Footer />
    </div>
  )
}

export default Navbar
