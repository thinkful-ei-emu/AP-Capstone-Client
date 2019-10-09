import React from 'react';
import ParkList from '../../components/ParkList/ParkList';


export default class ParkListPage extends React.Component{
    

  render(){
    return(
      <div>
        <h2>Some Places to Take You Furry Friend(s)</h2>
        <ParkList/>
      </div>
    );
  }
}