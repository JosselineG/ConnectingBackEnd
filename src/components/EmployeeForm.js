import "./EmployeeForm.css";
import { useState } from "react";
import axios from "axios"; 



function EmployeeForm() {


    const [userData, setUserData] = useState({

        firstName: "",
        lastName: "",
        phoneNumber: "",
        userEmail: "",
    });


    const handleChange = (e) => {

        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
 


    const handleSubmit = (e) => {

        axios.post('http://localhost:5000/api/test', userData) //requesting data from clients and will post data into database server
        .then(function (response) {
            console.log(response);
           
          
        })
        
        .catch(function (error) {
            console.log(error);
          
        }); 
       
   
    
         /*  alert(userData.firstName + " | " + userData.lastName + " | " + userData.phoneNumber + " | " + userData.userEmail); */
        console.log(userData.firstName + " | " + userData.lastName + " | " + userData.phoneNumber + " | " + userData.userEmail);
        
        setUserData({ firstName: "", lastName: "", phoneNumber: "", userEmail: "" })
        e.preventDefault();
        
    
    }
   
   
 
        
    
        
    

    return (

        <div className="EmployeeForm1">

            <h1>Hello World!</h1>

            <div className="Container">

                <div className="subContainer">

                    <form onSubmit={handleSubmit}>

                        <label>First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            value={userData.firstName}>
                        </input>

                        <label>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            value={userData.lastName}>
                        </input>

                        <label>Phone Number</label>
                        <input
                            type="number"
                            name="phoneNumber"
                            onChange={handleChange}
                            value={userData.phoneNumber}>
                        </input>

                        <label>Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            onChange={handleChange}
                            value={userData.userEmail}>
                        </input>

                        <button
                            type="submit">
                            Submit
                        </button>

                    </form>

                </div>

            </div>

        </div>
    )

}

export default EmployeeForm;