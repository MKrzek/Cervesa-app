import React from 'react';
import BeerItem from './BeerItem.js';
import _ from 'lodash';
export default class DisplayBeers extends React.Component{
    
    ShowBeer=()=>{
        console.log('this.props.data', this.props.data)
        return  _.map(this.props.data, beer => { 
                    
                    console.log ('beer', beer)
                    
                    return <BeerItem beer={beer} key={beer.id}/> 
                    
                         
    });
};

    render(){
        return <div>
                  {this.ShowBeer()}
               </div>
    }
};