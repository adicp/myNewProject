import React, { useState } from 'react'
import axios from 'axios';
const PersonForm = () => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            firstName,    
            
            lastName 
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);}
            )
            .catch(err=>console.log(err))

            // setFirstName("");
            // setLastName("");
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                    {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input type="text" onChange = {(e)=>setFirstName(e.target.value)}/> 
                {/* value = { firstName } */}
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange = {(e)=>setLastName(e.target.value)}/>
                {/* value = { firstName } */}
            </p>
            <input type="submit"/>
        </form>
    )
}
export default PersonForm;
