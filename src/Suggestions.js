import React from 'react';
import axios from 'axios';
export default class Suggestions extends React.Component{

    render(){
        const {abv, ebc, ibu, id}=this.props.toCompare;
        console.log ('avb', abv)
        console.log ('ebc', ebc)
        console.log ('ibu', ibu)
        console.log ('id', id)
        return <div>
                Similar beers
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
               </div>
    }
}