import React from 'react';
import { Router } from "@reach/router";
import { Link } from "@reach/router";

/*import ReactDOM from "react-dom";

burgerbar*/
/*burgerbar*/

import "../../App.css";

import Gallery from '../../Gallery';
import Tour from '../../Tour';
import Calender from '../../Calender';
import SideBar from "../../SideBar";
import Content from "../../Content";
import TourContent from "../../TourContent";
import Tour1 from '../../Tour1';
import Tour2 from '../../Tour2';
import Tour3 from '../../Tour3';
import ShowStuff from '../../ShowStuff';
import Footer from '../../Footer';     
import About from '../../About';       
import Team from '../../Team';    
import Profil from '../../Profil'; 

function App(props) {
  return (
    <div className="background-white">
  
      <SideBar /> {/* <SideBar> is not a target for routing, so we put it outside of <Router>*/}
      <Router>
        <About path="/about"></About>
        <Team path="/team"></Team>
        <Profil path="/Profil"></Profil>

        <Tour path="/tour"></Tour>
        <Gallery path="/gallery"></Gallery>
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
