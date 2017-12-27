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
            sugAbv : [],
            sugEbc : [],
            display: 'block',
            
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
     this.FetchAbv();
     this.FetchEbc();
     this.SetIbu();
     this.setState({
         display:'none',
     })
};       
    
SetIbu = () => {
    const id =this.props.detailData.id;
    const newIbuArray = this.state.allData.sort((a, b) => {return a.ibu - b.ibu});
    console.log('NewIbuArray', newIbuArray)
    let indexArray=[];
    let newIndex=null;
    Object.getOwnPropertyNames(newIbuArray).forEach(
        (val, idx, array)=>{
             indexArray.push(newIbuArray[val].id)
    }
    );
    if (indexArray.indexOf(id)===newIbuArray.length-1){
        newIndex=indexArray.indexOf(id)-1
    } else{
         newIndex=indexArray.indexOf(id)+1;}
    const sugIbu=newIbuArray[newIndex];
           this.setState({sugIbu,
                         loadingIbu:true
        })
};

FetchAbv = () => {
    const id = this.props.detailData.id;
    const newAbvArray=this.state.allData.sort((a, b)=>{return a.abv -b.abv});
    let indexArray=[];
    let newIndex=null;
    Object.getOwnPropertyNames(newAbvArray).forEach((val, idx, array)=>{
        indexArray.push(newAbvArray[val].id)
    });
    if (indexArray.indexOf(id)===newAbvArray.length-1){
    newIndex=indexArray.indexOf(id)-1
    }else{newIndex=indexArray.indexOf(id)+1};
    const sugAbv=newAbvArray[newIndex];
         this.setState({
             sugAbv,
             loadingAbv: true
  })
}
  
FetchEbc = () => {
    const id = this.props.detailData.id;
    const newEbcArray=this.state.allData.sort((a, b)=>{return a.ebc- b.ebc});
    let indexArray=[];
    let newIndex=null;
    Object.getOwnPropertyNames(newEbcArray).forEach((val, idx, array)=>{
        indexArray.push(newEbcArray[val].id)
    });
    if (indexArray.indexOf(id)===newEbcArray.length-1){
     newIndex=indexArray.indexOf(id)-1;
}else{newIndex=indexArray.indexOf(id)+1};
    const sugEbc=newEbcArray[newIndex];
        this.setState({
            sugEbc,
            loadingEbc: true
        })
};
    render(){
        return <div className='container'> 
                    <div className = 'row justify-content-center align-items-center' >
                
         <button className = 'btn btn-outline-info'  onClick={this.showSuggestions} style={{display:this.state.display}}>You may also like</button>
                {this.state.loadingIbu? (<BeerItem beer={this.state.sugIbu}/>): null}
                {this.state.loadingAbv? (<BeerItem beer={this.state.sugAbv}/>): null}
                {this.state.loadingEbc? (<BeerItem beer={this.state.sugEbc}/>): null}
               </div>
               </div>
    }
}