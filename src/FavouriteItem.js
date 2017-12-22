import React from 'react';
import {Link} from 'react-router-dom';

export default class FavouriteItem extends React.Component {

handleClick=()=>{
    this.props.removeBeer(this.props.beer.id)
}

    ShowItem = () => {
        const {name, tagline, image_url, id} = this.props.beer;

        return <div onClick={this.showDetail} className='col card' id='favBeer'>
               <div className = 'text-center'> <img src={image_url} alt='beer'/> </div>
                <div className = 'text-center'><Link className='btn btn-info btn-wrap-text' to={`/detail/${id}`}>{name}</Link></div>
               <p className='text-center'>{tagline}</p>
               <button onClick={this.handleClick}>Remove</button>
        </div>

    }
    render() {
        return <div>
                {this.ShowItem()}
              </div>
        

    }
}
