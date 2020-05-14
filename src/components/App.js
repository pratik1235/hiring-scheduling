import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import CandidateForm from './CandidateForm';
import LinkGenerator from './LinkGenerator';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router >
          <Switch>
            <Route path="/form">
              <CandidateForm />
            </Route>
            <Route path="/">
              <LinkGenerator />
            </Route>
          </Switch>
        </Router >
      </>
    );
  }
}

export default App;
