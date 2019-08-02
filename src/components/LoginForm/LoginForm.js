import React from 'react'

export default class LoginForm extends React.Component{


    handleSubmit = () =>{

    }

    render(){

        return(
            <div>
                <form>
                    <div>
                        <label>Username</label>
                        <input name="user_name" id="LoginForm-user_name" required/>
                    </div>

                    <div>
                        <label>Password</label>
                        <input name="password" id="LoginForm-password" required/>
                    </div>
                    
                </form>
            </div>
        )
    }
}