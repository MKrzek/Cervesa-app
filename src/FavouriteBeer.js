import React from 'react';
import {Link} from 'react-router-dom';
import BeerItem from './BeerItem.js';
export default class FavouriteBeer extends React.Component{



displayBeers=()=>{
  const beers=JSON.parse(localStorage.getItem('myFavBeers'))||[];
  console.log ('beers', beers);
  return beers.map(beer=>{
    console.log('beer', beer)
    return <BeerItem beer={beer} key={beer.id}/>
  })

};

    render(){
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
                    <div>
                       {this.displayBeers()}
                    </div>
               </div>

    }
}