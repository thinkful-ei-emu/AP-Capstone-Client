import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import './LandingPage.css';


export default class LandingPage extends React.Component{
    

  render(){
    return(
      <div className='Landing-Page'>
        <h2>Welcome to Release Me Human!</h2>
        <p>We are a dedicated service to help you find off/no-leash specific dog parks in the Seven Cities to help your furry friend(s) get exercise, socialize, and most importantly, HAVE FUN!</p>
        <SearchForm props={this.props}/>
        <p>To get started: Select a city from the dropdown and hit search! Once you find a park you would like to see more about, you can click on it's name and see a list of reviews!</p>
        <p>You can also register and login to save some of your favorite parks and even leave reviews for parks!</p>
      </div>
    );
  }
}