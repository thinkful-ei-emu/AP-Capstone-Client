import config from '../config';
import TokenService from './token-service';

const FavoritesApiService = {
  getUserFavorites() {
    return fetch(`${config.API_ENDPOINT}/favorites`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());
  },
  
  addNewFavorite(park_id) {
    return fetch(`${config.API_ENDPOINT}/favorites`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({park_id})
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },

  deleteFavorite(park_id) {
    return fetch(`${config.API_ENDPOINT}/favorites/${park_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());
  },
 
};

export default FavoritesApiService;