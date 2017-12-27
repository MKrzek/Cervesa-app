import React from 'react';
import axios from 'axios';

import Suggestions from './Suggestions.js';
import LocalStorage from './LocalStorage.js';
import Navigation from './Navigation.js';

export default class DisplayBeer extends React.Component{
constructor(props){
    super(props);
    this.state={
        detailData:[], 
        idParams:this.props.match.params.id
      
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
        if (this.state.idParams!==this.props.match.params.id){
            window.location.reload();
        };
        const{name, image_url, description, abv, brewers_tips}=this.state.detailData;
        return(
            <div>
            <div>
                <Navigation/>
            </div> 
                
            <div className='container'>
              <div className='row justify-content-center align-items-center rowDetail'>
                  <div className='col-md-4 text-center'> <img src={image_url} alt='beer'/>
                  </div>
                  <div className='col-md-8 card'>
                      <h3 className='text-center card-title mb-4 mt-5'>{name}</h3>
                      <div className='card-body'>
                      <h6 className='text-center mb-2'>{description}</h6>
                      <div className='text-center mb-2'>Abv: {abv}</div>
                      <div className='text-center text-muted mb-5'>{brewers_tips}</div>
                       <LocalStorage beer={this.state.detailData}/>
                     </div>
               </div>
               </div>
                <div>
                    <Suggestions detailData={this.state.detailData}/>
                </div>
                </div>
                </div>
           
           
            
                 
           
 
        )   
    }
}



