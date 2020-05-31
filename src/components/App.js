import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import CandidateForm from './CandidateForm';
import Header from './Header';
import ThankYou from './ThankYou';
import AlreadySubmitted from './AlreadySubmitted';
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router >
        <Switch>	          
            <Route exact path="/">	
              <CandidateForm />	
            </Route>                      
            <Route exact path="/submitted">	
              <ThankYou/>	
            </Route>
            <Route exact path="/reattempt">	
              <AlreadySubmitted/>	
            </Route>
        </Switch>
        </Router >
      </>
    );
  }
}

export default App;