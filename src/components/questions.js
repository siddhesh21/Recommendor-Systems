import React, { useState, useEffect } from "react";
import "./Questions.css";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import db from "../firebase";

function Questions() {
  const user = useSelector(selectUser);
  // console.log("This is a USER >>>", user);

  // const [value, setValue] = useState("Male");
  // const handleChangeGender = (e) => {
  //   setValue(e.target.value);
  // };
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));
  const classes = useStyles();
  // 11,tt0076759,Star Wars

  // 26441,tt0112499,The Big Green

  // 862,tt0114709,Toy Story

  // 51352,tt0112373,Anne Frank Remembered

  // 680,tt0110912,Pulp Fiction

  // 858,tt0108160,Sleepless in Seattle

  // 38223,tt0116493,Harriet the Spy

  const [userChecked, setUserChecked] = useState({
    Star_Wars: false,
    The_Big_Green: false,
    Toy_Story: false,
    Anne_Frank_Remembered: false,
    Pulp_Fiction: false,
    Sleepless_in_Seattle: false,
    Harriet_the_Spy: false,
  });
  const handleChange = (event) => {
    setUserChecked({
      ...userChecked,
      [event.target.name]: event.target.checked,
    });
  };

  const {
    Star_Wars,
    The_Big_Green,
    Toy_Story,
    Anne_Frank_Remembered,
    Pulp_Fiction,
    Sleepless_in_Seattle,
    Harriet_the_Spy,
  } = userChecked;
  const moviesIdList = [11, 26441, 862, 51352, 680, 858, 38223];
  const error =
    [
      Star_Wars,
      The_Big_Green,
      Toy_Story,
      Anne_Frank_Remembered,
      Pulp_Fiction,
      Sleepless_in_Seattle,
      Harriet_the_Spy,
    ].filter((v) => v).length < 3;

  const submitForm = (e) => {
    e.preventDefault();
    db.collection("usersResponses")
      .doc(user.uid)
      .collection("userResponse")
      .add({
        recommendationCompleated: true,
        // question1: value,
        question2: userChecked,
      });
    console.log(user.uid);
    // do your change here
    let temp = [
      Star_Wars,
      The_Big_Green,
      Toy_Story,
      Anne_Frank_Remembered,
      Pulp_Fiction,
      Sleepless_in_Seattle,
      Harriet_the_Spy,
    ];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i]) {
        // moviesIdList
        fetch(
          `http://188.166.107.243:8000/addPreference?username=${user.email}&movie=${moviesIdList[i]}`,
          {
            method: "GET",
          }
        )
          .then((response) => {
            console.log(response);
          })
          .then((response) => {
            console.log(response);
          });
      }
    }

    console.log("SUBMITTED RESPONSES");
    window.alert("RESPONSE SUBMITTED, THANK YOU");
  };

  // console.log(value);
  // console.log(userChecked);

  useEffect(() => {}, [user.uid]);

  return (
    <div className="personalize__Container">
      <form>
        <h2 style={{ marginBottom: 15 }}>Recommendations saver</h2>

        <h2 style={{ padding: "5px", marginTop: 15 }}>
          Which is the following movies do you like?
        </h2>

        <FormControl
          required
          error={error}
          component="fieldset"
          className={classes.formControl}
        >
          <FormLabel component="legend" style={{ padding: "5px" }}>
            Pick 3
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  userChecked={Star_Wars}
                  onChange={handleChange}
                  name="Star_Wars"
                />
              }
              label="Star Wars"
            />
            <FormControlLabel
              control={
                <Checkbox
                  userChecked={The_Big_Green}
                  onChange={handleChange}
                  name="The_Big_Green"
                />
              }
              label="The Big Green"
            />
            <FormControlLabel
              control={
                <Checkbox
                  userChecked={Toy_Story}
                  onChange={handleChange}
                  name="Toy_Story"
                />
              }
              label="Toy Story"
            />
            <FormControlLabel
              control={
                <Checkbox
                  userChecked={Anne_Frank_Remembered}
                  onChange={handleChange}
                  name="Anne_Frank_Remembered"
                />
              }
              label="Anne Frank Remembered"
            />
            <FormControlLabel
              control={
                <Checkbox
                  userChecked={Pulp_Fiction}
                  onChange={handleChange}
                  name="Pulp_Fiction"
                />
              }
              label="Pulp Fiction"
            />
            <FormControlLabel
              control={
                <Checkbox
                  userChecked={Sleepless_in_Seattle}
                  onChange={handleChange}
                  name="Sleepless_in_Seattle"
                />
              }
              label="Sleepless in Seattle"
            />
            <FormControlLabel
              control={
                <Checkbox
                  userChecked={Harriet_the_Spy}
                  onChange={handleChange}
                  name="Harriet_the_Spy"
                />
              }
              label="Harriet the Spy"
            />
          </FormGroup>
          <FormHelperText>Please choose top 3</FormHelperText>
        </FormControl>
      </form>
      <form>
        <Button
          style={{ color: "white", fontSize: "20px" }}
          onClick={submitForm}
          type="submit"
          variant="outlined"
        >
          SUBMIT
        </Button>
      </form>
    </div>
  );
}

export default Questions;
