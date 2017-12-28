import React from 'react';
import axios from 'axios';
//import BeerItem from './BeerItem.js';
import SuggestionIbu from './SugestionIbu.js';
import SuggestionAbv from './SuggestionAbv.js';
import SuggestionEbc from './SuggestionEbc.js';
export default class Suggestions extends React.Component{
    constructor(props){
        super (props);
        this.state={
            allData: [],
            loading: false,    
        };
};
componentDidMount() {
    this.fetchArrays();
   
};

fetchArrays = () => {
    axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=80')
        .then(response => {
            console.log ('response', response.data)
            this.setState({
                allData: response.data,
                loading: true })
        //.catch(error => {
         //  console.log(error);
       // });
})}
            
    render(){
        return <div className='container'> 
                 <div className = 'row justify-content-center align-items-center'> 
                       You may also like: 
                </div>
                <div className='row justify-content-center align-items-center'>
                {this.state.loading?( <SuggestionIbu allData={this.state.allData} detailData={this.props.detailData}/>):null}
                {this.state.loading? (<SuggestionAbv allData={this.state.allData} detailData={this.props.detailData}/>): null}
                {this.state.loading? (<SuggestionEbc allData={this.state.allData} detailData={this.props.detailData}/>): null}
                </div>
               </div>
               
    }
};