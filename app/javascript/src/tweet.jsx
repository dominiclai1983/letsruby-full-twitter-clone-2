import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Nva from './page/nva';
import Left from './page/left';
import Middle from './page/middle';
import Right from './page/right';
import {json, checkStatus} from './utils';
import $ from 'jquery';

class Tweet extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tweet: [],
    }
  };

  componentDidMount(){
    fetch('api/tweets')
    .then(checkStatus)
    .then(json)
    .then(data => {
      console.log(data);
      this.setState({
        tweet: data.tweets
      }, () => console.log(this.state.tweet));
    })
    .catch(error => {
      console.log(error);
    })
  }

  render(){
    return (
      <React.Fragment>
        <Nva />
          <div className='container'>
            <div className='row'>
              <Left />
              <Middle />
              <Right />
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default Tweet;

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Tweet />,
      document.body.appendChild(document.createElement('div')),
    )
  })