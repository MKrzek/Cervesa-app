import React from 'react';
import axios from 'axios';
import DisplayBeers from './DisplayBeers.js';
export default class FetchBeer extends React.Component{
    constructor(props){
        super(props);
        this.state={
           data:[],
           dataScrol:[]
        }
    }
    componentDidMount(){
        this.FetchBeers();
    }

    FetchBeers=()=>{
        axios.get('https://api.punkapi.com/v2/beers')
        .then(response=>{
          console.log('dlugos', response.data);  
           this.setState({data: response.data.slice(0, 20),
                          dataScrol: response.data.slice(20, 25)    
        })
        })
        .catch(error=>{
            console.log(error);
        });     
    }
    render(){
        const data=this.state.data
        return <div>
                  <DisplayBeers data={data} dataScrol={this.state.dataScrol}/>
               </div>
    }
}