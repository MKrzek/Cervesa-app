import React from 'react';
import {Link} from 'react-router-dom';

export default class Main extends React.Component{
    render(){
        return(<div>
                  
                  <div className='container'>
                     <div className='row jutify-content-center'>
                        <div className='col text-center'>
                          <div id = "bubbles"> 
                                 <Link className='title' to='/detail'>Cervezas</Link>
                                <p className='text-muted'>Explore the World of Beer</p>
                            <div className="bubble bubble1"></div>
                            <div className = "bubble bubble2"></div> 
                            <div className = "bubble bubble3"></div> 
                            <div className = "bubble bubble4"></div>
                            <div className = "bubble bubble5"></div>
                            </div>
                          </div>
                      </div>
                  </div>
               </div>
        )
    }
}



            