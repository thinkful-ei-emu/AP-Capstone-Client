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


class App extends React.Component{

  render(){
    return(
      <div className="App">
        <header>
          <Header/>
        </header>
        <main>
          <Switch>
            <Route exact path ={'/'} component={LandingPage}/>
            <PublicOnlyRoute exact path={'/login'} component={LoginPage}/>
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
