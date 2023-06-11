import React, { useState } from 'react';
import "../assets/css/login.css"
import Logo from "../components/Logo";

const initFormValue = {
    username: "",
    password: "",

};

const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
};

function Login() {
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
            console.log("form invalid")
            
        }

    };

    return (
        <div className="login-page">
            <div class="login-form-container">
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
                    <button type="submit" className="submit-btn">Login</button>
                </form>
                <p className="forgot-pw">Forgot password!</p>
                <p className="signup">New User?<span>SignUp</span></p>
                </div>
                
            </div>
        </div>

    );
}

export default Login;