import React from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import './RegistrationPage.css'


export default class RegistrationPage extends React.Component{
    

    handleRegistrationSuccess = user => {
        const {history} = this.props

        history.push('/')
    }


    render(){
        return(
            <div>
                <h2 className='Registration-Title'>Registration Page</h2>
                <RegistrationForm onRegistrationSuccess = {this.handleRegistrationSuccess}/>
            </div>
        )
    }
}