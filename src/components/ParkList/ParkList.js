import React from "react";
import { Link } from "react-router-dom";
import ParksContext from '../../context/ParksContext'

export default class ParkList extends React.Component {

  static contextType = ParksContext

  render() {

    const results = this.context.parks
    .map(park=>{
      return(
        <li key={park.id}>
          <Link to={`/parks/${park.id}`}>
          <h3>{park.park_name}</h3>
            </Link>
          <p>Address: {park.park_address}</p>
          <p>Searched City: {park.park_city}</p>
          <p>Hours: {park.park_hours}</p>
          <p>Average Rating: {park.park_rating}</p>
        </li>
      )
    })
    console.log(results)

    const filteredResults = results.filter(park => park.park_city === this.context.search)
    // console.log(this.context.parks)

    // let results = this.context.parks.map(park=>{
    //   return(
    //     <li key={park.id}>
    //       <Link to={`/parks/${park.id}`}>
    //       <h3>{park.park_name}</h3>
    //         </Link>
    //       <p>Address: {park.park_address}</p>
    //       <p>Searched City: {park.park_city}</p>
    //       <p>Hours: {park.park_hours}</p>
    //       <p>Average Rating: {park.park_rating}</p>
    //     </li>
    //   )
    // })
    
    return (
      <div>
        <ul>
          {filteredResults}
        </ul>
      </div>
    );
  }
}
