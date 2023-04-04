import "./Register.css";
import { useState } from "react";
import axios from "axios";
import logo from "../assets/LogoTP2.png"
import { Link } from "react-router-dom";
import validator from 'validator';

const bcrypt = require('bcryptjs');


function Register() {


    const [userData, setUserData] = useState({

        firstName: "",
        lastName: "",
        userPassWord: "",
        userPassWordConfirm: "",
        userEmail: "",
    });

    const handleChange = (e) => {

        setUserData({ ...userData, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {

        e.preventDefault();

        // Generate a salt value using bcrypt
        const salt = bcrypt.genSaltSync(10);

        // Hash the user's password confirmation using bcrypt and the salt value
        const hashPassWordConfirm = bcrypt.hashSync(userData.userPassWordConfirm, salt);


        // Hash the user's password using bcrypt and the salt value
        const hashPassWord = bcrypt.hashSync(userData.userPassWord, salt);


        /* ----------------EMAIL VALIDATOR----------------------------- */
        //Checking if email contains these endings. 
        if (!validator.contains(userData.userEmail, 'gmail.com') && !validator.contains(userData.userEmail, 'yahoo.com') && !validator.contains(userData.userEmail, 'hotmail.com') && !validator.contains(userData.userEmail, 'live.com') && !validator.contains(userData.userEmail, 'aol.com')) {

            throw new Error('Email address must contain a valid domain');

            //Checking if it is a valid email.   
        } else if (!validator.isEmail(userData.userEmail)) {

            throw new Error('Invalid email address');

        } else {
            console.log('valid email address');
            /* -------------------PASSWORD VALIDATOR-----------------------*/

            // checking if password is strong enough.   
            if (!validator.isStrongPassword(userData.userPassWord)) {
                throw new Error('Password must be at least 8 characters long and contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character.');
            } else {
                console.log("strong password")


                // User should type password twice to check if it matches.
                if (hashPassWord !== hashPassWordConfirm) {
                    throw new Error("Passwords do not match. Please try again. ")
                } else {
                    console.log("Passwords match!")

                    /* ------------------------------------------------------------ */
                    // Send a secure HTTP request to the server-side code to register the user
                    try {
                        const response = await axios.post('http://localhost:5000/', {
                            firstName: userData.firstName,
                            lastName: userData.lastName,
                            userEmail: userData.userEmail,
                            hashPassWord: hashPassWord
                        });
                        console.log(response.data);


                    } catch (error) {
                        console.error(error);
                    }

                    // Clearing the form
                    setUserData({
                        firstName: "",
                        lastName: "",
                        userPassWord: "",
                        userPassWordConfirm: "",
                        userEmail: ""
                    });
                }
            }
        }


    }



    return (

        <div>
            <nav className='NavBar'>
                <div>
                    <ul>
                        <li>
                            <Link style={{ color: "white", textDecoration: 'none' }} to='/'> Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="EmployeeForm1">

                <div className="Imag">

                    <img className="logo" src={logo} alt="logo" />


                    <h1>Welcome
                        <span className="dots1">.</span>
                        <span className="dots2">.</span>
                        <span className="dots3">.</span>
                    </h1>


                </div>

                <div className="subContainer">

                    <form onSubmit={handleSubmit}>

                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            value={userData.firstName}>
                        </input>

                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            value={userData.lastName}>
                        </input>

                        <label>Email:</label>
                        <input
                            type="email"
                            name="userEmail"
                            onChange={handleChange}
                            value={userData.userEmail}>
                        </input>


                        <label>Password (8 characters minimum):</label>
                        <input
                            type="password"
                            name="userPassWord"
                            minLength={8}
                            maxLength={8}
                            required={true}
                            onChange={handleChange}
                            value={userData.userPassWord}>
                        </input>


                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            name="userPassWordConfirm"
                            minLength={8}
                            maxLength={8}
                            required={true}
                            onChange={handleChange}
                            value={userData.userPassWordConfirm}>
                        </input>

                        <button
                            type="submit">
                            Submit
                        </button>
                        <div>
                            Already registered?<Link style={{ color: "blue", textDecoration: 'none' }} to='/Login'> Log in</Link>
                        </div>
                    </form>
                </div>


            </div>

        </div>
    )

}

export default Register;