import React, { useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from './layout';
import Signup from './signup';
import Login from './login';
import $ from 'jquery';

import './home.scss';

const Home = () => (
  <React.Fragment>
    <i className="fab fa-twitter fa-5x"></i>
    <h1>Happening now</h1>
    <h3>Join Twitter today.</h3>
    <Link to="/signup">
      <button type="button" className="btn btn-primary btn-lg btn-block">Sign up with email</button>
    </Link>
    <h5>Already have an account?</h5>
    <Link to="/login"> 
      <button type="button" className="btn btn-secondary btn-lg btn-block">Sign in</button>
    </Link>      
  </React.Fragment>
)

const App = () => {

  const loginStatus = () => {

    const token = localStorage.getItem('token');

    var request = {
      type: 'GET',
      url: 'api/authenticated',
      headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      },
      data:{
        token: token
      },
      success: function (response) {
        setLogin(!login);
        window.location.href = '/tweet';

      },
      error: function (request, errorMsg) {
        console.log(request, errorMsg);
        console.log("error");
      }
    }

    $.ajax(request);
  }


  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})