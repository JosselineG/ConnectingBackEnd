import React, { useState } from "react";
import "./Login.css"
import { Link } from "react-router-dom";


function Login() {

const[userLoginForm, setUserLoginForm] = useState({Email:"",Password:""})


/*handleChange runs on every keystroke to update the React state, 
the displayed value will update as the user types.*/
const handleChange = (e)=>{
    e.preventDefault();
 setUserLoginForm({ ...userLoginForm,[e.target.name]: e.target.value})

}
 
const handleSubmit = (e)=>{

    e.preventDefault();
    console.log(userLoginForm)
}


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
                <div className="FormBox">
                    <form  onSubmit={handleSubmit}>

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
                        <div>Do not have an account?<Link style={{ color: "blue", textDecoration: 'none' }} to='/Register'>Register</Link></div>
                    </form>
                </div>
            </div>
        </div>
    )


}
export default Login;