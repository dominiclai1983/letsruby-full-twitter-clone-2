import React, {useState} from 'react';
import {safeCredentials, handleErrors} from '../utils.js'
import './middle.scss';

const handleTweetSubmit = () => {
  fetch('/api/tweets', safeCredentials({
    method: 'POST',
    body: JSON.stringify({
      tweet:{
        message: tweet
      }
    })
  }))
  .then(handleErrors)
  .then(res => {
    console.log(res);
  })

}

const Middle = () => {

  const [tweet, setTweet] = useState("");

  return (
    <React.Fragment>
    <h3>Home</h3>
      <form onSubmit={handleTweetSubmit}>
        <div className="input-group mb-1">
          <textarea className="form-control" maxLength="280" aria-label="With textarea" placeholder="What's Happening?"
          onChange = {event => {
            event.preventDefault();
            setTweet(event.target.value)}}>
          </textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary btn-sm">Tweet</button>
        </div>
      </form>
    </React.Fragment>
  )

}

export default Middle;