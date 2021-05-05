import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../../App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../login/login';
import Preferences from '../Preferences/Preferences';
import { Link } from "@reach/router";
function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application "You are locked in to the ArtWalkApp"</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/tour">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
      <ul>
      <li><Link to="/">Go back</Link></li>
    </ul>
    </div>
  );
}

export default App;