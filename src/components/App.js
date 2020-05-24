import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import CandidateForm from './CandidateForm';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router >
          <CandidateForm />
        </Router >
      </>
    );
  }
}

export default App;
