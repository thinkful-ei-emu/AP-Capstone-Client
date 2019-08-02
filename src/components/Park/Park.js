import React from "react";

export default class Park extends React.Component {

  handleSubmit = () => {};

  render() {
    return (
      <div>
        <div>
          <p>Park.image maybe</p>
          <p>Park.title</p>
          <p>Park.address</p>
          <p>Park.hours</p>
          <p>Average Rating</p>
        </div>

        <div>
          <form>
            <label>Add a Rating</label>
            <select>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>

            <div>
              <button type="submit">Add Rating</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
