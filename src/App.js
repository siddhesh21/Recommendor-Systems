import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
          <Route path="/test">
            
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
