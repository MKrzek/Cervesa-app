import React from 'react';
import BeerItem from './BeerItem.js';
import _ from 'lodash';
export default class DisplayBeers extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading: false
        }
    }
    
    ShowBeer=()=>{
        return  _.map(this.props.data, beer => {  
                return <BeerItem beer={beer} key={beer.id}/> 
                    
                         
    });
};
    handleClick=()=>{
      this.setState({
          loading: true
    })
    }
    render(){
    const moreBeers = _.map(this.props.dataScrol, beer => {   
          console.log('beer', beer)
                  return <BeerItem beer={beer} key={beer.id}/>
    });
    return <div>
               <div>
                  {this.ShowBeer()}
               </div>
               <div>     
                </div> 
                     <button onClick={this.handleClick}>Show more beer</button>
                   <div>
                        {this.state.loading ? (moreBeers): null}
                   </div>
                </div>
    }
};