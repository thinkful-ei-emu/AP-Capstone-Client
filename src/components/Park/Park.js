import React from "react";
//import ParkContext from '../../context/ParksContext'

export default class Park extends React.Component {


  handleRatingSubmit = () => {};

  handleAddToFavorites = () => {

  }

  render() {
    return (
      <div>
        <div>
          <h3>{this.props.park_name}</h3>
          <p>{this.props.park_address}</p>
          <p>{this.props.park_city}</p>
          <p>{this.props.park_hours}</p>
          <p>{this.props.park_rating}</p>
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
              <button type="button">Add To Favorites</button>
            </div>

        </div>
      </div>
    );
  }
}
