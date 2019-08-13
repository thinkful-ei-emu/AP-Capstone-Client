import React from "react";
import "./App.css";
import Header from "../Header/Header";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../../routes/LandingPage/LandingPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import ParkPage from "../../routes/ParkPage/ParkPage";
import ParkListPage from "../../routes/ParkListPage/ParkListPage";
import FavoritesPage from "../../routes/FavoritesPage/FavoritesPage";
import TokenService from "../../services/token-service";
import config from "../../config";
import ParksContext from "../../context/ParksContext";
import { withRouter } from "react-router";

class App extends React.Component {
  state = {
    parks: [],
    search: "",
    favorites: [],
    reviews: [],
    rating: "",
    text: null,
    park: {}
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/reviews`)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(resJson => {
        console.log(resJson);

        this.setState({
          reviews: resJson
        });
      })
      .catch(error => {
        console.error(error);
      });

    fetch(`${config.API_ENDPOINT}/parks`)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(resJson => {
        console.log(resJson);

        this.setState({
          parks: resJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleSearchSubmit = e => {
    e.preventDefault();

    console.log(this.state.search);

    const url = `${config.API_ENDPOINT}/parks?search=${this.state.search}`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState(
          {
            parks: data
          },
          () => this.props.history.push("parks")
        );
      })
      .catch(err => {
        console.error(err);
      })
      .then(() => {
        this.setState({
          search: ""
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  handleLoginSuccess = () => {

    this.props.history.goBack();
  };

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  setSearch = search => {
    this.setState({
      search
    });
  };

  handleAddToFavorites = parkId => {
    return fetch(`${config.API_ENDPOINT}/favorites`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        park_id: parkId
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then(resJson => {
        this.setState({
          favorites: [...this.state.favorites, resJson]
        });
        console.log("post worked");
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleRemoveFromFavorites = parkId => {
    return fetch(`${config.API_ENDPOINT}/favorites/${parkId}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        if (res.ok) {
          this.props.history.push("/");
          console.log("delete worked");
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleAddReview = parkId => {
    console.log(this.state.rating);
    console.log(this.state.text);
    console.log(parkId);

    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        park_id: parkId,
        rating: Number(this.state.rating),
        text: this.state.text
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then(resJson => {
        // this.props.history.goBack()
        this.setState({
          reviews: [...this.state.reviews, resJson]
        });
        console.log("post worked");
      })
      .then(() => {
        fetch(`${config.API_ENDPOINT}/reviews`)
          .then(res => {
            if (!res.ok) {
              throw new Error(res.statusText);
            }
            return res.json();
          })
          .then(resJson => {
            console.log(resJson);

            this.setState({
              reviews: resJson
            });
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(err => {
        console.error(err);
      });
  };

  setRating = rating => {
    this.setState({
      rating: rating
    });
  };

  setText = text => {
    this.setState({
      text: text
    });
  };

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

  render() {
    return (
      <ParksContext.Provider
        value={{
          parks: this.state.parks,
          search: this.state.search,
          setSearch: this.setSearch,
          onLoginSuccess: this.handleLoginSuccess,
          handleLogoutClick: this.handleLogoutClick,
          handleSearchSubmit: this.handleSearchSubmit,
          favorites: this.state.favorites,
          handleAddToFavorites: this.handleAddToFavorites,
          handleRemoveFromFavorites: this.handleRemoveFromFavorites,
          reviews: this.state.reviews,
          handleAddReview: this.handleAddReview,
          rating: this.state.rating,
          text: this.state.text,
          setRating: this.setRating,
          setText: this.setText,
          setFavorites: this.setFavorites,
          setPark: this.setPark,
          park: this.state.park
        }}
      >
        <div className="App">
          <header>
            <Header {...this.props} />
          </header>
          <main>
            <Switch>
              <Route
                exact
                path={"/"}
                render={props => <LandingPage {...props} />}
              />
              <Route path={"/login"} component={LoginPage} />
              <Route path={"/register"} component={RegistrationPage} />
              <Route exact path={"/parks"} component={ParkListPage} />
              <Route
                path={"/parks/:parkId"}
                render={props => <ParkPage {...props} />}
              />
              <Route
                path={"/favorites"}
                render={props => <FavoritesPage {...props} />}
              />
            </Switch>
          </main>
        </div>
      </ParksContext.Provider>
    );
  }
}

export default withRouter(App);
