//import React, { useState } from 'react';
import sidelogo from '../../logo.svg'; 
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../../App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../login/login';
import Preferences from '../Preferences/Preferences';
import useToken from './useToken';

function App() {
  //const [token, setToken] = useState();
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
<a className="sideLink" href="https://sites.google.com/view/artwalkapp/english" target="_blank" rel="noopener noreferrer"><img src={sidelogo} className="sideImg" alt="logo" /></a>
  
      <BrowserRouter>
        <Switch>
          <Route>
            <Dashboard />
          </Route>
          <Route>
            <Preferences />
          </Route>
          <Route>
          </Route>
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;