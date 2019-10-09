import React from 'react';
import ParksContext from '../../context/ParksContext';
import './SearchForm.css';
import ParksApiService from '../../services/parks-api-service';

export default class SearchForm extends React.Component{

    static contextType = ParksContext

    handleSearchSubmit(e){
      e.preventDefault();

      const searchTerm = this.context.search;

      ParksApiService.getParks(searchTerm)
        .then(resJson => {
          this.context.setParks(resJson);
          this.props.props.history.push('/parks');
        });
    }

    render(){
      return(
        <div className='SearchForm-container'>
          <form onSubmit={e => this.handleSearchSubmit(e)} className='SearchForm'>
            <div>
              <select onChange={e=>this.context.setSearchTerm(e.target.value)} className='dropdown'>
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
      );
    }
}