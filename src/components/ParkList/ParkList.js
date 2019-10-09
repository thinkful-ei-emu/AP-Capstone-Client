import React from 'react';
import { Link } from 'react-router-dom';
import ParksContext from '../../context/ParksContext';
import './ParkList.css';
import ParksApiService from '../../services/parks-api-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStarHalfAlt, faStreetView, faCity} from '@fortawesome/free-solid-svg-icons';

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
          <p className='Park-Name-Container'>
            <Link to={`/parks/${park.id}`}>
              {park.park_name}
            </Link>
          </p>
          <p><FontAwesomeIcon icon={faStreetView}/> : {park.park_address}</p>
          <p><FontAwesomeIcon icon={faCity}/> : {park.park_city}, VA</p>
          <p><FontAwesomeIcon icon={faClock}/> : {park.park_hours}</p>
          <p><FontAwesomeIcon icon={faStarHalfAlt}/> : {Number(park.park_rating).toFixed(2)}</p>
        </li>
      );
    });
    
    return (
      <ul className='Results-list'>
        {results}
      </ul>

    );
  }
}
