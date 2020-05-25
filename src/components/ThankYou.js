import React , { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import Header from './Header';

class ThankYou extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <div className="row"><p></p></div>
                <div className="valign-wrapper"><h3 className=" center red-text text-lighten-1">Thank You for your time!!</h3></div>
            </div>
        );

        }
}

export default Header;