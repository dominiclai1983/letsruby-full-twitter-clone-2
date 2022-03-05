import React, {useState} from 'react';
import {safeCredentials, handleErrors} from '../utils.js'
import $ from 'jquery';
import './middle.scss';

const Middle = () => {

  const [message, setMessage] = useState("");

  const handleTweetSubmit = () => {

    var request = {
      type: 'POST', 
      url: 'api/tweets',
      headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      },
      data:{
        tweet: {
          message
        }
      },
      success: function (response) {
        console.log("success")
      },
      error: function (request, errorMsg) {
        console.log(request, errorMsg);
        console.log("error");
      }
    }
    $.ajax(request);
  
  }

  return (
    <React.Fragment>
    <h3>Home</h3>
      <form onSubmit={handleTweetSubmit}>
        <div className="input-group mb-1">
          <textarea className="form-control" maxLength="280" aria-label="With textarea" placeholder="What's Happening?"
          onChange = {event => {
            event.preventDefault();
            setMessage(event.target.value)}}>
          </textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary btn-sm mb-3" >Tweet</button>
        </div>
      </form>
    </React.Fragment>
  )

}

export default Middle;