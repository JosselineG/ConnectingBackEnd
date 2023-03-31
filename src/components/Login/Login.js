import React, { useState } from "react";
import "./Login.css"
import { Link } from "react-router-dom";
import logo from "../assets/SampLogo4.png"
import axios from "axios";

function Login() {

    const [userLoginForm, setUserLoginForm] = useState({ Email: "", Password: "" })


    /*handleChange runs on every keystroke to update the React state, 
    the displayed value will update as the user types.*/
    const handleChange = (e) => {
        e.preventDefault();
        setUserLoginForm({ ...userLoginForm, [e.target.name]: e.target.value })

    }

    const handleSubmit = (e) => {

        e.preventDefault();
/* 
        

        if(Email === userEmail){

        }
 */

        console.log(userLoginForm)
    }


    return (
        <div >
            <nav className='NavBar'>
                <div>
                    <ul>
                        <li>
                            <Link style={{ color: "white", textDecoration: 'none' }} to='/'> Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>


            <div className="Login">

                <div className="body">

                        <form className="formB" onSubmit={handleSubmit}>


                            <label> Email</label>
                            <input

                                type="text"
                                name="Email"
                                onChange={handleChange}
                                value={userLoginForm.Email}

                            >
                            </input>

                            <label> Password</label>
                            <input

                                type="Password"
                                name="Password"
                                required
                                onChange={handleChange}
                                value={userLoginForm.Password}
                            >
                            </input>
                            
                            <button type="Submit">
                                Submit
                            </button>
                           
                            <div>Don't have an account?<Link style={{ color: "blue", textDecoration: 'none' }} to='/Register'> Sign Up</Link></div>
                 
                        </form>

                        <img className="Logo" src={logo} alt="logo" />

                </div>
            </div>
        </div>
    )


}
export default Login;