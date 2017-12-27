import React from 'react';
import BeerItem from './BeerItem.js';

import _ from 'lodash';
export default class DisplayBeers extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading: false,
            display: 'block',
            noDisplay: 'none', 
           

        };
    };
    ///componentDidMount(){
     ///   window.addEventListener('scroll', this.handleClick);
///};
  ///  componentWillUnmount(){
     ///   window.removeEventListener('scroll', this.handleClick);
   /// };

    

    ShowBeer=()=>{
        return  _.map(this.props.data, beer => {  
                return <BeerItem beer={beer} key={beer.id}/>                      
    });
};

    handleClick=()=>{
      this.setState({
          loading: true,
          display: 'none',
          noDisplay:'block',
    });
    };
    render(){
    const moreBeers = _.map(this.props.dataScrol, beer => {   
          return   <BeerItem beer={beer} key={beer.id}/>                  
    });

    return <div className='container'>
                <div className='row'>
                  {this.ShowBeer()}
                 </div>
                 <div className= 'row justify-content-center'> 
                     <button className='btn btn-info mt-5 mb-5' onClick={this.handleClick} style={{display: this.state.display}}>Show more beer</button>     
                </div>
                   <div className='row'>
                        {this.state.loading ? (moreBeers): null}
                   </div>
                   <div className='row justify-content-center'>    
                           <h3 className='alert alert-dark mt-5 mb-5' style={{display: this.state.noDisplay}}>No more beer to display</h3>
                    </div>
            </div>
    }
};