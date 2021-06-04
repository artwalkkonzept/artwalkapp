import http from "../http-common";

class ArtWalkDataService {
  getAll() {
    return http.get("/artwalks");
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
    return http.delete(`/artwalks`);
  }

  findByTitle(title) {
    return http.get(`/artwalks?title=${title}`);
  }
}

export default new ArtWalkDataService();