import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {

  handleIfLoggedIn = () => {
    if(this.props.state.loggedIn === true){
      return (
        <div>
          <div>
            <Link to="/favorites">Favorites</Link>
          </div>
  
          <div>
            <Link to="/" onClick={this.props.handleLogoutClick}>
              Logout
            </Link>
          </div>
        </div>
      ); 
    }
    else{
      return (
        <div>
          <div>
            <Link to="/register">Register</Link>
          </div>
  
          <div>
            <Link to="/Login">Login</Link>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <nav>
        <h1>
          <Link to="/">Release Me Human!</Link>
        </h1>
        {this.handleIfLoggedIn()}
      </nav>
    );
  }
}
