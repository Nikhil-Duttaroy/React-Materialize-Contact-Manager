import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
      <nav className='nav-wrapper'>
        <div className='container'>
          <a href='/' className='brand-logo center'>
            Contact Manager
          </a>
        </div>
      </nav>
    );
    
}

export default Header
