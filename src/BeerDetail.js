import React from 'react';
import axios from 'axios';
import {RiseLoader} from 'react-spinners';
import BeerDetailContent from './BeerDetailContent.js';
import Navigation from './Navigation.js';

export default class DisplayBeer extends React.Component{
constructor(props){
    super(props);
    this.state={
        detailData:[], 
       
        loading: false, 
        loadingSpinner: true,
    } 
};
 componentDidMount(){
    const {id}=this.props.match.params;
    console.log ('detailid', id)
    this.FetchDetailData(id);
  
  }
   

FetchDetailData=(id)=>{
    axios.get(`https://api.punkapi.com/v2/beers/${id}`)
    .then(response=>{
    this.setState({
        detailData:response.data[0],
        loading: true,
        loadingSpinner: false,
    });   
});
}
    render(){
        
        return <div>
                    <div>
                        <Navigation/>
                    </div>   
                    <div className='container'>                  
                    {this.state.loading
                      ? (<BeerDetailContent detailData={this.state.detailData}/>)
                      : (<div className='sweet-loading'><RiseLoader color={'#123abc'} loading={this.state.loadingSpinner}/></div>)}
                     </div>
                 </div>  
            }
        }
           
            
                 
           
 
           
    




