import React from "react";
import { Link } from "react-router-dom";

export default class ParkList extends React.Component {

  render() {
    console.log(this.props.parks)
    let results = this.props.parks.map(park=>{
      return(
        <li key={park.id}>
          <Link to={`/api/parks/${park.id}`}>
          <h3>{park.park_name}</h3>
            </Link>
          <p>{park.park_address}</p>
          <p>{park.park_city}</p>
          <p>{park.park_hours}</p>
          <p>{park.park_rating}</p>
        </li>
      )
    })
    
    return (
      <div>
        <ul>
          {results}
        </ul>
      </div>
    );
  }
}
