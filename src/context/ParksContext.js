import React, { Component } from 'react';
import TokenService from '../services/token-service';

const ParksContext = React.createContext({
  parks: [],
  search: '',
  favorites: [],
  reviews: [],
  rating: '',
  text: null,
  park: {},
  loggedIn: null,
  setReviews: () => { },
  setRating: () => { },
  setText: () => { },
  setRide: () => { },
  setFavorites: () => { },
  setSearchTerm: () => { },
  setParks: () => { },
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
      park: {},
      loggedIn: TokenService.getAuthToken(),
    };
  }

  setLoggedIn = loggedIn => {
    this.setState({
      loggedIn
    });
  }

  setParks = parks => {
    this.setState({
      parks
    });
  }
  setRating = rating => {
    this.setState({
      rating
    });
  };

  setSearchTerm = search => {
    this.setState({
      search
    });
  }

  setText = text => {
    this.setState({
      text
    });
  };

  setReviews = reviews => {
    this.setState({
      reviews
    });
  }

  setFavorites = favorites => {
    this.setState({
      favorites
    });
  };

  setPark = park => {
    this.setState({
      park
    });
  };

  render(){
    const value = {
      parks: this.state.parks,
      search: this.state.search,
      favorites: this.state.favorites,
      reviews: this.state.reviews,
      rating: this.state.rating,
      text: this.state.text,
      park: this.state.park,
      setPark: this.setPark,
      setReviews: this.setReviews,
      setFavorites: this.setFavorites,
      setRating: this.setRating,
      setText: this.setText,
      setSearchTerm: this.setSearchTerm,
      setParks: this.setParks,
      loggedIn: this.state.loggedIn,
      setLoggedIn: this.setLoggedIn,
    };
    return (
      <ParksContext.Provider value={value}>
        {this.props.children}
      </ParksContext.Provider>
    );
  }
}