import React, { useState } from 'react'
function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div>
<nav>
    <div className="logo">Lovely House</div>
    <ul className="nav-links" style={{transform: open ? "translateX (0px)" : "translateX(-500)"}}> 
        <li><a>Home</a></li>
        <li><a>Product</a></li>
        <li><a>About us</a></li>
        <li><a>Contact</a></li>
        
    </ul>
    <i onClick={() => setOpen(!open)} className="fa-solid fa-house house"></i>
</nav>
        </div>
    );
}

export default Navbar;