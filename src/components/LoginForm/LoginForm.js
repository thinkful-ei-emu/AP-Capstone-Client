import React from 'react'

export default class LoginForm extends React.Component{


    handleSubmit = () =>{

    }

    render(){

        return(
            <div>
                <form className="LoginForm">
                    <div>
                        <label>Username</label>
                        <input name="user_name" id="LoginForm-user_name" required/>
                    </div>

                    <div>
                        <label>Password</label>
                        <input name="password" id="LoginForm-password" required/>
                    </div>

                    <div>
                        <button type="submit">Login</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}