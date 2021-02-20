import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";
import AddIcon from "@material-ui/icons/Add";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  const [email, setEmail] = useState("");
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign-In
        </button>
        <div className="loginScreen__gradient" />
        <div className="loginScreen__body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>

              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen__getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
              <div className="moreSignUpScreen">
                <div className="moreScreenSection">
                  <div className="smallLoginScreenSection">
                    <h1>Enjoy on your TV.</h1>
                    <h2>
                      Watch on Smart TVs, PlayStation, Xbox, ChromeCast, Apple
                      TV, Blu-ray players, and more.
                    </h2>
                  </div>
                  <video playsinline muted autoPlay loop>
                    <source
                      type="video/mp4"
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                    />
                  </video>
                </div>
                <div className="moreScreenSection">
                  <img
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                    alt=""
                  />
                  <div className="smallLoginScreenSection">
                    <h1>Download your shows to watch offline.</h1>
                    <h2>
                      Save your favorites easily and always have something to
                      watch.
                    </h2>
                  </div>
                </div>
                <div className="moreScreenSection">
                  <div className="smallLoginScreenSection">
                    <h1>Watch everywhere.</h1>
                    <h2>
                      Stream unlimited movies and TV shows on your phone,
                      tablet, laptop, and TV without paying more.
                    </h2>
                  </div>
                  <video playsinline muted autoPlay loop>
                    <source
                      type="video/mp4"
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                    />
                  </video>
                </div>
                <div className="faqSection">
                  <h1>Frequently Asked Questions</h1>
                  <div className="faqContainer">
                    <div className="questionActual">
                      <h2>What is Netflix?</h2>
                      <AddIcon />
                    </div>
                    <div className="questionActual">
                      <h2>How much does Netflix cost?</h2>
                      <AddIcon />
                    </div>
                    <div className="questionActual">
                      <h2>Where can I watch?</h2>
                      <AddIcon />
                    </div>
                    <div className="questionActual">
                      <h2>How do I cancel?</h2>
                      <AddIcon />
                    </div>
                    <div className="questionActual">
                      <h2>What can I watch on Netflix?</h2>
                      <AddIcon />
                    </div>
                    <div className="questionActual">
                      <h2>Why am I seeing this language?</h2>
                      <AddIcon />
                    </div>
                  </div>
                </div>
                <div className="readyToWatchContainer">
                  <h4>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </h4>
                  <div className="loginScreenInput">
                    <form>
                      <input
                        className="loginScreenFooterInput"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                      />
                      <button
                        onClick={() => setSignIn(true)}
                        className="loginScreenGetStarted"
                      >
                        Get Started
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
