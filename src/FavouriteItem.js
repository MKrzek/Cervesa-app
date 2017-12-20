import React from 'react';
import {Link} from 'react-router-dom';

export default class FavouriteItem extends React.Component {

handleClick=()=>{
    this.props.removeBeer(this.props.beer.id)
}

    ShowItem = () => {
        const {name, tagline, image_url, id} = this.props.beer;

        return <div onClick={this.showDetail} >
            <Link to={`/detail/${id}`}>{name}</Link>
            <p>{tagline}</p>
            <img src={image_url} alt='beer'/>
            <button onClick={this.handleClick}>Remove</button>
        </div>

    }
    render() {
        return <div>

            <div>
                {this.ShowItem()}
            </div>
        </div>

    }
}
