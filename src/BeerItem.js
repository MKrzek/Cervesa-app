import React from 'react';

export default class BeerItem extends React.Component{
    
    ShowItem=()=>{
        const{name, tagline, image_url}=this.props.beer;
            
            return <div>
                     {name}
                     {tagline}
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
