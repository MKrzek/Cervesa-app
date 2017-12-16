import React from 'react';
export default class DisplayBeer extends React.Component{
    render(){
        const{name, brewers_tips, image_url, abv, description}=this.props.beer
        return(
            <div>
                <h3>{name}</h3>
                <img src={image_url} alt='beer'/> 
                <div>{description}</div>
                <div>{abv}</div>
                <div>{brewers_tips}</div>
            </div>
        )

        
    }
}