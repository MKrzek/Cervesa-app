import React from 'react';
import Suggestions from './Suggestions.js';
import LocalStorage from './LocalStorage.js';
export default class BeerDetailContent extends React.Component{
    render(){
         const {name, image_url, description, abv, brewers_tips} = this.props.detailData
        return  <div className = 'row justify-content-center align-items-center rowDetail'> 
                     <div className='col-md-4 text-center'>
                            <img src={image_url} alt='beer'/>
                            </div> 
                            <div className = 'col-md-8 card'> 
                            <h3 className='text-center card-title mb-4 mt-5'>{name}</h3> 
                            <div className = 'card-body'> <h6 className='text-center mb-2'>{description}</h6>
                             <div className = 'text-center mb-2'> Abv : {abv} </div>
                            <div className='text-center text-muted mb-5'>{brewers_tips}</div>
                                 <LocalStorage beer={this.props.detailData}/> 
                            </div>
                            </div>
                           
                            <div> 
                            <Suggestions detailData={this.props.detailData}/> 
                            </div>
                </div>

        
    }
}