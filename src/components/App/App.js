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
// import PrivateRoute from '../Utils/PrivateRoute'
// import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import TokenService from '../../services/token-service'
import config from '../../config'


class App extends React.Component{

  state = {
    loggedIn: null,
    parks: [],
    search: '',
  }

  handleSearchSubmit = e =>{

    e.preventDefault()

    const url = `${config.API_ENDPOINT}/parks?search=${this.state.search}`
    

    fetch(url)
        .then(res=>{
            if(!res.ok){
                throw new Error(res.statusText)
            }
            return res.json()
        })
        .then(data=>{
            console.log(data)
            this.setState({
                parks: data,
            }
            )
            console.log(this.state.parks)
  
        })
        .catch(err=>{
            console.error(err)
        })
}

  handleLoginSuccess = () => {

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

setSearch = search => {
  this.setState({
    search,
  })
}

  render(){
    return(
      <div className="App">
        <header>
          <Header state = {this.state} handleLogoutClick={this.handleLogoutClick}/>
        </header>
        <main>
          <Switch>
            <Route exact path ={'/'} render={props=> <LandingPage setSearch={this.setSearch} state={this.state} handleSearchSubmit={this.handleSearchSubmit} {...props}/>}/>
            <Route path={'/login'} render = {props => <LoginPage onLoginSuccess = {this.handleLoginSuccess}/>}/>
            <Route path ={'/register'} component={RegistrationPage}/>
            <Route exact path ={'/parks'} render={props=> <ParkListPage parks={this.state.parks}/>}/>
            <Route path={'/parks/:parkId'} component={ParkPage}/>
            <Route path={'/favorites'} component={FavoritesPage}/>
          </Switch>
        </main>

      </div>
    )
  }
}

export default App;
