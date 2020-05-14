import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { useLocation } from "react-router-dom"
import Expired from './Expired';
import timeExpired from '../utils/utils';

// A custom hook that builds on useLocation to parse
// the query string for you.
const useQuery = () => {
  const reg = new RegExp('[?&]tt=([^&#]*)', 'i');
  const timeToken = reg.exec(useLocation().search);
  return timeToken && timeToken.length ? timeToken[1].replace(/%20/g, ' ') : null;
}

const CandidateForm = ({ params }) => {
  const searchQuery = useQuery();
  if (!searchQuery || timeExpired(searchQuery)) {
    return <Expired />
  }
  return (
    <div className="container">
      <div className="row"><p></p></div>
      <h4 className="header center">
        Congratulations!!
        </h4><br />
      <p>You have been selected for further Interview Rounds. Please fill in below with your personal details and any THREE preferences (Date and Time) to book a slot for scheduling an interview.
        You will be allotted a slot from your preferences subject to availabilty.
        </p>

      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s3">
              <label htmlFor="candidate_name" className="teal-text">Name</label>
              <input id="candidate_name" type="text" className="validate" />

            </div>
          </div>

          <div className="row">
            <div className="input-field col s3">
              <label htmlFor="candidate_phone" className="teal-text">Phone Number</label>
              <input id="candidate_phone" type="text" className="validate" data-length="10" />
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col s12">
              Enter your Date and Time prefernces for booking an interview slot from listed options. You can only select a slot in the next seven days excluding Sundays.
              </div>
          </div>
          <div className="row">
            <div className="input-field col s1">
              <label className="black-text"> Prefernce 1</label>
            </div>
            <div className="input-field col s3">
              <input id="Date_1" type="text" className="datepicker" />
              <label htmlFor="Date_1" className="teal-text">Option 1</label>
            </div>
            <div className="input-field col s2">
              <label className="black-text">
                <input name="group1" type="radio" />
                <span>9:00AM - 1:00PM </span>
              </label>
            </div>
            <div className="input-field col s2">
              <label className="black-text">
                <input name="group1" type="radio" />
                <span>2:00PM - 5:00PM</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s1">
              <label className="black-text"> Prefernce 2</label>
            </div>
            <div className="input-field col s3">
              <input id="Date_2" type="text" className="datepicker" />
              <label htmlFor="Date_2" className="teal-text">Option 2</label>
            </div>
            <div className="input-field col s2">
              <label className="black-text">
                <input name="group2" type="radio" />
                <span>9:00AM - 1:00PM </span>
              </label>
            </div>
            <div className="input-field col s2">
              <label className="black-text">
                <input name="group2" type="radio" />
                <span>2:00PM - 5:00PM</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s1">
              <label className="black-text strong"> Prefernce 3</label>
            </div>
            <div className="input-field col s3">
              <input id="Date_3" type="text" className="datepicker" />
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
                <input name="group3" type="radio" />
                <span>2:00PM - 5:00PM</span>
              </label>
            </div>
          </div>

          <div className="row ">
            <div className="row"><p></p></div>
            <div className="center">
              <button className="btn waves-effect waves-light red" type="submit" name="action">Submit<i className="material-icons right">send</i></button>
            </div>
          </div>
        </form>
      </div>


    </div>
  );
}

export default CandidateForm;
