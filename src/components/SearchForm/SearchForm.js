import React from 'react'

export default class SearchForm extends React.Component{



    render(){
        return(
            <form onSubmit={this.props.handleSearchSubmit}>
                <div>
                <input type="text"  placeholder="Virginia Beach" value={this.props.state.search} onChange={e=>this.props.setSearch(e.target.value)} required/>
                </div>

                <div>
                    
                    <button type="submit" >Search by City</button>
    
                </div>
            </form>
        )
    }
}