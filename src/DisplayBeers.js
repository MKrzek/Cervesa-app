import React from 'react';
import BeerItem from './BeerItem.js';
import _ from 'lodash';
export default class DisplayBeers extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading: false,
            display: 'block',
            noDisplay: 'none'
        };
    };

    //componentDidMount(){
     //   window.addEventListener('scroll', this.handleClick);
    //};
    //componentWillUnmount(){
    ///    window.removeEventListener('scroll', this.handleClick);
    //};*/}

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
    return <div>
                <div>
                  {this.ShowBeer()}
                </div>
                <div> 
                     <button onClick={this.handleClick} style={{display: this.state.display}}>Show more beer</button>
                     
                   </div>
                   <div>
                        {this.state.loading ? (moreBeers): null}
                        <h3 style={{display: this.state.noDisplay}}>No more beer to display</h3>

                </div>
            </div>
    }
};