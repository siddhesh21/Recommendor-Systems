import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Nav.css";
import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";
import { IconButton } from "@material-ui/core";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <div className="navLinks">
          <Link className="linkNav" to="/">
            {/* eslint-disable-next-line */}
            <a href="#">&nbsp;</a>
          </Link>
        </div>

        <IconButton>
          <PersonalVideoIcon
            style={{ color: "red", fontSize: "4rem" }}
            onClick={() => history.push("/personalize")}
            className="nav__personalizeButton"
          />
        </IconButton>
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
