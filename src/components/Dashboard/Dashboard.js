import React from 'react';
import { Router } from "@reach/router";

/*import ReactDOM from "react-dom";

burgerbar*/
/*burgerbar*/

import "../../App.css";

/*import ShowStuff from "./ShowStuff";
import FruitList from './FruitList';*/
import Gallery from '../../Gallery';

import Tour from '../../Tour';
import About from '../../Calender';
import Nav from "../../Nav";
import Content from "../../Content";
import TourContent from "../../TourContent";
import Tour1 from '../../Tour1';
import Tour2 from '../../Tour2';
import Tour3 from '../../Tour3';

function App(props) {
  return (
    <div className="background-yellow">
       
      <Nav /> {/* <Nav> is not a target for routing, so we put it outside of <Router>*/}
      <Router>
        <Gallery path="/gallery"></Gallery>
        <Tour path="/tour"></Tour>
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
