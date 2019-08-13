import React from "react";
import ParksContext from "../../context/ParksContext";
import config from "../../config";

export default class Park extends React.Component {
  static contextType = ParksContext;

  componentDidMount() {
    const { parkId } = this.props.match.params;
    fetch(`${config.API_ENDPOINT}/parks/${parkId}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(resJson => {
        console.log(resJson);

        this.context.setPark({
          park: resJson
        });

      })
      .catch(error => {
        console.error(error);
      });
  }

  handleReviewSubmit = e =>{
    e.preventDefault()

    this.context.handleAddReview(this.context.park.park.id)
  }

  render() {
    const { park } = this.context.park;

    const filteredReviews = this.context.reviews
      .filter(review => `/parks/${review.park_id}` === this.props.match.url)
      .map(review => {
        return (
          <li key={review.id}>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
          </li>
        );
      });

    if (!park) {
      return "Loading";
    }

    return (
      <div>
        <div>
          <button onClick={() => this.props.history.goBack()}>Go Back</button>
          <h3>{park.park_name}</h3>
          <p>Address: {park.park_address}</p>
          <p>Searched City: {park.park_city}</p>
          <p>Hours: {park.park_hours}</p>
          <p>Average Rating: {Number(park.park_rating).toFixed(2)}</p>
        </div>

        <div>
          <h4>Reviews</h4>
          <ul>{filteredReviews}</ul>
        </div>

        <div>
          <form onSubmit={e => this.handleReviewSubmit(e)}>
            <div>
              <label>Add a Review</label>
            </div>
            <div>
              <label>Add a Comment</label>
              <textarea onChange={e=>this.context.setText(e.target.value)} required/>
            </div>

            <div>
              <label>Add a Rating</label>
              <select onChange={e=>this.context.setRating(e.target.value)} required>
                <option value="Select A Rating">Select A Rating</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>

            <div>
              <button type="submit">Add a Review</button>
            </div>
          </form>

          <div>
            <button
              type="button"
              onClick={() => this.context.handleAddToFavorites(park.id)}
            >
              Add To Favorites
            </button>
          </div>
        </div>
      </div>
    );
  }
}
