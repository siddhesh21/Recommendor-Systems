import React, { useState } from 'react';
import "./LoginScreen.css"
import SignUpScreen from './SignUpScreen';

const LoginScreen = () => {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">
            <div className="loginBackground">
                <img className="loginScreenLogo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
                <button onClick={() => setSignIn(true)} className="loginScreenButton">Sign In</button>
                <div className="loginScreenGradient"></div>
            </div>
            <div className="loginScreenBody">
                {signIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                    <h1>Undfjdshfdshfihdgibdiofghidufhbisdubgfuisfdhguifdbghuih </h1>
                    <h2>sddksfbd dsfkljhdnf dhfkjsdfhn</h2>
                    <h3>dfkhsdfhdsiohidhfnn idfniodsfi</h3>
                    <div className="loginScreenInput">
                        <form>
                            <input type="email" placeholder="Email Address"/>
                            <button onClick={() => setSignIn(true)} className="loginScreenGetStarted">Get Started</button>
                        </form>
                    </div>
                </>
                )}
            </div>
        </div>
    )
}

export default LoginScreen
