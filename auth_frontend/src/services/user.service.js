import axios from 'axios';
import artwalkHeader from './artwalk-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: artwalkHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: artwalkHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: artwalkHeader() });
  }
}

export default new UserService();
