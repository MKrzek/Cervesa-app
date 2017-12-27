import React from 'react';
import {Link} from 'react-router-dom';
export default class NavigationFav extends React.Component{
    render(){
return (
    <nav className='navbar navbar-default'>
        <div className='container-fluid'>
            <div className='navbar-header'>
                <h2 className='navbar-brand'>Your Cervesa</h2>
            </div>
            <ul className='nav navbar-nav navbar-right'>
                <li className='nav-item' key={1}>
                    <Link className='nav-link' to='/favourite'>Your favourites</Link>
                </li>
            </ul>
        </div>
    </nav>


        )

    }
}



