import React from 'react';
import { Link } from 'react-router-dom';
import ParksContext from '../../context/ParksContext';
import TokenService from '../../services/token-service';
import './Header.css';
import pic from '../../images/cute-cartoon-dog-face-vector-14275452.jpg';

export default class Header extends React.Component {

  static contextType = ParksContext

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.setLoggedIn(false);
  };


  handleIfLoggedIn = () => {
    if(this.context.loggedIn){
      return (
        <div className='Header_logged-in'>
          
          <Link to='/favorites'>Favorites</Link>
        
          <Link to="/" onClick={this.handleLogoutClick}>
              Logout
          </Link>
        
        </div>
      );
    }
    else{
      return (
        <div className='Header_not-logged-in'>
          <Link to="/register">Register</Link>
          <Link to="/Login">Login</Link>
        </div>
      );
    }
  }


  render() {
    return (
      <nav className='Header'>
        <h1 className='Title'>
          <Link to="/">
            <img className='pic' src={pic} alt='logo'></img>
          </Link>
        </h1>
        {this.handleIfLoggedIn()}
      </nav>
    );
  }
}
