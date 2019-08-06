import React from 'react'
import SearchForm from '../../components/SearchForm/SearchForm'


export default class LandingPage extends React.Component{
    

    render(){
        return(
            <div>
                <p>Landing Page</p>
                <SearchForm setSearch={this.props.setSearch} state={this.props.state} handleSearchSubmit={this.props.handleSearchSubmit} {...this.props}/>
            </div>
        )
    }
}