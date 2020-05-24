import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import Header from './Header';

class App extends Component {
  render(){
  return (
    <div className="container">
      <Header />
      <div className="row"><p></p></div>
        <h4 className="header center">
         Congratulations!! 
        </h4><br/>
        <p>As you have been shortlisted for an interview with Publicis Sapient. Kindly select the following options to confirm your availability and provide us with 3 time slots.<br></br>*This link expires within 72 hours.
        </p>
        
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s3">
                <label htmlFor="candidate_name" className="teal-text">Name</label>
                <input id="candidate_name" type="text" className="validate"/>
                
              </div>
            </div>

            <div className="row">
              <div className="input-field col s3">
                  <label htmlFor="candidate_phone" className="teal-text">Phone Number</label>
                  <input  id="candidate_phone" type="text" className="validate"  data-length="10"/>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s1">
                <label className="black-text"> <b>Prefernce 1</b></label>
              </div>
              <div className="input-field col s3">
                  <input id="Date_1" type="text" className="datepicker"/>
                  <label htmlFor="Date_1" className="teal-text">Option 1</label>
              </div>
              <div className="input-field col s2">
                  <label className="black-text">
                    <input name="group1" type="radio"/>
                    <span>9:00AM - 1:00PM </span>
                  </label>
              </div>
              <div className="input-field col s2">
                  <label className="black-text">
                    <input name="group1" type="radio" />
                    <span>2:00PM - 5:00PM</span>
                  </label>                  
              </div>
              <div className="input-field col s2">
                  <label className="black-text">
                    <input name="group1" type="radio"/>
                    <span>5:00PM - 9:00PM </span>
                  </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s1">
                <label className="black-text"><b>Prefernce 2</b></label>
              </div>
              <div className="input-field col s3">
                  <input id="Date_2" type="text" className="datepicker"/>
                  <label htmlFor="Date_2" className="teal-text">Option 2</label>
              </div>
              <div className="input-field col s2">
                  <label className="black-text">
                    <input name="group2" type="radio"/>
                    <span>9:00AM - 1:00PM </span>
                  </label>
              </div>
              <div className="input-field col s2">
                  <label className="black-text">
                    <input name="group2" type="radio" />
                    <span>2:00PM - 5:00PM</span>
                  </label>                  
              </div>
              <div className="input-field col s2">
                  <label className="black-text">
                    <input name="group2" type="radio"/>
                    <span>5:00PM - 9:00PM </span>
                  </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s1">
                <label className="black-text strong"><b>Prefernce 3</b></label>
              </div>
              <div className="input-field col s3">
                  <input id="Date_3" type="text" className="datepicker"/>
                  <label htmlFor="Date_3" className="teal-text">Option 3</label>
              </div>
              <div className="input-field col s2">
                  <label className="black-text">
                    <input name="group3" type="radio" />
                    <span>9:00AM - 1:00PM </span>
                  </label>
              </div>
              <div className="input-field col s2">
                  <label className="black-text">
                    <input name="group3" type="radio"/>
                    <span>2:00PM - 5:00PM</span>
                  </label>                  
              </div>
              <div className="input-field col s2">
                  <label className="black-text">
                    <input name="group3" type="radio"/>
                    <span>5:00PM - 9:00PM </span>
                  </label>
              </div>
            </div>
            
            <div className="row ">
              <div className="center">
                <button className="btn waves-effect waves-light red" type="submit" name="action">Submit<i className="material-icons right">send</i></button>
              </div>
            </div>
            <div className="row">
              <p>
              <b>Please note:</b>The interview will be scheduled anytime between the slot selected. The duration of the interview will be max 2hours.Please respond to the meeting invite to confirm availability. Interview might be cancelled if we do not receive any response.To reschedule, please give advance heads up and inform your respective hiring representative.If we cannot schedule as per your availability we will connect with you for alternative time slot.
              </p>
            </div>
          </form>
        </div>
        
      
    </div>
  );
  }
}

export default App;
