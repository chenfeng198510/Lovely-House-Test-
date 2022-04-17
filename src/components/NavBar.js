import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div>
        <nav>
            <div className='logo'> Lovely Home</div>
            <ul className='nav-links'>
                <li><a>Home</a></li>
                <li><a>Product</a></li>
                <li><a>Service</a></li>
                <li><a>Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;