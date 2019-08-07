import React from "react";
import ParksContext from '../../context/ParksContext'

export default class Favorites extends React.Component {
  
  static contextType = ParksContext
  
  handleDelete = () => {};

  render() {
    let results = this.context.favorites.map(favorite=>{
      return(
        <li key={favorite.park_id}>
          <h3>{favorite.park_name}</h3>
          <p>Address: {favorite.park_address}</p>
          <p>Searched City: {favorite.park_city}</p>
          <p>Hours: {favorite.park_hours}</p>
          <p>Rating: {favorite.park_rating}</p>
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
