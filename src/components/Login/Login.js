import React from "react";
import "./Login.css"
import { Link } from "react-router-dom";


function Login() {


    return (
        <div className="Login">
            <nav className='NavBar'>
                <div>
                    <ul>
                        <li>
                            <Link style={{ color: "white", textDecoration: 'none' }} to='/'> Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <h1>Login</h1>

            <div className="Body">
                <form>

                    <div className="FormBox">
                        <label> Username</label>
                        <input

                            type="text"
                            name="UserName"
                        >
                        </input>

                        <label> Password</label>
                        <input

                            type="text"
                            name="PassWord"
                        >
                        </input>
                    

                    </div>

                    <div>Do not have an account?<Link style={{ color: "white", textDecoration: 'none' }} to='/Register'>Register</Link></div>
                </form>
            </div>
         
        </div>
    )


}
export default Login;