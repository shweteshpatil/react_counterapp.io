
import React from 'react'
import{NavLink} from "react-router-dom"

const Gym = () => {
  return (
    <>
    <ul>
    <li><NavLink to="/">Gym</NavLink></li>
    <li><NavLink to="/abs">Abs</NavLink></li>
    <li><NavLink to="/tricep">Tricep</NavLink></li>
    <li><NavLink to="/shoulder">Shoulder</NavLink></li>
   

    </ul>
    
    
    </>
  )
}

export default Gym;