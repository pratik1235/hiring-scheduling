import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import Header from './Header';
const link = `/submitted`;
class ThankYou extends Component{
    
    render(){
        return(
            <div className="container">
                <div className="row"><p></p></div>
                <div className="valign-wrapper"><Link to={link}><h3 className=" center red-text text-lighten-1">Thank You for your time!!</h3></Link></div>
            </div>
        );

        }
}

export default ThankYou;