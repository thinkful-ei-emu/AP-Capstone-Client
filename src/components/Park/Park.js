import React from 'react';
import ParksContext from '../../context/ParksContext';
// import config from '../../config';
import './Park.css';
import ParksApiService from '../../services/parks-api-service';
import FavoritesApiService from '../../services/favorites-api-service';
import ReviewsApiService from '../../services/reviews-api-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStarHalfAlt, faStreetView, faCity, faPencilAlt, faHeart} from '@fortawesome/free-solid-svg-icons';



export default class Park extends React.Component {
  static contextType = ParksContext;

  state = {
    error: null,
    message: '',
    favorited: null,
  }

  componentDidMount() {
    const { parkId } = this.props.match.params;
    ParksApiService.getParkById(parkId)
      .then(resJson => {
        this.context.setPark(resJson);
      })
      .catch(res => {
        this.setState({
          error: res.error
        });
      });

    ReviewsApiService.getAllReviews()
      .then(resJson => {
        this.context.setReviews(resJson);
      })
      .catch(res => {
        this.setState({
          error: res.error
        });
      });

    if(this.context.loggedIn){
      FavoritesApiService.getUserFavorites()
        .then(resJson => {
          this.context.setFavorites(resJson);
        })
        .catch(res => {
          this.setState({
            error: res.error
          });
        });
    }
    
  }
  
  handleAddToFavorites = park_id => {
    if(this.context.loggedIn === null){
      this.props.history.push('/login');
    }
    else{
      FavoritesApiService.addNewFavorite(park_id)
        .then(() => {
          this.setState({
            favorited: true,
          });
        })
        .catch(res => this.setState({ error: res.error }));
    }
  };

  handleAddReview = (e) => {

    e.preventDefault();
    
    if(this.context.loggedIn === null){
      this.props.history.push('/login');
    }
    else{
      let park_id = this.context.park.id;
      let rating = Number(this.context.rating);
      let text = this.context.text;

      let newReview = {
        park_id,
        rating,
        text,
      };

      ReviewsApiService.addNewReview(newReview)
        .then(resJson => {
        // this.props.history.goBack()
          this.context.setReviews([...this.context.reviews, resJson]);
        })
        .catch(res => this.setState({error: res.error}));
    }
  };

  handleErrorClose = () => {
    this.setState({ error: null });
  };

  handleMessageClose = () => {
    this.setState({ message: null });
  };

  render() {
    const { park } = this.context;
    const { error, message } = this.state;

    const filteredReviews = this.context.reviews
      .filter(review => `/parks/${review.park_id}` === this.props.match.url)
      .map(review => {
        return (
          <li key={review.id} className='Single-Review'>
            <p>{review.text}
              <br></br>
              <FontAwesomeIcon icon={faStarHalfAlt}/> : {review.rating}
            </p>
            
          </li>
        );
      });

    let favorites = this.context.favorites.map(favorite => {
      return favorite.park_id;
    });

    if (!park) {
      return 'Loading';
    }

    return (
      <div>
        <div>
          <button className='Go-Back' type='button' onClick={() => this.props.history.goBack()}>Go Back</button>
        </div>
        <div className='Single-Park'>
          <h3 className='Park-Name-Container'>{park.park_name}</h3>
          <p><FontAwesomeIcon icon={faStreetView}/> : {park.park_address}</p>
          <p><FontAwesomeIcon icon={faCity}/> : {park.park_city}</p>
          <p><FontAwesomeIcon icon={faClock}/> : {park.park_hours}</p>
          <p><FontAwesomeIcon icon={faStarHalfAlt}/> : {Number(park.park_rating).toFixed(2)}</p>
        </div>

        {message && <div className='messageBox'>{message}<button className='messageButton' aria-label='close' onClick={() => this.handleMessageClose()}>X</button></div>}
        {error && <div className='errorBox'>{error}<button className='errorButton' aria-label='close' onClick={() => this.handleErrorClose()}>X</button></div>}

        <div className='Add-To-Favorites-Button'>
          {favorites.includes(park.id) || this.state.favorited === true 
            ? <> <p className='Favorited'> <FontAwesomeIcon icon={faHeart}/> Favorited <FontAwesomeIcon icon={faHeart}/></p> 
          </>
            : 
            <button
              type="button"
              className='Add-To-Favorites'
              onClick={() => this.handleAddToFavorites(park.id)}
            >
              Add To Favorites
            </button>
          }
        </div>

        <div className='Reviews-Container'>
          <h2 className='Reviews-Title'>Reviews</h2>
          <ul className='Reviews-List'>{filteredReviews}</ul>
        </div>

        <div className='Add-A-Review-Form-Container'>
          <form onSubmit={(e) => this.handleAddReview(e)} className='Add-A-Review-Form'>
            <div className='Add-A-Review-Label'>
              <label htmlFor='Add-A-Review-Form'>Add a Review</label>
            </div>
            <div className='Add-A-Comment-Label'>
              <label htmlFor='Add-A-Review-Form'></label>
              <div className='textarea-container'>
                <textarea className='textarea' onChange={e=>this.context.setText(e.target.value)} required/>
              </div>
            </div>

            <div className='Add-A-Rating-Label'>
              <label htmlFor='Add-A-Review-Form'></label>
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
              <button type="submit" className='Add-A-Review'>  <FontAwesomeIcon icon={faPencilAlt}/> Add a Review</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
