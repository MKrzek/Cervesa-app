import React from 'react';
import AlertContainer from 'react-alert';

export default class LocalStorage extends React.Component{
    

alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'dark',
    time: 5000,
    transtion: 'fade'
}

handleAdd = (event) => {
    event.preventDefault();
    const beers = JSON.parse(localStorage.getItem('myFavBeers'))||[];
    console.log ('localbeers', beers)
    if (beers.length>0){
      for (let i=0; i<beers.length;i++){
                console.log ('forbeer', beers[i].id)
                console.log('props.beer', this.props.beer.id)
             if (this.props.beer.id===beers[i].id){
                 console.log ('props.beer', this.props.beer.id)
                 return false
             }};
         const myFavBeers = [this.props.beer, ...beers];
         console.log('myFavBeers', myFavBeers)
         localStorage.setItem('myFavBeers', JSON.stringify(myFavBeers))        
    };  

    if (beers.length===0){  
           const myFavBeers = [this.props.beer]
                localStorage.setItem('myFavBeers', JSON.stringify(myFavBeers))

};
 this.msg.show('Your beer has been saved', {
            time: 2000,
            type: 'success'
        })

    }
    render(){
        return<div className='text-center'>
          <button onClick = { this.handleAdd} className = 'btn btn-info bmd-btn-fab'><i className='material-icons'> grade</i></button>
                  <AlertContainer ref = { a => this.msg = a} { ...this.alertOptions} />
              </div>
    }
};



