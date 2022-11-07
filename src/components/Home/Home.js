import "./Home.css"
import React from "react"
import { Link } from "react-router-dom"

function Home() {

    


    return (
        <div className="Home">
            <nav className='Navbar'>
                <div>
                    <ul>
                        <li>
                            <Link style={{ color: "white", textDecoration: 'none' }} to='Register'>Register</Link>
                        </li>
                        <li>
                            <Link style={{ color: "white", textDecoration: 'none' }} to='Login'>Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <h1>Home</h1>


        </div>
    )


}
export default Home;