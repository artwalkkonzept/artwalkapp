import React, { Component } from "react";

import UserService from "../services/user.service";
import ArtWalkDataService from "../services/artwalk.service";

export default class BoardModerator extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveArtWalk = this.saveArtWalk.bind(this);
    this.newArtWalk = this.newArtWalk.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "", 
      published: false,
      submitted: false,

      content: ""
    };
  }

  componentDidMount() {
    UserService.getModeratorBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }


  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  saveArtWalk() {
    var data = {
      title: this.state.title,
      description: this.state.description
    };

    ArtWalkDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newArtWalk() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,

      submitted: false
    });
  }


  render() {
    return (
          <div className="submit-form">
          <h3>{this.state.content}</h3>
        
      {this.state.submitted ? (
        <div>
          <p>You submitted successfully!</p>
          <button className="btn btn-success" onClick={this.newArtWalk}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={this.state.title}
              onChange={this.onChangeTitle}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
              name="description"
            />
          </div>

          <button onClick={this.saveArtWalk} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
    );
  }
}
