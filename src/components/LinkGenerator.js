import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

const LinkGenerator = () => {
  const link = `/form?tt=${new Date()}`
  return (
    <div className="container">
      <div className="row">
        <Link className="row" to={link}>Go to </Link>
      </div>
    </div>)
}

export default LinkGenerator;
