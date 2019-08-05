import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  handleLogoutClick = () => {
  };

  renderLogoutLink() {
    return (
      <div>
        <div>
          <Link to="/favorites">Favorites</Link>
        </div>

        <div>
          <Link to="/" onClick={this.handleLogoutClick}>
            Logout
          </Link>
        </div>
      </div>
    );
  }

  renderLoginLink() {
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

  render() {
    return (
      <nav>
        <h1>
          <Link to="/">Release Me Human!</Link>
        </h1>
        {this.renderLogoutLink()}
      </nav>
    );
  }
}
