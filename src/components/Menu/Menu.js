import React from 'react'
import Link from 'gatsby-link'

const activeLinkStyle = {
  color: 'white',
};

const Menu = () => {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to="/" exact activeStyle={activeLinkStyle}>Home</Link></li>
            <li><Link to="/about/" activeStyle={activeLinkStyle}>About</Link></li>
            <li><Link to="/contact/" activeStyle={activeLinkStyle}>Contact</Link></li>
          </ul>
        </nav>
      </header>
    )
}

export default Menu
