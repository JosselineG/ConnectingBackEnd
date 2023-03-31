import React from 'react'
import "./Admin.css"
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className='Admin'>
        <nav className='NavBar'>
    <ul>
        <li>
            <Link style={{ color: "white", textDecoration: 'none' }} to='/'> Home</Link>
        </li>
    </ul>
</nav>
</div>

  )
}

export default Admin