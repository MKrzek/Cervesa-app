import React from 'react';

import axios from 'axios';
import {RiseLoader} from 'react-spinners';
import NavigationFav from './NavigationFav.js';
import DisplayBeers from './DisplayBeers.js';

export default class FetchBeer extends React.Component{
    constructor(props){
        super(props);
        this.state={
           data:[],
           dataScrol:[],
           loading: true,
           allData:[],
           loaderData:false
        }
    }
    componentDidMount(){
        this.FetchBeers();
    }

    FetchBeers=()=>{
        axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=80')
        .then(response=>{
           this.setState({data: response.data.slice(0, 20),
                          dataScrol: response.data.slice(20, 80), 
                          allData: response.data,
                          loaderData: true,
                          loading: false,
        });   
        })
        .catch(error=>{
            console.log(error);
        });     
    }
    render(){
        const data=this.state.data;
        return <div>
                    <NavigationFav/>
                        {this.state.loaderData ? (<DisplayBeers data = {data} dataScrol = {this.state.dataScrol}/>) : null}
                     <div className = 'sweet-loading'> 
                         <RiseLoader color={'#123abc'} loading={this.state.loading}/>
                    </div>
               </div>
    }
}