import React from "react";
import "./Personalize.css";

function Personalize() {
  return (
    <div className="personalize__Container">
      <div className="personalize__questHeader">
        <h1>Questions</h1>
        <div className="personalize__questions">
          <h2>Question #1</h2>
          <div className="personalize__questOptions">
            <p>option A</p>
            <p>option B</p>
          </div>
          <h2>Question #2</h2>
          <div className="personalize__questOptions">
            <p>option A</p>
            <p>option B</p>
          </div>
          <h2>Question #3</h2>
          <div className="personalize__questOptions">
            <p>option A</p>
            <p>option B</p>
          </div>
          <h2>Question #4</h2>
          <div className="personalize__questOptions">
            <p>option A</p>
            <p>option B</p>
          </div>
          <h2>Question #5</h2>
          <div className="personalize__questOptions">
            <p>option A</p>
            <p>option B</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personalize;
