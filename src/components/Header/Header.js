import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  handleLogoutClick = () => {};

  renderLogoutLink() {
    return (
      <div>
        <Link 
            to="/" 
            onClick={this.handleLogoutClick}
        >
            Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
      return(
          <div>
              <Link
                to="/register"
              >
                Register
              </Link>

              <Link
                to="/Login"
              >
                Login
              </Link>
          </div>
      )
  }

  render() {
    return (
      <nav>
        <h1>
          <Link to="/">Release Me Human!</Link>
        </h1>
        {/* renders working, will need ternery when adding jwt */}
      </nav>
    );
  }
}
