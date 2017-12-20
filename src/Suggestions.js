import React from 'react';
import BeerItem from './BeerItem.js';

import axios from 'axios';
export default class Suggestions extends React.Component{
    constructor(props){
        super (props);
        this.state={
            loadingIbu:false,
            laodingAbv: false,
            laodingEbc: false,
            sugIbu : [],
            sugAbv : [],
            sugEbc : []
        };
    
    };
   
 showSuggestions=()=>{
     this.FetchAbv();
     this.FetchEbc();
     this.FetchIbu();
 }       
    

FetchIbu = () => {
    const ibu = Math.floor(this.props.detailData.ibu);
    console.log('ibu', ibu)
    axios
        .get(`https://api.punkapi.com/v2/beers?ibu_gt=${ibu - 1}&ibu_lt=${ibu + 1}`)
        .then(response => {
            this.setState({sugIbu: response.data[1],
                            loadingIbu:true,
                            })
            console.log('sugIbu', this.state.sugIbu)
        })
};

FetchAbv = () => {
    const abv = Math.floor(this.props.detailData.abv)
    axios
        .get(`https://api.punkapi.com/v2/beers?abv_gt=${abv - 1}&abv_lt=${abv + 1}`)
        .then(response => {
            this.setState({sugAbv: response.data[1],
                           loadingAbv: true})
            console.log('sugAbv', this.state.sugAbv)
        })
};
FetchEbc = () => {
    const ebc = Math.floor(this.props.detailData.ebc);
    axios
        .get(`https://api.punkapi.com/v2/beers?ebc_gt=${ebc - 1}&ebc_lt=${ebc + 1}`)
        .then(response => {
            this.setState({sugEbc: response.data[1],
                           loadingEbc: true})
        });
    console.log('sugEbc', this.state.sugEbc)
}
   


    render(){
       console.log ('data', this.props.detailData)
        return <div>
                
                <button onClick={this.showSuggestions}>Show other similar beers</button>
                {this.state.loadingIbu?(<BeerItem beer={this.state.sugIbu}/>): null}
                {this.state.loadingAbv?(<BeerItem beer={this.state.sugAbv}/>):null}
                {this.state.loadingEbc ?(<BeerItem beer={this.state.sugEbc}/>) : null}
               </div>
    }
}