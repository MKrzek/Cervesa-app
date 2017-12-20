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
    const storedbeer = this.props.beer;
    const beers = JSON.parse(localStorage.getItem('myFavBeers'))||[];
    console.log('beers', beers);
    
    if (beers.length>0){
      for (let i=0; i<beers.length;i++){
        console.log ('dlugos beers', beers.length)
             if (this.props.beer.id===beers[i].id){
                 return false
             }else{
                 console.log('this props beer id', this.props.beer.id)
                 const myFavBeers = [storedbeer, ...beers];
                 console.log('fav in warunek', myFavBeers)
                 localStorage.setItem('myFavBeers', JSON.stringify(myFavBeers))
             }
    }   
} else { const myFavBeers = [storedbeer]
        localStorage.setItem('myFavBeers', JSON.stringify(myFavBeers))

}  
    this.msg.show('Your beer has been saved', {
            time: 2000,
            type: 'success'
        })

    }
    render(){
        return<div>
                 <button onClick = { this.handleAdd} > Add to favourites </button>
                  <AlertContainer ref = { a => this.msg = a} { ...this.alertOptions} />
              </div>
    }
};



