import config from '../config';
import TokenService from './token-service';


const ReviewsApiService = {
  getAllReviews() {
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json());
  },
  
//   addNewReview(rideId) {
//     return fetch(`${config.API_ENDPOINT}/reviews`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//         Authorization: `bearer ${TokenService.getAuthToken()}`
//       },
//       body: JSON.stringify({rideId, rating, text})
//     })
//       .then(res =>
//         (!res.ok)
//           ? res.json().then(e => Promise.reject(e))
//           : res.json()
//       );
//   },
 
};

export default ReviewsApiService;