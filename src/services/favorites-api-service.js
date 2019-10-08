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
  
  addNewFavorite() {
    return fetch(`${config.API_ENDPOINT}/favorites`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify()
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },

  deleteFavorite(parkId) {
    return fetch(`${config.API_ENDPOINT}/favorites/${parkId}`, {
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