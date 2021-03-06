import React from 'react';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import ParksContext from '../../context/ParksContext';
import './LoginForm.css';

export default class LoginForm extends React.Component{

    static contextType = ParksContext

    state = {
      error: null
    }

    handleSubmitJwtAuth = e =>{

      e.preventDefault();

      this.setState({
        error: null,
      });

      const {user_name, password} = e.target;

      AuthApiService.postLogin({
        user_name: user_name.value,
        password: password.value
      })
        .then(res =>{
          user_name.value = '';
          password.value = '';
          TokenService.saveAuthToken(res.authToken);
          this.context.setLoggedIn(true);
          this.props.props.history.goBack();
        })
        .catch(res => {
          this.setState({
            error: res.error
          });
        });

    }

    render(){
      const {error} = this.state; 

      return(
        <div className='LoginForm-Container'>
          <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
            <div role='alert' className="Error-container">
              {error && <p className='Error-Text'>{error}</p>}
            </div>
            <div className='Username-Container'>
              <label htmlFor="LoginForm-Username">Username: </label>
              <input type="text" name="user_name" id="LoginForm-user_name" required/>
            </div>

            <div className='Password-Container'>
              <label htmlFor="LoginForm-Password">Password: </label>
              <input type="password" name="password" id="LoginForm-password" required/>
            </div>

            <div className='Login-Button-Container'>
              <button type="submit">Login</button>
            </div>
                    
          </form>
        </div>
      );
    }
}