import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import DisplayBeers from './DisplayBeers.js';

export default class FetchBeer extends React.Component{
    constructor(props){
        super(props);
        this.state={
           data:[],
           dataScrol:[]
        }
    }
    componentDidMount(){
        this.FetchBeers();
    }

    FetchBeers=()=>{
        axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=80')
        .then(response=>{
          console.log('dlugos', response.data);  
           this.setState({data: response.data.slice(0, 20),
                          dataScrol: response.data.slice(20, 80)    
        })
        })
        .catch(error=>{
            console.log(error);
        });     
    }
    render(){
        const data=this.state.data
        return <div>
                    <nav className = 'navbar navbar-default' > 
                        <div className='container-fluid'>
                            <div className='navbar-header'>
                                 <h2 className='navbar-brand'>Your Cervesa App</h2 >
                             </div>
                        <ul className='nav navbar-nav navbar-right'>
                             <li className='nav-item' key={1}>
                               <Link className='nav-link' to='/favourite'>Your favourites</Link>
                             </li>
                        </ul>
                        </div> 
                    </nav>
                <DisplayBeers data={data} dataScrol={this.state.dataScrol}/>
               </div>
    }
}