import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from './layout';
import Signup from './signup';
import Login from './login';
import $ from 'jquery';

import './home.scss';

export const Home = () => (
  <div>
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
  </div>
)

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      authenticated: false
    }
  }; 

  render(){
    return(
        <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
        </BrowserRouter>
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