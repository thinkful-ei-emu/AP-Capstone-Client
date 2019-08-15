import React from 'react';

import Favorites from './Favorites';

import ReactDOM from 'react-dom'

import ParksContext from '../../context/ParksContext'

import { MemoryRouter} from 'react-router'


it('renders without crashing', () => {

    let favorites = [
        {
            id: 1,
            park_name: "Bayville Farms Park",
            park_city: "Virginia Beach",
            park_address: "4132 First Court Road",
            park_hours: "Please Consult for Hours: https://www.vbgov.com/government/departments/parks-recreation/parks-trails/city-parks/Documents/park-closing-times.pdf"
          },
          {
            id: 4,
            park_name: "Maple Avenue Dog Park",
            park_city: "Norfolk",
            park_address: "176 Maple Ave",
            park_hours: "7 AM - 6 PM"
            
          },
          {
            id: 12,
            park_name: "Chesapeake City Park",
            park_city: "Chesapeake",
            park_address: "900 City Park Drive",
            park_hours: "7 AM - 8 PM"
          }
    ]
    

    const div = document.createElement('div');
    ReactDOM.render(
        <ParksContext.Provider
        value={{
            favorites,
        }}>
            <MemoryRouter>
                <Favorites/>
            </MemoryRouter>
        </ParksContext.Provider>, div);
    ReactDOM.unmountComponentAtNode(div);

});