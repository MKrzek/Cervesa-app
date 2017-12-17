import React from 'react';
import {Link} from 'react-router-dom';
import BeerDetail from './BeerDetail.js';

export default class BeerItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            detail:false,
        }
    }
    
    ShowItem=()=>{
        const{name, tagline, image_url, id}=this.props.beer;
            
            return <div onClick={this.showDetail}>
                     <Link to={`/detail/${id}`}>{name}</Link>
                     {tagline}
                     <img src={image_url} alt='beer'/>
                    </div>
       
    }

    showDetail=()=>{
        let id=this.props.beer.id;
        console.log ('id', id)
        
        this.setState({
            detail: true,
        })
       
    }

    render(){ 
        return <div>
                <div>
                  {this.ShowItem()}
               </div>
               <div>
                      {this.state.detail? (<BeerDetail beer={this.props.beer}/>):null}
                </div>
                
               
              </div>
               
        }
    }
