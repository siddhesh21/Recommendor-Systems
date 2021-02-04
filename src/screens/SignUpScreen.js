import React, { useRef } from 'react';
import { auth } from '../firebase';
import "./SignUpScreen.css";

const SignUpScreen = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => alert(error.message))
    };

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => alert(error.message))
    }
 
    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email"/>
                <input ref={passwordRef} type="password" placeholder="password"/>
                <button onClick={signIn} type="submit">Sign In</button>
                
            </form>
            <h4><span className="signUpGray">New to Netflix? </span><span onClick={register} className="signUpLink">Sign up now.</span></h4>
        </div>
    )
}

export default SignUpScreen
