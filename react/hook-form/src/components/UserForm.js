import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameValidation, setFirstNameValidation] = useState(false);
    const [lastNameValidation, setLastNameValidation] = useState(false);
    const [emailValidation, setEmailValidation] = useState(false);
    const [passwordValidation, setPasswordValidation] = useState(false);
    const [confirmPasswordValidation, setConfirmPasswordValidation] = useState(false);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameValidation("");
        } else if(e.target.value.length < 2) {
            setFirstNameValidation("First Name must be 2 characters or longer!");
        } else {
            setFirstNameValidation("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameValidation("");
        } else if(e.target.value.length < 2) {
            setLastNameValidation("Last Name must be 2 characters or longer!");
        } else {
            setLastNameValidation("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailValidation("");
        } else if(e.target.value.length < 5) {
            setEmailValidation("Email must be 5 characters or longer!");
        } else {
            setEmailValidation("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordValidation("");
        } else if(e.target.value.length < 8) {
            setPasswordValidation("Password must be 8 characters or longer!");
        } else {
            setPasswordValidation("");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmPasswordValidation("Passwords must match!");
        } else {
            setConfirmPasswordValidation("");
        }
    }
    
    
    return(
        <>
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstName } />
                {
                    firstNameValidation ?
                    <p>{ firstNameValidation }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastName } />
                {
                    lastNameValidation ?
                    <p>{ lastNameValidation }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="email" onChange={ handleEmail } />
                {
                    emailValidation ?
                    <p>{ emailValidation }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ handlePassword } />
                {
                    passwordValidation ?
                    <p>{ passwordValidation }</p> :
                    ''
                }
            </div>
            <div>
                <label> Confirm Password: </label>
                <input type="password" onChange={ handleConfirmPassword } />
                {
                    confirmPasswordValidation ?
                    <p>{ confirmPasswordValidation }</p> :
                    ''
                }
            </div>
        </form>
        </>
    );
}

export default UserForm;