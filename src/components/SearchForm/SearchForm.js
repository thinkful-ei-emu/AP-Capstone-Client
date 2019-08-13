import React from 'react'
import ParksContext from '../../context/ParksContext'

export default class SearchForm extends React.Component{

    static contextType = ParksContext

    render(){
        return(
            <form onSubmit={this.context.handleSearchSubmit}>
                <div>
                    <select onChange={e=>this.context.setSearch(e.target.value)}>
                        <option value="Pick a City">Pick A City</option>
                        <option value="Virginia Beach">Virginia Beach</option>
                        <option value="Norfolk">Norfolk</option>
                        <option value="Chesapeake">Chesapeake</option>
                        <option value="Suffolk">Suffolk</option>
                        <option value="Hampton">Hampton</option>
                        <option value="Newport News">Newport News</option>

                    </select>
                </div>

                <div>
                    <button type="submit">Search by City</button>
                </div>
            </form>
        )
    }
}