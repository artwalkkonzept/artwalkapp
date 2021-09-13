import React from 'react';
import { Router } from "@reach/router";

/*import ReactDOM from "react-dom";

burgerbar*/
/*burgerbar*/

import "./App.css";

//import FruitList from './FruitList';
import Tour from './components/pages/Tour';
import Shop from './components/pages/Shop';
import About from './components/pages/Calender';
import Nav from "./components/pages/Navbar";
import Content from "./components/pages/Content";
/*import ShowStuff from "./ShowStuff";*/
import TourContent from "./components/pages/TourContent";
import Tour1 from './components/pages/Tour1';
import Tour2 from './components/pages/Tour2';
import Tour3 from './components/pages/Tour3';

function App(props) {
  return (
    <div className="background-yellow">
       
      <Nav /> {/* <Nav> is not a target for routing, so we put it outside of <Router>*/}
      <Router>
        <Tour path="/tour"></Tour>
        <Shop path="/shop"></Shop>
        <About path="/calender"></About>
        <Tour1 path="/tour1"></Tour1>
        <Tour2 path="/tour2"></Tour2>
        <Tour3 path="/tour3"></Tour3>

        {/* ':name' will turn into this.props.name inside the component */}
        {/* Browser address bar will show: http://localhost:3000/stuff/some-name */}
        <TourContent path="/tourContent/:name"></TourContent>
      </Router>
      <Content/> {/* <Content> is not a target for routing, so we put it outside of <Router>*/}
    </div>
  );
}

export default App;

/*<FruitList path="/fruitList"></FruitList>*/