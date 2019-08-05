import React from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'


export default class RegistrationPage extends React.Component{
    

    handleRegistrationSuccess = user => {
        const {history} = this.props

        history.push('/login')
    }


    render(){
        return(
            <div>
                <h2>Registration Page</h2>
                <RegistrationForm onRegistrationSuccess = {this.handleRegistrationSuccess}/>
            </div>
        )
    }
}