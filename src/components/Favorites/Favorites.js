import React from 'react';
import ParksContext from '../../context/ParksContext';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Favorites.css';
import FavoritesApiService from '../../services/favorites-api-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStarHalfAlt, faStreetView, faCity} from '@fortawesome/free-solid-svg-icons';

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
        .catch(res => {
          this.setState({error: res.error});
        });
    }
  }

  handleRemoveFromFavorites = park_id => {    
    return FavoritesApiService.deleteFavorite(park_id)
      .catch(res => (res.error) ? this.setState({ error: res.error }) : this.props.history.push('/'));

  };

  handleErrorClose = () => {
    this.setState({ error: null });
  };

  handleMessageClose = () => {
    this.setState({ message: null });
   
  };

  render() {
    const { error, message } = this.state;
    
    let results = this.context.favorites.map((favorite, i) => {
      return (
        <li key={i} className='Park'>
          <p className='Park-Name-Container'>
            <Link to={`/parks/${favorite.park_id}`}>
              {favorite.park_name}
            </Link>
          </p>
          <p><FontAwesomeIcon icon={faStreetView}/> : {favorite.park_address}</p>
          <p><FontAwesomeIcon icon={faCity}/> : {favorite.park_city}</p>
          <p><FontAwesomeIcon icon={faClock}/> : {favorite.park_hours}</p>
          <p><FontAwesomeIcon icon={faStarHalfAlt}/> : {Number(favorite.park_rating).toFixed(2)}</p>
          <div className='Remove-Button-Container'>
            <button
              type="button"
              className='Remove-Button'
              onClick={() =>
                this.handleRemoveFromFavorites(favorite.park_id)
              }
            >
            Remove
            </button>
          </div>
        </li>
      );
    });


    return (
      <div>
        <div className='Go-Back-Container'>
          <button className="Go-Back" onClick={() => this.props.history.goBack()}>Go Back</button>
        </div>
        <div>
          {message && <div className='messageBox'>{message}<button className='messageButton' aria-label='close' onClick={() => this.handleMessageClose()}>X</button></div>}
          {error && <div className='errorBox'>{error}<button className='errorButton' aria-label='close' onClick={() => this.handleErrorClose()}>X</button></div>}
        </div>
        {this.context.favorites.length === 0 
          ? <div className='Empty-Favorites-Container'>
            <p className='Empty-Favorites'>Your Favorites is Currently Empty</p>
          </div>
          :
          <ul className='Results-list'>
            {results}
          </ul>
        }
      </div>
    );
  }
}
