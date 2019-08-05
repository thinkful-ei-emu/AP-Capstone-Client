import React from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service';


export default class LoginForm extends React.Component{

    state = {
        error: null,
    }


    handleSubmitJwtAuth = e =>{

        e.preventDefault()

        this.setState({
            error: null,
        })

        const {user_name, password} = e.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value
        })
            .then(res =>{
                user_name.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({
                    error: res.error
                })
            })

    }

    render(){

        return(
            <div>
                <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
                    <div>
                        <label>Username</label>
                        <input type="text" name="user_name" id="LoginForm-user_name" required/>
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="password" name="password" id="LoginForm-password" required/>
                    </div>

                    <div>
                        <button type="submit">Login</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}