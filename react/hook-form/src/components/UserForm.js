import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    
    
    return(
        <>
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={ (e) => setfirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ (e) => setlastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label> Confirm Password: </label>
                <input type="text" value={confirmPassword} onChange={ (e) => setconfirmPassword(e.target.value) } />
            </div>
        </form>

        <p>Your Form Data</p>
        <p>First Name: { firstName } </p>
        <p>Last Name: { lastName} </p>
        <p>Email: { email } </p>
        <p>Password: { password } </p>
        <p>Confirm Password: { confirmPassword} </p>
        </>
    );
}

export default UserForm;