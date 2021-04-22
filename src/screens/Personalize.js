import React from "react";
import Questions from "../components/Questions";
import Nav from "../Nav";
import "./Personalize.css";
// import db from "../firebase";
// import { useSelector } from "react-redux";
// import { selectUser } from "../features/userSlice";

function Personalize() {
  // const user = useSelector(selectUser);

  return (
    <div className="personalize__Container">
      <Nav />
      <Questions />
    </div>
  );
}

export default Personalize;
