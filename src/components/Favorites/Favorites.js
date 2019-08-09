import React from "react";
import ParksContext from '../../context/ParksContext'
import {Link} from 'react-router-dom'

export default class Favorites extends React.Component {
  
  static contextType = ParksContext
  

  render() {
    let results = this.context.favorites.map(favorite=>{
      return(
        <li key={favorite.park_id}>
          <Link to={`/parks/${favorite.park_id}`}>
          <h3>{favorite.park_name}</h3>
          </Link>
          <p>Address: {favorite.park_address}</p>
          <p>Searched City: {favorite.park_city}</p>
          <p>Hours: {favorite.park_hours}</p>
          <p>Average Rating: {favorite.park_rating}</p>
          <button type="button" onClick={() => this.context.handleRemoveFromFavorites(favorite.park_id)}>Remove</button>
        </li>
      )
    })
    
    return (
      <div>
        <div>
        <button
            onClick={() => this.props.history.goBack()}
          >
            Go Back
          </button>
        </div>
        <ul>
          {results}
        </ul>
      </div>
    );
  }
}
