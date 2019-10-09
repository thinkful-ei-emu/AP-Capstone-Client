import React from 'react';
import { Link } from 'react-router-dom';
import ParksContext from '../../context/ParksContext';
import './ParkList.css';
import ParksApiService from '../../services/parks-api-service';

export default class ParkList extends React.Component {

  static contextType = ParksContext

  componentDidMount(){
    ParksApiService.getParks(this.context.search)
      .then(resJson => this.context.setParks(resJson));
  }

  render() {
    let results = this.context.parks.map(park=>{
      return(
        <li key={park.id} className='Park'>
          <Link to={`/parks/${park.id}`}>
            <h3 className='Park-Name'>{park.park_name}</h3>
          </Link>
          <p>Address: {park.park_address}</p>
          <p>City: {park.park_city}</p>
          <p>Hours: {park.park_hours}</p>
          <p>Average Rating: {Number(park.park_rating).toFixed(2)}</p>
        </li>
      );
    });
    
    return (
      <div className='Results-container'>
        <ul className='Results-list'>
          {results}
        </ul>
      </div>
    );
  }
}
