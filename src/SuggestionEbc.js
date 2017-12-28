import React from 'react';
import BeerItem from './BeerItem.js';
export default class SuggestionEbc extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sugEbc:[],
            loadingEbc: false
        }
    }
componentWillMount(){
    this.fetchEbc()
};

fetchEbc = () => {
    const id = this.props.detailData.id;
    const newEbcArray = this.props.allData.sort((a, b) => {
            return a.ebc - b.ebc
        });
    let indexArray = [];
    let newIndex = null;
    Object
        .getOwnPropertyNames(newEbcArray)
        .forEach((val, idx, array) => {
            indexArray.push(newEbcArray[val].id)
        });

    if (indexArray.indexOf(id) === newEbcArray.length - 1) {
        newIndex = indexArray.indexOf(id) - 1;
    } else {
        newIndex = indexArray.indexOf(id) + 1
    };
    const sugEbc = newEbcArray[newIndex];
    this.setState({sugEbc, loadingEbc: true});

};


render(){
    return <div>
             {this.state.loadingEbc ? (<BeerItem beer={this.state.sugEbc}/>):null}
           </div>
}

}