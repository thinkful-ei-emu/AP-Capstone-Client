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
import TokenService from '../../services/token-service'
import config from '../../config'
import ParksContext from '../../context/ParksContext'


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
      <ParksContext.Provider
        value={{
          parks: this.state.parks,
          loggedIn: this.state.loggedIn,
          search: this.state.search,
          setSearch: this.setSearch,
          handleLoginSuccess: this.handleLoginSuccess,
          handleLogoutClick: this.handleLogoutClick,
          handleSearchSubmit: this.handleSearchSubmit
        }}
        >
      <div className="App">
        <header>
          <Header/>
        </header>
        <main>
          <Switch>
            <Route exact path ={'/'} render={props=> <LandingPage {...props}/>}/>
            <Route path={'/login'} component={LoginPage}/>
            <Route path ={'/register'} component={RegistrationPage}/>
            <Route exact path ={'/parks'} component={ParkListPage}/>
            <Route path={'/parks/:parkId'} component={ParkPage}/>
            <Route path={'/favorites'} component={FavoritesPage}/>
          </Switch>
        </main>

      </div>
      </ParksContext.Provider>
    )
  }
}

export default App;
