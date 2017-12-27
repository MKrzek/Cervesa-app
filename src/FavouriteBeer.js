import React from 'react';

import FavouriteItem from './FavouriteItem.js';
import NavigationBeer from './NavigationBeer.js';
export default class FavouriteBeer extends React.Component{
constructor(props){
  super(props);
  this.state={
    beers: JSON.parse(localStorage.getItem('myFavBeers'))||[]
  }
}
removeBeer=(beer)=>{
 
  const items=this.state.beers.filter(item=>item.id!==beer)
  
  this.setState({
    beers: items
  });
  console.log('state beer', this.state.beers)
};

displayBeers=()=>{
  return this.state.beers.map(beer=>{
    
    return  <FavouriteItem beer={beer} key={beer.id} removeBeer={this.removeBeer}/>     
  })

};

    render(){
    localStorage.setItem('myFavBeers', JSON.stringify(this.state.beers));
        return <div>
                   <NavigationBeer/>
                    <div className='container'>
                       <div className='row'>
                       {this.displayBeers()}
                       </div>
                    </div>
               </div>

    }
}


