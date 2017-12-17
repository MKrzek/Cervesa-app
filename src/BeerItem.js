import React from 'react';
import {Link} from 'react-router-dom';

export default class BeerItem extends React.Component{
   
    ShowItem=()=>{
        const{name, tagline, image_url, id}=this.props.beer;
            
            return <div onClick={this.showDetail} >
                       <Link to = {`/detail/${id}`}>{name}</Link>
                        <p>{tagline}</p>
                        <img src={image_url} alt='beer'/>
                    </div>
       
    }
    render(){ 
        return <div>
                <div>
                  {this.ShowItem()}
               </div> 
              </div>
               
        }
    }
