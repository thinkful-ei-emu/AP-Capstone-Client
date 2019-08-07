import React from 'react'
import Favorites from '../../components/Favorites/Favorites'


export default class FavoritesPage extends React.Component{
    

    render(){
        return(
            <div>
                <h2>Favorites Page</h2>
                <Favorites {...this.props}/>
            </div>
        )
    }
}