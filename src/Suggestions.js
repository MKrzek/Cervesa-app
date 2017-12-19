import React from 'react';
import BeerItem from './BeerItem.js';

import axios from 'axios';
export default class Suggestions extends React.Component{
    constructor(props){
        super (props);
        this.state={
            
            sugIbu : [],
            sugAbv : [],
            sugEbc : []
        }
    
    } 
    
        
    

FetchIbu = () => {
    const {ibu} = this.state.detailData;
    console.log('ibu', ibu)
    axios
        .get(`https://api.punkapi.com/v2/beers?ibu_gt=${ibu - 1}&ibu_lt=${ibu + 1}`)
        .then(response => {
            this.setState({sugIbu: response.data[1]})
            console.log('sugIbu', this.state.sugIbu)
        })
};

FetchAbv = () => {
    const abv = Math.floor(this.state.detailData.abv)
    axios
        .get(`https://api.punkapi.com/v2/beers?abv_gt=${abv - 1}&abv_lt=${abv + 1}`)
        .then(response => {
            this.setState({sugAbv: response.data[1]})
            console.log('sugAbv', this.state.sugAbv)
        })
};

FetchEbc = () => {
    const {ebc} = this.state.detailData;
    axios
        .get(`https://api.punkapi.com/v2/beers?ebc_gt=${ebc - 1}&ebc_lt=${ebc + 1}`)
        .then(response => {
            this.setState({sugEbc: response.data[1]})
        });
    console.log('sugEbc', this.state.sugEbc)
}
   


    render(){
       console.log ('data', this.props.detailData)
        return <div>
                Suggestions:
                <BeerItem beer={this.state.sugIbu}/>
                <BeerItem beer={this.state.sugAbv}/>
                <BeerItem beer={this.state.sugEbc}/>
               </div>
    }
}