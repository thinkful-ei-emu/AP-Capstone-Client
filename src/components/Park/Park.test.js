import React from 'react';

import Park from './Park';

import ReactDOM from 'react-dom';

import ParksContext from '../../context/ParksContext';

import {MemoryRouter} from 'react-router';


it('renders without crashing', () => {

  let match ={
    url: '/api/parks/1',
    params: {
      id: 1
    }
  };

  let park = 
        {
          id: 1,
          park_name: 'Bayville Farms Park',
          park_city: 'Virginia Beach',
          park_address: '4132 First Court Road',
          park_hours: 'Please Consult for Hours: https://www.vbgov.com/government/departments/parks-recreation/parks-trails/city-parks/Documents/park-closing-times.pdf'
        };

  let reviews = [
    {
      id: 1,
      rating: 2,
      text: 'First test review!',
      park_id: 1,
      user_id: 1,
      date_created: new Date('2029-01-22T16:28:32.615Z').toLocaleDateString(),
    },
  ];

  let favorites = [
    {
      id: 1,
      park_name: 'Bayville Farms Park',
      park_city: 'Virginia Beach',
      park_address: '4132 First Court Road',
      park_hours: 'Please Consult for Hours: https://www.vbgov.com/government/departments/parks-recreation/parks-trails/city-parks/Documents/park-closing-times.pdf'
    }
  ];
    

  const div = document.createElement('div');
  ReactDOM.render(
    <ParksContext.Provider
      value={{
        park,
        reviews,
        favorites
      }}>
      <MemoryRouter>
        <Park match={match}/>
      </MemoryRouter>
    </ParksContext.Provider>, div);
  ReactDOM.unmountComponentAtNode(div);

});