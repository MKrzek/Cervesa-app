import React from 'react';
import BeerItem from './BeerItem.js';

import axios from 'axios';
export default class Suggestions extends React.Component{
    constructor(props){
        super (props);
        this.state={
            allData: [],
            loadingIbu: false,
            laodingAbv: false,
            laodingEbc: false,
            sugIbu : [],
            ibuArray:[],
            sugAbv : [],
            abvArray:[],
            sugEbc : [],
            ebcArray:[],
        };
};
componentDidMount() {
    this.FetchArrays();
}

FetchArrays = () => {
    axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=80')
        .then(response => {
            this.setState({
                allData: response.data});    
})
        .catch(error => {
           console.log(error);});
};
 showSuggestions=()=>{
     //this.FetchAbv();
     //this.FetchEbc();
     this.SetIbu();
};       
    
SetIbu = () => {
    const ibu =this.props.detailData.id;
    console.log ('ibu', ibu)
    const newIbuArray = this.state.allData.sort((a, b) => { return a.ibu - b.ibu});
    console.log (newIbuArray)
    const index=newIbuArray.map(beer=>{
        beer.id=ibu
    })
    console.log('indexibu', index)
    const ibuSug=newIbuArray[index+1];
    console.log('ibuSug', ibuSug)
    
            this.setState({sugIbu: ibuSug,
                           loadingIbu:true,})

};

FetchAbv = () => {
    const abv = this.props.detailData.abv;
    console.log('abv', abv)
     console.log(this.state.abvArray);
    const index=this.state.abvArray.indexOf(abv);
    const num=this.state.abvArray[index+1];
     console.log('numabv', num)
    axios.get(`https://api.punkapi.com/v2/beers?abv=${num}`)
        .then(response => {
            this.setState({sugAbv: response.data,
                           loadingAbv: true})
            console.log('sugAbv', this.state.sugAbv)
        })
};
FetchEbc = () => {
    const ebc = this.props.detailData.ebc;
    console.log(this.state.ebcArray);
    const index=this.state.ebcArray.indexOf(ebc);
    const num=this.state.ebcArray[index+1];
    console.log('numebc', num)
    axios.get(`https://api.punkapi.com/v2/beers?ebc=${num}`)
        .then(response => {
            this.setState({sugEbc: response.data,
                           loadingEbc: true})
        });
    console.log('sugEbc', this.state.sugEbc)
};
   
    render(){
        return <div> 
                <button onClick={this.showSuggestions}>Show other similar beers</button>
                {this.state.loadingIbu?(<BeerItem beer={this.state.sugIbu}/>): null}
                {this.state.loadingAbv?(<BeerItem beer={this.state.sugAbv}/>): null}
                {this.state.loadingEbc ?(<BeerItem beer={this.state.sugEbc}/>): null}
               </div>
    }
}