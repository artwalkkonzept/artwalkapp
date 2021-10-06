import React, { Component } from "react";
import ArtwalkDataService from "../services/artwalk.service";
import { Link } from "react-router-dom";

import Pagination from "@material-ui/lab/Pagination";

export default class ArtWalksList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveArtwalks = this.retrieveArtwalks.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveArtWalk = this.setActiveArtWalk.bind(this);
    this.removeAllArtWalks = this.removeAllArtWalks.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this);

    this.state = {
      artwalks: [],
      currentArtWalk: null,
      currentIndex: -1,
      searchTitle: "",

      page: 1,
      count: 0,
      pageSize: 1,
    };

    this.pageSizes = [1, 6, 9];
  }

  componentDidMount() {
    this.retrieveArtwalks();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  getRequestParams(searchTitle, page, pageSize) {
    let params = {};

    if (searchTitle) {
      params["title"] = searchTitle;
    }

    if (page) {
      params["page"] = page - 1;
    }

    if (pageSize) {
      params["size"] = pageSize;
    }

    return params;
  }

 retrieveArtwalks() {
    const { searchTitle, page, pageSize } = this.state;
    const params = this.getRequestParams(searchTitle, page, pageSize);

    ArtwalkDataService.getAll(params)
      .then((response) => {
        const { artwalks, totalPages } = response.data;

        this.setState({
          artwalks: artwalks,
          count: totalPages,
        });
        console.log(response.data);
      })
      .catch((e) => {
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
    ArtwalkDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  handlePageChange(event, value) {
    this.setState(
      {
        page: value,
      },
      () => {
        this.retrieveArtwalks();
      }
    );
  }

  handlePageSizeChange(event) {
    this.setState(
      {
        pageSize: event.target.value,
        page: 1
      },
      () => {
        this.retrieveArtwalks();
      }
    );
  }

  searchTitle() {
    this.setState({
      currentArtWalk: null,
      currentIndex: -1
    });

    ArtwalkDataService.findByTitle(this.state.searchTitle)
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
    const { searchTitle, artwalks, currentArtWalk, currentIndex, page, count, pageSize, } = this.state;

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
                onClick={this.retrieveArtwalks}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>ArtWalk post list</h4>

          <div className="mt-3">
            {"Items per Page: "}
            <select onChange={this.handlePageSizeChange} value={pageSize}>
              {this.pageSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            
            <Pagination
              className="my-3"
              count={count}
              page={page}
              siblingCount={1}
              boundaryCount={1}
              variant="outlined"
              shape="rounded"
              onChange={this.handlePageChange}
            />
          </div>

          <ul className="list-group">
              {artwalks && artwalks.map((artwalk, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveArtWalk(artwalk, index)}
                  key={index}>
                  {artwalk.title}
                  
                  <h4>{artwalk.title}</h4>
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-danger"
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
                className="btn btn-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on an ArtWalk news post</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
