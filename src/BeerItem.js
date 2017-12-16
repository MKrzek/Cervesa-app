import React from 'react';
import BeerDetail from './BeerDetail.js';
export default class BeerItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            detail:false,
        }
    }
    
    ShowItem=()=>{
        const{name, tagline, image_url}=this.props.beer;
            
            return <div onClick={this.showDetail}>
                     {name}
                     {tagline}
                     <img src={image_url} alt='beer'/>
                    </div>
       
    }

    showDetail=()=>{
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
