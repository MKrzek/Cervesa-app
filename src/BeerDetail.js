import React from 'react';
import axios from 'axios';
import Suggestions from './Suggestions.js';

export default class DisplayBeer extends React.Component{
constructor(props){
    super(props);
    this.state={
        detailData:[],   
    } 
}
componentDidMount(){
    console.log('params', this.props.match.params)
    const {id}=this.props.match.params;
    this.FetchDetailData(id)
};

FetchDetailData=(id)=>{
    axios.get(`https://api.punkapi.com/v2/beers/${id}`)
    .then(response=>{
    this.setState({
        detailData:response.data[0]
    });
    console.log(this.state.detailData)
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
                <Suggestions toCompare={this.state.detailData}/>
            </div>
            </div>
 
        )   
    }
};