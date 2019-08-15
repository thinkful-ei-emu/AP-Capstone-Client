import React from 'react';

import ParkList from './ParkList';

import ReactDOM from 'react-dom'


it('renders without crashing', () => {
    
    const div = document.createElement('div');
    ReactDOM.render(<ParkList />, div);
    ReactDOM.unmountComponentAtNode(div);

});