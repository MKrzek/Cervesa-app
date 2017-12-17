import React from 'react';
import axios from 'axios';

import BeerItem from './BeerItem.js';
export default class DisplayBeer extends React.Component{
constructor(props){
    super(props);
    this.state={
        detailData:[], 
        sugIbu:[],
        sugAbv:[],
        sugEbc:[]  
    } 
}
componentDidMount(){
    console.log('params', this.props.match.params)
    const {id}=this.props.match.params;
    this.FetchDetailData(id);
   
};

FetchDetailData=(id)=>{
    axios.get(`https://api.punkapi.com/v2/beers/${id}`)
    .then(response=>{
    this.setState({
        detailData:response.data[0]
    });
    this.FetchIbu();
    this.FetchAbv();
    this.FetchEbc();
})
};

FetchIbu=()=>{
    const {ibu}=this.state.detailData;
    console.log ('ibu', ibu)
    axios.get(`https://api.punkapi.com/v2/beers?ibu_gt=${ibu-1}&ibu_lt=${ibu+1}`)
    .then(response=>{
         this.setState({
              sugIbu: response.data[1]
    })
     console.log ('sugIbu', this.state.sugIbu)
    })
};

FetchAbv=()=>{
    const abv=Math.floor(this.state.detailData.abv)
    axios.get(`https://api.punkapi.com/v2/beers?abv_gt=${abv-1}&abv_lt=${abv+1}`)
    .then(response => {
        this.setState({sugAbv: response.data[1]})
        console.log('sugIbu', this.state.sugAbv)
    })
};

FetchEbc=()=>{
    const {ebc} = this.state.detailData;
    axios.get(`https://api.punkapi.com/v2/beers?ebc_gt=${ebc - 1}&ebc_lt=${ebc + 1}`)
    .then(response => {
        this.setState({
            sugEbc: response.data[2]})
       
    })
};


    render(){
        const{name, image_url, description, abv, brewers_tips}=this.state.detailData;
        return(
            <div>
            <div>
                <h3>{name}</h3>
                <img src={image_url} alt='beer'/> 
                <div>{description}</div>
                <div>{abv}</div>
                <div>{brewers_tips}</div>
            </div>
            <div>
                Suggestions: 
                <BeerItem beer={this.state.sugIbu}/>
                <BeerItem beer={this.state.sugAbv}/>
                <BeerItem beer={this.state.sugEbc}/>
            </div>
            </div>
 
        )   
    }
};