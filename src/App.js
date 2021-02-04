import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeScreen from './HomeScreen';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
