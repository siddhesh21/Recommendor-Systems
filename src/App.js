import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Nav from "./Nav";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import Personalize from "./screens/Personalize";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/personalize">
              <Personalize />
            </Route>
            <Route exact path="/reviews">
              <Nav />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
