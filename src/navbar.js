import React, { useState } from 'react'
function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div>
<nav>
    <div className="logo">Lovely House</div>
    <ul className="nav-links" style={{transform: open ? "translateX (0px)" : "translateX(100)"}}> 
        <li><a href="#">Home</a></li>
        <li>Product</li>
        <li>About us</li>
        <li>Contact</li>
        
    </ul>
    <i onClick={() => setOpen(!open)} className="fa-solid fa-house house"></i>
</nav>
        </div>
    );
}

export default Navbar;