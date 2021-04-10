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
  console.log("This is a USER >>>", user);

  const [value, setValue] = useState("Male");
  const handleChangeGender = (e) => {
    setValue(e.target.value);
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));
  const classes = useStyles();

  const [userChecked, setUserChecked] = useState({
    Action: false,
    Horror: false,
    Comedy: false,
    Romance: false,
  });
  const handleChange = (event) => {
    setUserChecked({
      ...userChecked,
      [event.target.name]: event.target.checked,
    });
  };
  const { Action, Horror, Comedy, Romance } = userChecked;
  const error = [Action, Horror, Comedy, Romance].filter((v) => v).length !== 3;

  const submitForm = (e) => {
    e.preventDefault();
    db.collection("usersResponses")
      .doc(user.uid)
      .collection("userResponse")
      .add({
        question1: value,
        question2: userChecked,
      });
    console.log("SUBMITTED RESPONSES");
    window.alert("RESPONSE SUBMITTED, THANK YOU");
  };

  console.log(value);
  console.log(userChecked);

  useEffect(() => {}, [user.uid]);

  return (
    <div className="personalize__Container">
      <form>
        <h2 style={{ marginBottom: 15 }}>Are you...</h2>

        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChangeGender}
          >
            <FormControlLabel
              value="female"
              control={<Radio style={{ color: "white" }} />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={<Radio style={{ color: "white" }} />}
              label="Male"
            />
            <FormControlLabel
              value="other"
              control={<Radio style={{ color: "white" }} />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>
        <h2 style={{ padding: "5px", marginTop: 15 }}>
          Which is your favorite genre?
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
                  userChecked={Action}
                  onChange={handleChange}
                  name="Action"
                />
              }
              label="Action"
            />
            <FormControlLabel
              control={
                <Checkbox
                  userChecked={Comedy}
                  onChange={handleChange}
                  name="Comedy"
                />
              }
              label="Comedy"
            />
            <FormControlLabel
              control={
                <Checkbox
                  userChecked={Horror}
                  onChange={handleChange}
                  name="Horror"
                />
              }
              label="Horror"
            />
            <FormControlLabel
              control={
                <Checkbox
                  userChecked={Romance}
                  onChange={handleChange}
                  name="Romance"
                />
              }
              label="Romance"
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
