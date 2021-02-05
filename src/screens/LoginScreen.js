import React, { useState } from 'react';
import "./LoginScreen.css"
import SignUpScreen from './SignUpScreen';

const LoginScreen = () => {

    const [signIn, setSignIn] = useState(false);
    const [email, setEmail] = useState("");

    return (
        <div className="loginScreen">
            <div className="loginBackground">
                
                <img className="loginScreenLogo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
                <button onClick={() => setSignIn(true)} className="loginScreenButton">Sign In</button>
                <div className="loginScreenGradient"></div>
            </div>
            <div className="loginScreenBody">
                {signIn ? (
                    <SignUpScreen setEmail={setEmail} email={email} />
                ) : (
                    <>
                        <h1>Unlimited number of movies, series and more.</h1>
                        <h2>Watch it anywhere. Unsubscribe at any time</h2>
                        <div className="loginScreenInput">
                            <form>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"/>
                                <button onClick={() => setSignIn(true)} className="loginScreenGetStarted">Get Started</button>
                            </form>
                        </div>
                        <h3>Ready to watch? Enter your email address to create or access your account</h3>
                    </>
                )}
            </div>
        </div>
    )
}

export default LoginScreen
