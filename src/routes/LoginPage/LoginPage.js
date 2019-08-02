import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'



export default class LoginPage extends React.Component{
    
    handleLoginSuccess(){

    }

    render(){
        return(
            <div>
               <h2>Login</h2> 
               <LoginForm/>
               {/* Pass down handleLoginSuccess */}
            </div>
        )
    }
}