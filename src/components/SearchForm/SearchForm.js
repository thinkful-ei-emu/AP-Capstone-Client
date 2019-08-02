import React from 'react'

export default class SearchForm extends React.Component{

    handleSubmit = () =>{}

    //for button might need onClick={()=> history.push('/parks')}

    render(){
        return(
            <form>
                <div>
                <input type="text"  placeholder="Virginia Beach" required/>
                </div>

                <div>
                    
                    <button type="submit">Search by City</button>
    
                </div>
            </form>
        )
    }
}