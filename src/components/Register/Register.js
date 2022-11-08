import "./Register.css";
import { useState } from "react";
import axios from "axios"; 
import { Link } from "react-router-dom";
/* import bcrypt from 'bcryptjs'; */

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

        const salt = bcrypt.genSaltSync(10);
        
        const hashPasswordConfirm = bcrypt.hashSync(userData.userPassWordConfirm,salt);
        userData.userPassWordConfirm = hashPasswordConfirm

        const hashPassword = bcrypt.hashSync(userData.userPassWord,salt);
        userData.userPassWord = hashPassword

        if (userData.userPassWord !== userData.userPassWordConfirm){
            console.log("Password doesn't match, type again ")
        }else{
            console.log("password match")
        }


        await axios.post('http://localhost:5000/', userData) //requesting data from clients and will post data into database server
        .then((response) =>  console.log(response))
        .catch((error) => console.log(error)); 
       
   
    
         /*  alert(userData.firstName + " | " + userData.lastName + " | " + userData.phoneNumber + " | " + userData.userEmail); */
       /*  console.log(userData.firstName + " | " + userData.lastName + " | " + userData.phoneNumber + " | " + userData.userEmail); */
        setUserData({ firstName: "", lastName: "", userPassWord: "", userEmail: "",userPassWordConfirm: "" })
        console.log(userData)
        
        
    
    }
   
    

    return (

        <div className="EmployeeForm1">

           
            <nav className='NavBar'>
            <div>
                <ul>
                    <li>
                        <Link style={{ color: "white", textDecoration: 'none' }} to='/'> Home</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <h1>Register</h1>
            <div className="Container">
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
                            minLength={"8"}
                            required
                            onChange={handleChange}
                            value={userData.userPassWord}>
                        </input>


                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            name="userPassWordConfirm"
                            minLength={"8"}
                            required
                            onChange={handleChange}
                            value={userData.userPassWordConfirm}>
                        </input>

                        <button
                            type="submit">
                            Submit
                        </button>
                        <div>
                            Already register?<Link style={{ color: "blue", textDecoration: 'none' }} to='/Login'> Log in</Link>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    )

}

export default Register;