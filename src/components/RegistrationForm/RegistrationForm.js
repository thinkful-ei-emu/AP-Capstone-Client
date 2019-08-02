import React from 'react'


export default class RegistrationForm extends React.Component{

    handleSubmit = () =>{

    }

    render(){
        return(
            <form>
                <div>
                    <label>Full Name</label>
                    <input name="full_name" type="text" required/>
                </div>

                <div>
                    <label>Username</label>
                    <input name="user_name" type="text" required/>
                </div>

                <div>
                    <label>Password</label>
                    <input name="password" type="text" required/>
                </div>
                
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        )
    }
}