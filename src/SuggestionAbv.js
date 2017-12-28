import React from 'react';
import BeerItem from './BeerItem.js';
export default class SuggestionAbv extends React.Component{
constructor (props){
    super(props);
    this.state={
        sugAbv:[],
        loadingAbv: false
    }
}
componentDidMount(){
    this.fetchAbv()
};

fetchAbv = () => {
    const id = this.props.detailData.id;
    const newAbvArray = this.props.allData.sort((a, b) => {
            return a.abv - b.abv
        });
    let indexArray = [];
    let newIndex = null;
    Object.getOwnPropertyNames(newAbvArray).forEach((val, idx, array) => {
            indexArray.push(newAbvArray[val].id)
        });
    if (indexArray.indexOf(id) === newAbvArray.length - 1) {
        newIndex = indexArray.indexOf(id) - 1
    } else {
        newIndex = indexArray.indexOf(id) + 1
    };

    const sugAbv = newAbvArray[newIndex];
    this.setState({sugAbv, loadingAbv: true});
    console.log ('sugAbv', sugAbv)

}


    render(){
        return <div>
               {this.state.loadingAbv? (<BeerItem beer={this.state.sugAbv}/>): null}
               </div>

        
    }
}