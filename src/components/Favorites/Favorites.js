import React from 'react';
import ParksContext from '../../context/ParksContext';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Favorites.css';
import FavoritesApiService from '../../services/favorites-api-service';

export default class Favorites extends React.Component {


  static contextType = ParksContext;
  
  state = {
    error: null,
    message: ''
  }

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      FavoritesApiService.getUserFavorites()
        .then(resJson => {
          this.context.setFavorites(resJson);
        })
        .catch(error => {
          console.error(error.error);
        });
    }
  }

  handleRemoveFromFavorites = park_id => {    
    return FavoritesApiService.deleteFavorite(park_id)
      .catch(res => (res.error) ? this.setState({ error: res.error }) : this.props.history.push('/'));

  };

  render() {
    const { error, message } = this.state;
    console.log(error, message);
    
    let results = this.context.favorites.map((favorite, i) => {
      return (
        <li key={i} className='Park'>
          <Link to={`/parks/${favorite.park_id}`}>
            <h3 className='Park-Name'>{favorite.park_name}</h3>
          </Link>
          <p>Address: {favorite.park_address}</p>
          <p>Searched City: {favorite.park_city}</p>
          <p>Hours: {favorite.park_hours}</p>
          <p>Average Rating: {Number(favorite.park_rating).toFixed(2)}</p>
          <button
            type="button"
            className='Remove-Button'
            onClick={() =>
              this.handleRemoveFromFavorites(favorite.park_id)
            }
          >
            Remove
          </button>
        </li>
      );
    });


    return (
      <div>
        <div>
          <button className="Go-Back" onClick={() => this.props.history.goBack()}>Go Back</button>
        </div>
        <div>
          <ul className='Results-List'>
            {results}
          </ul>
        </div>
      </div>
    );
  }
}
