import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
   <ul>
   <li><NavLink to="/home">Home</NavLink></li>
   <li><NavLink to="/about">About</NavLink></li>
   <li><NavLink to="/services">Service</NavLink></li>
   <li><NavLink to="/contactus">Contact</NavLink></li>
   </ul>
    </>
   );
};

export default Navbar;