import React from 'react';
import {Link} from 'react-router-dom';

export default class BeerItem extends React.Component{
   
    ShowItem=()=>{
        const{name, tagline, image_url, id}=this.props.beer;
            
            return   <div onClick={this.showDetail} className='col card beerItem'>
                            <div className = 'text-center'> <img src={image_url} alt='beer'/> </div>
                             <div className = 'text-center'> <Link className= 'btn btn-info btn-wrap-text' to={`/detail/${id}`}>{name}</Link> </div>
                            <p className='text-center tagLine'>{tagline}</p>
                     </div>
                  
                  
       
    }
    render(){ 
        return <div>
                  {this.ShowItem()}
               </div> 
            
            
               
        }
    }