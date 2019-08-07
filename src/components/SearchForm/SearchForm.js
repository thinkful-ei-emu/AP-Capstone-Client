import React from 'react'
import ParksContext from '../../context/ParksContext'
import {Link} from 'react-router-dom'

export default class SearchForm extends React.Component{

    static contextType = ParksContext

    render(){
        return(
            <form onSubmit={this.context.handleSearchSubmit}>
                <div>
                <input type="text"  placeholder="Virginia Beach" value={this.context.search} onChange={e=>this.context.setSearch(e.target.value)} required/>
                </div>

                <div>
                    
                    <Link to='/parks' >Search by City</Link>
    
                </div>
            </form>
        )
    }
}