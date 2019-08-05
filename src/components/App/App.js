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

class App extends React.Component{


  render(){
    return(
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path ={'/'} component={LandingPage}/>
            <Route exact path={'/login'} component={LoginPage}/>
            <Route path ={'/register'} component={RegistrationPage}/>
            <Route exact path ={'/parks'} component={ParkListPage}/>
            <Route path={'/parks/:parkId'} component={ParkPage}/>
            <Route path={'/favorites'} component={FavoritesPage}/>
          </Switch>
        </main>

      </div>
    )
  }
}

export default App;
