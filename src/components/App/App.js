import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import ParkPage from '../../routes/ParkPage/ParkPage';
import ParkListPage from '../../routes/ParkListPage/ParkListPage';
import FavoritesPage from '../../routes/FavoritesPage/FavoritesPage';
import { withRouter } from 'react-router';
import PrivateRoute from '../../Utils/PrivateRoute';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App_header">
          <Header {...this.props} />
        </header>
        <main className="App_main">
          <Switch>
            <Route
              exact
              path={'/'}
              render={props => <LandingPage {...props} />}
            />
            <Route
              path={'/login'}
              render={props => <LoginPage {...props} />}
            />
            <Route path={'/register'} component={RegistrationPage} />
            <Route exact path={'/parks'} component={ParkListPage} />
            <Route
              path={'/parks/:parkId'}
              render={props => <ParkPage {...props} />}
            />
            <PrivateRoute
              path={'/favorites'}
              component={FavoritesPage}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
