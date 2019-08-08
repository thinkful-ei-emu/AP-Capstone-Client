import React from "react";
import ParksContext from "../../context/ParksContext";

export default class Park extends React.Component {

  static contextType = ParksContext
  
  handleRatingSubmit = () => {};

  render() {

    const park = this.context.parks.find(
      park => `/parks/${park.id}` === this.props.match.url
    )

    if(!park){
      return 'Page Not Found'
    }

    return (
      <div>
        <div key={park.id}>
        <button
            onClick={() => this.props.history.goBack()}
          >
            Go Back
          </button>
          <h3>{park.park_name}</h3>
          <p>Address: {park.park_address}</p>
          <p>Searched City: {park.park_city}</p>
          <p>Hours: {park.park_hours}</p>
          <p>Rating: {park.park_rating}</p>
        </div>

        <div>
          <form>
            <label>Add a Rating</label>
            <select>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>

            <div>
              <button type="submit">Add Rating</button>
            </div>
            
          </form>

          <div>
              <button type="button" onClick={this.context.handleAddToFavorites}>Add To Favorites</button>
            </div>

        </div>
      </div>
    );
  }
}
