import React, { useState } from "react";

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
// import { useCollection } from "react-firebase-hooks/firestore";
// import db from "../firebase";

function Questions() {
  //   const [users] = useCollection(db.collection("users"));
  //   const [usersSelection] = useCollection(
  //     db.collection("user").collection("selection")
  //   );

  const [value, setValue] = useState("Male");
  const handleChangeGender = (e) => {
    setValue(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
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
  const [state, setState] = useState({
    ScienceFiction: true,
    Action: false,
    Horror: false,
    Adventure: false,
    Animated: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const { ScienceFiction, Action, Horror, Adventure, Animated } = state;
  const error =
    [ScienceFiction, Action, Horror, Adventure, Animated].filter((v) => v)
      .length !== 3;

  console.log(value);
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
                  checked={ScienceFiction}
                  onChange={handleChange}
                  name="ScienceFiction"
                />
              }
              label="ScienceFiction"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Action}
                  onChange={handleChange}
                  name="Action"
                />
              }
              label="Action"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Animated}
                  onChange={handleChange}
                  name="Animated"
                />
              }
              label="Animated"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Horror}
                  onChange={handleChange}
                  name="Horror"
                />
              }
              label="Horror"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={Adventure}
                  onChange={handleChange}
                  name="Adventure"
                />
              }
              label="Adventure"
            />
          </FormGroup>
          <FormHelperText>Please choose top 3</FormHelperText>
        </FormControl>
      </form>
      <Button
        style={{ color: "white", fontSize: "20px" }}
        onClick={submitForm}
        type="submit"
        variant="outlined"
      >
        SUBMIT
      </Button>
    </div>
  );
}

export default Questions;
