import React from 'react'
import ParksContext from '../../context/ParksContext'
import './SearchForm.css'

export default class SearchForm extends React.Component{

    static contextType = ParksContext

    render(){
        return(
        <div className='SearchForm-container'>
            <form onSubmit={this.context.handleSearchSubmit} className='SearchForm'>
                <div>
                    <select onChange={e=>this.context.setSearch(e.target.value)} className='dropdown'>
                        <option value="Pick a City">All Parks</option>
                        <option value="Virginia Beach">Virginia Beach</option>
                        <option value="Norfolk">Norfolk</option>
                        <option value="Chesapeake">Chesapeake</option>
                        <option value="Suffolk">Suffolk</option>
                        <option value="Hampton">Hampton</option>
                        <option value="Newport News">Newport News</option>

                    </select>
                </div>

                <div className='button-container'>
                    <button type="submit" className='search-button'>Search</button>
                </div>
            </form>
        </div>
        )
    }
}