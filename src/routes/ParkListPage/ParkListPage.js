import React from 'react'
import ParkList from '../../components/ParkList/ParkList'


export default class ParkListPage extends React.Component{
    

    render(){
        return(
            <div>
                <p>Park List Page</p>
                <ParkList parks={this.props.parks}/>
            </div>
        )
    }
}