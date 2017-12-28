import React from 'react';
import BeerItem from './BeerItem.js';
export default class SuggestionIbu extends React.Component{
constructor(props){
    super(props);
    this.state={
        sugIbu:[],
        loadingIbu: false,
    }
}
   componentDidMount(){
       this.setIbu()
   }
    setIbu = () => {
    const id = this.props.detailData.id
    console.log ('id', id)
    const newIbuArray = this.props.allData.sort((a, b) => {
            return a.ibu - b.ibu
        });
    let indexArray = [];
    let newIndex = null;
    Object.getOwnPropertyNames(newIbuArray).forEach((val, idx, array) => {
            indexArray.push(newIbuArray[val].id)
        });
    if (indexArray.indexOf(id) === newIbuArray.length - 1) {
        newIndex = indexArray.indexOf(id) - 1
    } else {
        newIndex = indexArray.indexOf(id) + 1;
    }
    const sugIbu = newIbuArray[newIndex];
    this.setState({sugIbu, loadingIbu: true})
    console.log ('this.state.sugIbu', this.state.sugIbu)
    

};

render(){  

 return <div>
          {this.state.loadingIbu?(<BeerItem beer = {this.state.sugIbu}/>):null}
        </div>

}
}





