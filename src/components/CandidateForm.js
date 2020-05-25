import React from 'react';
import { Buffer } from 'buffer/';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { useLocation } from "react-router-dom"
import Expired from './Expired';
import timeExpired from '../utils/utils';
import Header from './Header';
// A custom hook that builds on useLocation to parse
// the query string for you.
const useQuery = () => {
  const reg = new RegExp('[?&]tt=([^&#]*)', 'i');
  const timeToken = reg.exec(useLocation().search);
  return timeToken && timeToken.length ? timeToken[1].replace(/%20/g, ' ') : null;
}

const CandidateForm = () => {
  const searchQuery = useQuery();
  if (!searchQuery || timeExpired(Buffer.from(searchQuery, 'base64').toString('utf8'))) {
    return <Expired />
  }
  return (
    <div className="container">
      <div className="row"><p></p></div>
        <h4 className="header center">
         Congratulations!! 
        </h4><br/>
        <p>As you have been shortlisted for an interview with Publicis Sapient. Kindly select the following options to confirm your availability and provide us with 3 time slots.<br></br>*This link expires within 72 hours.
        </p>
        
        <div className="row">
          <form className="col s12" method='POST' action="https://xhepncvfs6.execute-api.us-east-1.amazonaws.com/prod/">
            <div className="row">
              <div className="input-field col s3">
                <label htmlFor="candidate_name" className="teal-text">Name</label>
                <input id="candidate_name" name="candidate_name" type="text" className="validate"/>
                
              </div>
            </div>

            <div className="row">
              <div className="input-field col s3">
                  <label htmlFor="candidate_phone" className="teal-text">Phone Number</label>
                  <input  id="candidate_phone" name="candidate_phone" type="text" className="validate"  data-length="10"/>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s1">
                <label className="black-text"> <b>Prefernce 1</b></label>
              </div>
              <div className="input-field col s3">
                  <input id="Date_1" name="pref1-date" type="text" className="datepicker"/>
                  <label htmlFor="Date_1" className="teal-text">Option 1</label>
              </div>
              <div className="input-field col s2">
                  <label className="black-text">
                    <input name="pref1-slot1" type="radio"/>
                    <span>9:00AM - 1:00PM </span>
                  </label>
              </div>
              <div className="input-field col s2">
                  <label className="black-text">
                    <input name="pref1-slot2" type="radio" />
                    <span>2:00PM - 5:00PM</span>
                  </label>                  
              </div>
              <div className="input-field col s2">
                  <label className="black-text">
                    <input name="pref1-slot3" type="radio"/>
                    <span>5:00PM - 9:00PM </span>
                  </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s1">
                <label className="black-text"><b>Prefernce 2</b></label>
              </div>
              <div className="input-field col s3">
                  <input id="Date_2" name="pref2-date" type="text" className="datepicker"/>
                  <label htmlFor="Date_2" className="teal-text">Option 2</label>
              </div>
              <div className="input-field col s2">
                  <label className="black-text">
                    <input name="pref2-slot1" type="radio"/>
                    <span>9:00AM - 1:00PM </span>
                  </label>
              </div>
              <div className="input-field col s2">
                  <label className="black-text">
                    <input name="pref2-slot2" type="radio" />
                    <span>2:00PM - 5:00PM</span>
                  </label>                  
              </div>
              <div className="input-field col s2">
                  <label className="black-text">
                    <input name="pref2-slot3" type="radio"/>
                    <span>5:00PM - 9:00PM </span>
                  </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s1">
                <label className="black-text strong"><b>Prefernce 3</b></label>
              </div>
              <div className="input-field col s3">
                  <input id="Date_3" name="pref3-date" type="text" className="datepicker"/>
                  <label htmlFor="Date_3" className="teal-text">Option 3</label>
              </div>
              <div className="input-field col s2">
                  <label className="black-text">
                    <input name="pref3-slot1" type="radio" />
                    <span>9:00AM - 1:00PM </span>
                  </label>
              </div>
              <div className="input-field col s2">
                  <label className="black-text">
                    <input name="pref3-slot2" type="radio"/>
                    <span>2:00PM - 5:00PM</span>
                  </label>                  
              </div>
              <div className="input-field col s2">
                  <label className="black-text">
                    <input name="pref3-slot3" type="radio"/>
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

export default CandidateForm;