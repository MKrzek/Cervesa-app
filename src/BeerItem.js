import React from 'react';
import _ from 'lodash';
export default class BeerItem extends React.Component{
    
    ShowItem=()=>{
        console.log ( 'one beer', this.props.beer)
        return _.map(this.props.beer, item=>{
            return <div>
                     {item.name}
                     {item.tagline}
                    <img src={item.img} alt='beer'/>
                    </div>
        })
    }

    render(){
        
        return <div>
               </div>
    }
}