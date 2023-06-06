import React, { useState } from 'react';
import "../assets/css/signup.css"
import Logo from "../components/Logo";

const initFormValue = {
    username: "",
    password: "",
    confirmPassword: "",

};

const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
};

function Signup() {
    const [formValue, setFormValue] = useState(initFormValue)
    const [formError, setFormError] = useState({})

    const validateForm = () => {
        const error = {};

        if(isEmptyValue(formValue.username)){
            error["username"] = "Username is required"
        }
        if(isEmptyValue(formValue.password)){
            error["password"] = "Password is required"
        }
        if(isEmptyValue(formValue.confirmPassword)){
            error["confirmPassword"] = "Confirm Password is required"
        }else if(formValue.confirmPassword !== formValue.password){
            error["confirmPassword"] = "Confirm Password not match"

        }

        setFormError(error)
        return Object.keys(error).length ===0;
    };
    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormValue({
            ...formValue,
            [name]: value,

        });

    };
    const handleSubmit = (event) => {
        event.preventDefault();

        if(validateForm()){
            console.log("form value", formValue)
        }else{
            console.log("form invalid", formValue)
            
        }

    };
    console.log(formError);

    return (
        <div className="signup-page">
            <div class="sign-form-container">
                <div id='m1'>
                    <Logo />
                <form onSubmit={handleSubmit}>
                    <div class="input">
                        <input
                            placeholder="Username"
                            id="user-name"
                            className="form-control"
                            type="text" 
                            name="username" 
                            onChange={handleChange}
                        />
                        <p className='error-feedback'>{formError.username}</p>
                    </div>
                    <div class="input">
                        <input
                            placeholder="Password"
                            id="password"
                            className="form-control"
                            type="password"
                            name="password" 
                            onChange={handleChange}
                        />
                        <p className='error-feedback'>{formError.password}</p>

                    </div>
                    <div class="input">
                        <input
                            placeholder="Confirm Password"
                            id="confirm-password"
                            className="form-control"
                            type="password"
                            name="confirmPassword" 
                            onChange={handleChange}
                        />
                        <p className='error-feedback'>{formError.confirmPassword}</p>

                    </div>
                    <button type="submit" className="submit-btn">Sign up</button>
                </form>
                <p className="login">You have an account?<span>Login</span> </p>
                </div>
                
            </div>
        </div>

    );
}

export default Signup;