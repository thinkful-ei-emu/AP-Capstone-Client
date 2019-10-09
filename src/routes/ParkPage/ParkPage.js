import React from 'react';
import Park from '../../components/Park/Park';
import './ParkPage.css';


export default class ParkPage extends React.Component{
    

  render(){
    return(
      <div>
        <Park {...this.props}/>
      </div>
    );
  }
}