import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ArtWalkDataService from "./services/artwalk.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import User from "./components/user.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";


import AddArtWalk from "./components/add-artwalk.component";
import ArtWalk from "./components/artwalk.component";
import ArtWalksList from "./components/artwalks-list.component";
import ArtWalksPublish from "./components/artwalk-published.component";


//import ImgUpload from "./components/image-upload.component";
//import Images from "./components/image.component";


const moment = require('moment'); // require
const formattedDate = moment().format('llll');

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = ArtWalkDataService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    ArtWalkDataService.logout();
  }

  render() {
    
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
    const pstyle = {
      color: "white",
      backgroundColor: "purple",
      padding: "10px",
      borderRadius: "2%",
      fontFamily: "Arial"
    };
    
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="navbar-nav ">
          <Link to={"/"} className="navbar-brand">
            ArtWalk
          </Link>
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Public page
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Administrator
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  Login page
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add post
              </Link>
            </li>
            <li className="nav-item"> 
              <Link to={"/Artwalks"} className="nav-link">
              All post
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/artwalks/published"} className="nav-link">
                Published post
              </Link>
            </li>
           
          </div>
        </nav>

        <div className="sidebar-nav ml-auto">
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto"> 
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
            <p style={pstyle}>{formattedDate} </p>
          </li>
            </div>
          )}
          </div>


        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/artwalks"]} component={ArtWalksList} />
            <Route exact path={["/", "/ArtWalks/published"]} component={ArtWalksPublish} />
            <Route exact path="/add" component={AddArtWalk} />
            <Route path="/artwalks/:id" component={ArtWalk} />
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/user" component={User} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="*" component={whoops404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

export function whoops404() {
  return (
    <div className="container">
      <h1>
       Error 404! - This page does not exits!
      </h1>
    </div>
  )
}



 /*<li className="nav-item">
              <Link to={"/ImgUpload"} className="nav-link">
                Add Image
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Images"} className="nav-link">
              Images
              </Link>
            </li>
            
            
            <Route exact path="/ImgUpload" component={ImgUpload} />
            <Route exact path="/Images" component={Images} />
            */