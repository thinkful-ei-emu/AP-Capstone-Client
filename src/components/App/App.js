import React from 'react';
import './App.css';
import Header from '../Header/Header'
import {Route, Switch} from 'react-router-dom'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import ParkPage from '../../routes/ParkPage/ParkPage'
import ParkListPage from '../../routes/ParkListPage/ParkListPage'
import FavoritesPage from '../../routes/FavoritesPage/FavoritesPage'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import TokenService from '../../services/token-service'


class App extends React.Component{

  state = {
    loggedIn: null
  }

  handleLoginSuccess = () => {

    // const {location, history} = this.props

    // const destination = (location.state || {}).from || '/'

    // history.push(destination)

     this.setState({
      loggedIn: true
    })

    
}

handleLogoutClick = () => {
  TokenService.clearAuthToken()
  this.setState({
    loggedIn: false
  })
};

  render(){
    return(
      <div className="App">
        <header>
          <Header state = {this.state} handleLogoutClick={this.handleLogoutClick}/>
        </header>
        <main>
          <Switch>
            <Route exact path ={'/'} component={LandingPage}/>
            <Route path={'/login'} render = {props => <LoginPage onLoginSuccess = {this.handleLoginSuccess}/>}/>
            <PublicOnlyRoute path ={'/register'} component={RegistrationPage}/>
            <PublicOnlyRoute exact path ={'/parks'} component={ParkListPage}/>
            <PublicOnlyRoute path={'/parks/:parkId'} component={ParkPage}/>
            <PrivateRoute path={'/favorites'} component={FavoritesPage}/>
          </Switch>
        </main>

      </div>
    )
  }
}

export default App;
