//import React, { useState } from 'react';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Router} from "@reach/router";

import '../../App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../login/login';
import Preferences from '../Preferences/Preferences';
import useToken from './useToken';
import Nav from "../pages/Navbar"
import Tour from '../pages/Tour';
import Shop from '../pages/Shop';
import About from '../pages/About';
import Content from "../pages/Content";
/*import ShowStuff from "./ShowStuff";*/
import TourContent from "../pages/TourContent";
import Tour1 from '../pages/Tour1';
import Tour2 from '../pages/Tour2';
import Tour3 from '../pages/Tour3';

function App() {
  //const [token, setToken] = useState();
  const { token, setToken } = useToken();
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
        </Switch>
      </BrowserRouter>

      <div className="background-yellow">
       
      <Nav /> {/* <Nav> is not a target for routing, so we put it outside of <Router>*/}
    
     <Router>
        <Tour path="/tour"></Tour>
        <Shop path="/shop"></Shop>
        <About path="/about"></About>
        <Tour1 path="/tour1"></Tour1>
        <Tour2 path="/tour2"></Tour2>
        <Tour3 path="/tour3"></Tour3>

        {/* ':name' will turn into this.props.name inside the component */}
        {/* Browser address bar will show: http://localhost:3000/stuff/some-name */}
        <TourContent path="/tourContent/:name"></TourContent>
      </Router>
      <Content/> {/* <Content> is not a target for routing, so we put it outside of <Router>*/}
    </div>
      </div>
  );
}

export default App;