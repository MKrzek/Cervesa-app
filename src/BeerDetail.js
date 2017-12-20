import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Suggestions from './Suggestions.js';
import LocalStorage from './LocalStorage.js';

export default class DisplayBeer extends React.Component{
constructor(props){
    super(props);
    this.state={
        detailData:[], 
      
    } 
}
componentDidMount(){
    console.log('params', this.props.match.params)
    const {id}=this.props.match.params;
    this.FetchDetailData(id);
   
};

FetchDetailData=(id)=>{
    axios.get(`https://api.punkapi.com/v2/beers/${id}`)
    .then(response=>{
    this.setState({
        detailData:response.data[0],
    });
    
})
};
    render(){
        const{name, image_url, description, abv, brewers_tips}=this.state.detailData;
        return(
            <div>
                <nav className = 'navbar navbar-default' > <div className='container-fluid'>
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
                <h3>{name}</h3>
                <img src={image_url} alt='beer'/> 
                <div>{description}</div>
                <div>{abv}</div>
                <div>{brewers_tips}</div>
            </div>
            <div>  
               <LocalStorage beer={this.state.detailData}/>
            </div>
                <Suggestions detailData={this.state.detailData}/>
            </div>
                 
           
 
        )   
    }
}



