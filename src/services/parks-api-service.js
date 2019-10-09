import config from '../config';
import TokenService from './token-service';


const ParksApiService = {
  getParks(searchTerm) {
    return fetch(`${config.API_ENDPOINT}/parks?search=${searchTerm}`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());
  },

  getParkById(park_id) {
    return fetch(`${config.API_ENDPOINT}/parks/${park_id}`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());
  },

};

export default ParksApiService;