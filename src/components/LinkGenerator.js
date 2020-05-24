import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

const LinkGenerator = () => {
  const link = `/form?tt=${new Date()}`
  return (
    <div className="container">
      <div className="valign-wrapper"><Link to={link}><h3 className=" center red-text text-lighten-1">Go to </h3></Link></div>
            
    </div>)
}

export default LinkGenerator;
