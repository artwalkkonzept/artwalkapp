import React, { Component } from "react";
import ArtWalkDataService from "../services/artwalk.service";

export default class ArtWalk extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getArtWalk = this.getArtWalk.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateArtWalk = this.updateArtWalk.bind(this);
    this.deleteArtWalk = this.deleteArtWalk.bind(this);

    this.state = {
      currentArtWalk: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getArtWalk(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentArtWalk: {
          ...prevState.currentArtWalk,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentArtWalk: {
        ...prevState.currentArtWalk,
        description: description
      }
    }));
  }

  getArtWalk(id) {
    ArtWalkDataService.get(id)
      .then(response => {
        this.setState({
          currentArtWalk: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentArtWalk.id,
      title: this.state.currentArtWalk.title,
      description: this.state.currentArtWalk.description,
      published: status
    };

    ArtWalkDataService.update(this.state.currentArtWalk.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentArtWalk: {
            ...prevState.currentArtWalk,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateArtWalk() {
    ArtWalkDataService.update(
      this.state.currentArtWalk.id,
      this.state.currentArtWalk
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The artwalk was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteArtWalk() {    
    ArtWalkDataService.delete(this.state.currentArtWalk.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/artwalks')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentArtWalk } = this.state;

    return (
      <div>
        {currentArtWalk ? (
          <div className="edit-form">
            <h4>ArtWalk</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentArtWalk.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentArtWalk.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentArtWalk.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentArtWalk.published ? (
              <button
                className="btn btn-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="btn btn-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="btn btn-danger mr-2"
              onClick={this.deleteArtWalk}
            >
              Delete
            </button >

            <button
              type="submit"
              className="btn btn-success"
              onClick={this.updateArtWalk}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a ArtWalk news post</p>
          </div>
        )}
      </div>
    );
  }
}
