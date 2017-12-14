import React from 'react';
import axios from 'axios';
import DisplayBeers from './DisplayBeers.js';
export default class FetchBeer extends React.Component{
    constructor(props){
        super(props);
        this.state={
           data:[],
        }
    }
    componentDidMount(){
        this.FetchBeers();
    }

    FetchBeers=()=>{
        axios.get('https://api.punkapi.com/v2/beers')
        .then(response=>{
            console.log(response);  
           this.setState({data: response})
           console.log ('dataxxx', this.state.data)
        })
        
        .catch(error=>{
            console.log(error);
        });     
    }
    render(){
        const data=this.state.data
        return <div>
                  <DisplayBeers data={data}/>
               </div>
    }
}