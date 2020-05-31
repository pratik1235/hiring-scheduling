import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

const link = `/AlreadySubmitted`;
class ThankYou extends Component{
    
    render(){
        return(
            <div className="container">
                <div className="row"><p></p></div>
                <div className="valign-wrapper"><Link to={link}><h3 className=" center red-text text-lighten-1">You Have already submitted your response!</h3></Link></div>
                <div className="row"><p>We have already received your response. No further changes can be made viad this form. Contact your hiring represntative for more information</p></div>
            </div>
        );

        }
}

export default ThankYou;