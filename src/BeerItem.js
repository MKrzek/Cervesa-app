import React from 'react';

export default class BeerItem extends React.Component{
    
    ShowItem=()=>{
        console.log ('one beer', this.props.beer)
            return <div>
                     {this.props.beer.name}
                     {this.props.beer.tagline}
                    <img src={this.props.beer.image_url} alt='beer'/>
                    </div>
       
    }

    render(){
        return <div>
                  {this.ShowItem()}
               </div>
    }
}