import React from 'react';
import "./SignUpScreen.css";

const SignUpScreen = () => {

    const register = (e) => {
        e.preventDefault();

    }

    const signIn = (e) => {
        e.preventDefault();
    }
 
    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="password"/>
                <button onClick={signIn} type="submit">Sign In</button>
                
            </form>
            <h4><span className="signUpGray">New to Netflix? </span><span onClick={register} className="signUpLink">Sign up now.</span></h4>
        </div>
    )
}

export default SignUpScreen
