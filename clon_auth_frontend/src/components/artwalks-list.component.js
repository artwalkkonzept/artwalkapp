import React, { Component } from "react";
import ArtWalkDataService from "../services/artwalk.service";
import { Link } from "react-router-dom";

export default class ArtWalksList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveArtWalks = this.retrieveArtWalks.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveArtWalk = this.setActiveArtWalk.bind(this);
    this.removeAllArtWalks = this.removeAllArtWalks.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      artwalks: [],
      currentArtWalk: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveArtWalks();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveArtWalks() {
    ArtWalkDataService.getAll()
      .then(response => {
        this.setState({
          artwalks: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveArtWalks();
    this.setState({
      currentArtWalk: null,
      currentIndex: -1
    });
  }

  setActiveArtWalk(artwalk, index) {
    this.setState({
      currentArtWalk: artwalk,
      currentIndex: index
    });
  }

  removeAllArtWalks() {
    ArtWalkDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    this.setState({
      currentArtWalk: null,
      currentIndex: -1
    });

    ArtWalkDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          artwalks: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, artwalks, currentArtWalk, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>ArtWalk post list</h4>

          <ul className="list-group">
            {artwalks &&
              artwalks.map((artwalk, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveArtWalk(artwalk, index)}
                  key={index}
                >
                  {artwalk.title}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllArtWalks}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentArtWalk ? (
            <div>
              <h4>ArtWalk</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentArtWalk.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentArtWalk.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentArtWalk.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/artwalks/" + currentArtWalk.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a ArtWalk...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
