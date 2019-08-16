import React from "react";
import ParksContext from "../../context/ParksContext";
import config from "../../config";
import './Park.css'

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

        this.context.setPark({
          park: resJson
        });

      })
      .catch(err => {
        console.error(err.error);
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
          <li key={review.id} className='Single-Review'>
            <p>{review.text}
            <br></br>
            Rating: {review.rating}
            </p>
            
          </li>
        );
      });

    if (!park) {
      return "Loading";
    }

    return (
      <div>
        <div>
        <button className='Go-Back' type='button' onClick={() => this.props.history.goBack()}>Go Back</button>
        </div>
        <div className='Single-Park'>
          <h3>{park.park_name}</h3>
          <p>Address: {park.park_address}</p>
          <p>City: {park.park_city}</p>
          <p>Hours: {park.park_hours}</p>
          <p>Average Rating: {Number(park.park_rating).toFixed(2)}</p>
        </div>

        <div className='Add-To-Favorites-Button'>
            <button
              type="button"
              className='Add-To-Favorites'
              onClick={() => this.context.handleAddToFavorites(park.id)}
            >
              Add To Favorites
            </button>
          </div>

        <div className='Reviews-Container'>
          <h2 className='Reviews-Title'>Reviews</h2>
          <ul className='Reviews-List'>{filteredReviews}</ul>
        </div>

        <div className='Add-A-Review-Form-Container'>
          <form onSubmit={e => this.handleReviewSubmit(e)} className='Add-A-Review-Form'>
            <div className='Add-A-Review-Label'>
              <label htmlFor='Add-A-Review-Form'>Add a Review</label>
            </div>
            <div className='Add-A-Comment-Label'>
              <label htmlFor='Add-A-Review-Form'>Add a Comment: </label>
              <div className='textarea-container'>
              <textarea className='textarea' onChange={e=>this.context.setText(e.target.value)} required/>
              </div>
            </div>

            <div className='Add-A-Rating-Label'>
              <label htmlFor='Add-A-Review-Form'>Add a Rating: </label>
              <div className='select-container'>
              <select onChange={e=>this.context.setRating(e.target.value)} required>
                <option value="Select A Rating">Select A Rating</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
              </div>
            </div>

            <div className='Add-A-Review-Button'>
              <button type="submit" className='Add-A-Review'>Add a Review</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
