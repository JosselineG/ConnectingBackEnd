import React from 'react'
import "./LoggedIn.css"
import { Link } from "react-router-dom"

const LoggedIn = () => {







  
  return (
    <div className='LoggedIn'>  
    <nav className='NavBar'>
    <div>
        <ul>
            <li>
                <Link style={{ color: "white", textDecoration: 'none' }} to='/'> Home</Link>
            </li>
        </ul>
    </div>
</nav>
<h1>Succesfully LoggedIn</h1></div>
  )
}

export default LoggedIn