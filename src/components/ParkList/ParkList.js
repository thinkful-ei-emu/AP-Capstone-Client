import React from "react";
import { Link } from "react-router-dom";

export default class ParkList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to={"/parks/:parkId"}>
              <p>Dummy Park Name</p>
            </Link>
            <p>Dummy Park address</p>

            <p>Dummy Average Rating</p>
          </li>

          <li>
            <Link to={"/parks/:parkId"}>
              <p>Dummy Park Name</p>
            </Link>
            <p>Dummy Park address</p>

            <p>Dummy Average Rating</p>
          </li>

          <li>
            <Link to={"/parks/:parkId"}>
              <p>Dummy Park Name</p>
            </Link>
            <p>Dummy Park address</p>
            <p>Dummy Average Rating</p>
          </li>
        </ul>
      </div>
    );
  }
}
