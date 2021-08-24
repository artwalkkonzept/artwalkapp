import axios from "axios";


import http from "../http-common";


const API_URL = "http://localhost:8080/api/artwalk/";

class ArtWalkDataService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
//}

//export default new ArtwalkService();

//class ArtWalkDataService {
  getAll(params) {
    return http.get("/artwalks", { params });
  }

  get(id) {
    return http.get(`/artwalks/${id}`);
  }

  create(data) {
    return http.post("/artwalks", data);
  }

  update(id, data) {
    return http.put(`/artwalks/${id}`, data);
  }

  delete(id) {
    return http.delete(`/artwalks/${id}`);
  }

  deleteAll() {
    return http.delete("/artwalks");
  }

  findByTitle(title) {
    return http.get(`/artwalks?title=${title}`);
  }
}

export default new ArtWalkDataService();