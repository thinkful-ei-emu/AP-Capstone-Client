import React, { Component } from 'react';

const ParksContext = React.createContext({
  parks: [],
  search: '',
  favorites: [],
  reviews: [],
  rating: '',
  text: null,
  park: {},
});

export default ParksContext;

export class ParksProvider extends Component{
  constructor(props){
    super(props);
    this.state = {
      parks: [],
      search: '',
      favorites: [],
      reviews: [],
      rating: '',
      text: null,
      park: {}
    };
  }

  render(){
    const value = {

    };
    return (
      <ParksContext.Provider value={value}>
        {this.props.children}
      </ParksContext.Provider>
    );
  }
}