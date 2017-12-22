import React from 'react';
import {Link} from 'react-router-dom';
import FavouriteItem from './FavouriteItem.js';
export default class FavouriteBeer extends React.Component{
constructor(props){
  super(props);
  this.state={
    beers: JSON.parse(localStorage.getItem('myFavBeers'))||[]
  }
}
removeBeer=(beer)=>{
 
  const items=this.state.beers.filter(item=>item.id!==beer)
  console.log ('items', items)
  this.setState({
    beers: items
  });
  console.log('state beer', this.state.beers)
};

displayBeers=()=>{
  return this.state.beers.map(beer=>{
    console.log('beer', beer)
    return  <FavouriteItem beer={beer} key={beer.id} removeBeer={this.removeBeer}/>     
  })

};

    render(){
    localStorage.setItem('myFavBeers', JSON.stringify(this.state.beers));
        return <div>
                    <nav className = 'navbar navbar-default'> 
                         <div className='container-fluid'>
                           <div className='navbar-header'>
                             <h2 className='navbar-brand'>Your Cervesa App</h2>
                           </div>
                          <ul className='nav navbar-nav navbar-right'>
                             <li className='nav-item' key={1}>
                                  <Link className='nav-link' to='/detail'>Beers</Link>
                             </li>
                            
                          </ul>
                        </div> 
                    </nav>
                    <div className='container'>
                       <div className='row'>
                       {this.displayBeers()}
                       </div>
                    </div>
               </div>

    }
}


