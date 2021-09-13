import React from 'react';
import { Router, Link } from "@reach/router";

/*import ReactDOM from "react-dom";

burgerbar*/
/*burgerbar*/

import "../../App.css";

/*import ShowStuff from "./ShowStuff";
import FruitList from './FruitList';*/
import Gallery from '../pages/Gallery';
import Tour from '../pages/Tour';
import Calender from '../pages/Calender';
import Nav from "../pages/Navbar";
import Content from "../pages/Content";
import TourContent from "../pages/TourContent";
import Tour1 from '../pages/Tour1';
import Tour2 from '../pages/Tour2';
import Tour3 from '../pages/Tour3';
import ShowStuff from '../pages/ShowStuff';
import Footer from '../pages/Footer';

function App(props) {
  return (
    <div className="background-white">
       
      <Nav /> {/* <Nav> is not a target for routing, so we put it outside of <Router>*/}
      <Router>
        <Gallery path="/gallery"></Gallery>
        <Tour path="/tour"></Tour>
        <Calender path="/calender"></Calender>
        <Tour1 path="/tour1"></Tour1>
        <Tour2 path="/tour2"></Tour2>
        <Tour3 path="/tour3"></Tour3>
        
        {/* ':name' will turn into this.props.name inside the component */}
        {/* Browser address bar will show: http://localhost:3000/stuff/some-name */}
        <ShowStuff path="/stuff/:name"></ShowStuff>
        <TourContent path="/tourContent/:name"></TourContent>
      </Router>
      <Content/> {/* <Content> is not a target for routing, so we put it outside of <Router>*/}
      <div class="go_back">
      <ul>
      <li><Link to="/">Go back</Link></li>
      </ul>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
