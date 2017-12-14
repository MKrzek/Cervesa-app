import React from 'react';
import BeerItem from './BeerItem.js';
import _ from 'lodash';
export default class DisplayBeers extends React.Component{
    
    ShowBeer=()=>{
        return  _.map(this.props.data.data, beer => { 
                  return <BeerItem beer={beer} key={beer.id}/>                 
    });
};

    render(){
        return <div>
                  {this.ShowBeer()}
               </div>
    }
};