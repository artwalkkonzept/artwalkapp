import http from "../http-common";

class ArtWalkPublishedDataService {

  getAll() {
    return http.get("/artwalks/published");
  }

  get(id) {
    return http.get(`/artwalks/published/${id}`);
  }

  create(data) {
    return http.post("/artwalks/published", data);
  }

  update(id, data) {
    return http.put(`/artwalks/published/${id}`, data);
  }

  delete(id) {
    return http.delete(`/artwalks/published/${id}`);
  }

  deleteAll() {
    return http.delete(`/artwalks/published`);
  }

  findByTitle(title) {
    return http.get(`/artwalks/published?title=${title}`);
  }
}

export default new ArtWalkPublishedDataService();