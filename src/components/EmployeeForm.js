import react from "react";
import "./EmployeeForm.css";

function EmployeeForm(){

return(

    <div className="EmployeeForm">
            <h1>Hello World!</h1>

        <div className="Container">

        
            <div className="form">
            <form className="formInput">
                <label>First Name</label>
                <input type="text">
                </input>
                <label>Last Name</label>
                <input type="text">
                </input>
                <label>Phone Number</label>
                <input type="number">
                </input>
                <label>Email</label>
                <input type="email">
                </input> 
                <button type="button">Submit</button>
            </form>

            </div>        
        </div>


    </div>
)

}

export default EmployeeForm;