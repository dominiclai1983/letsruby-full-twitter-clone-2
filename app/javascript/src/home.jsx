import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Layout from './layout';
import Signup from './signup';
import Login from './login';
import Success from './success';
import $ from 'jquery';
import {json, checkStatus} from './utils';

import './home.scss';

const Home = () => {
  return (
    <Layout>
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
    </Layout>
  )
}

export const AuthContext = React.createContext(null);

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      authenticated: false
    }
    
  }; 

  handleLogin = (login) => {
    
    var request = {
      type: 'POST', 
      url: 'api/sessions',
      headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      },
      data:{
        user: login
      },
      success: function (response) {
        console.log(response.success);
        if(response.success){
          this.setState({
            authenticated: response.success
          })
        }
        else if(!response.success){
          window.location.href = '/';
        }
      },
      error: function (request, errorMsg) {
        console.log(request, errorMsg);
        console.log("error");
      }
    }
    $.ajax(request);
  }

  PrivateRoute = ({ children, ...rest }) => {

    const {authenticated} = this.state;

      <Route {...rest} render={({ location }) => {
          return authenticated === true ? 
          (children) : (<Redirect to="/login" />);
        }}
      />
      };

  render(){

    return(
        <Router>
          <Switch>

              <Route path="/" exact component={Home} />
              <Route path='/signup' component={Signup} />
              <Route path='/login' render={props => <Login onLogin={this.handleLogin}/>} />
            {/*
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login onLogin={this.handleLogin} />} />
            <Route path="/success" element={<Success />} />
            */}
            

          </Switch>
        </Router>
    );
  }
}

export default App;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})