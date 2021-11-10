import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ArtWalkDataService from "../services/artwalk.service";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = ArtWalkDataService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
        {(this.state.userReady) ?
        <div>
        <header className="jumbotron">
          <h3>The <strong>login user page</strong> of all users.</h3>
          <p><strong>The current user is </strong>
          { currentUser.username}
        </p>
        </header>
      </div>: null}
      </div>
    );
  }
}
