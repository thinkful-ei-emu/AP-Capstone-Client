import React from 'react'
import ParksContext from '../../context/ParksContext'

export default class SearchForm extends React.Component{

    static contextType = ParksContext

    render(){
        return(
            <form onSubmit={this.context.handleSearchSubmit}>
                <div>
                    <input type="text"  placeholder="Virginia Beach" value={this.context.search} onChange={e=>this.context.setSearch(e.target.value)} required/>
                </div>

                <div>
                    <button type="submit">Search by City</button>
                </div>
            </form>
        )
    }
}