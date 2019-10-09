import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';



export default class LoginPage extends React.Component{

  render(){
    return(
      <div>
        <h2 className='Login-Title'>Login</h2> 
        <LoginForm props={this.props}/>
      </div>
    );
  }
}