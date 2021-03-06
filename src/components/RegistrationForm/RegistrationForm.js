import React from 'react';
import AuthApiService from '../../services/auth-api-service';
import ParksContext from '../../context/ParksContext';
import './RegistrationForm.css';

export default class RegistrationForm extends React.Component {
  
  static contextType = ParksContext
  
  state = {
    error: null
  };

  handleSubmit = e => {
    e.preventDefault();

    const { full_name, user_name, password } = e.target;

    this.setState({
      error: null
    });

    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value
    })
      .then(user => {
        user_name.value = '';
        password.value = '';
        full_name.value = '';
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({
          error: res.error
        });
      });
  };

  render() {
    const { error } = this.state;

    return (
      <form className='registration-form' onSubmit={this.handleSubmit}>
        <div role="alert" className='Error-Container'>{error && <p className='Error-Text'>{error}</p>}</div>

        <div className='full_name'>
          <label htmlFor='registration-form-full_name'>Full Name: </label>
          <input name="full_name" type="text" required />
        </div>

        <div className='user_name'>
          <label htmlFor='registration-form-user_name'>Username: </label>
          <input name="user_name" type="text" required />
        </div>

        <div className='password'>
          <label htmlFor='registration-form-password'>Password: </label>
          <input name="password" type="password" required />
        </div>

        <div>
          <button type="submit" className='Register-Button'>Register</button>
        </div>
      </form>
    );
  }
}
