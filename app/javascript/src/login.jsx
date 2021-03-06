import React, {useState, createContext} from 'react'
import $ from 'jquery';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = {
    username,
    password
  }

  const handleLogin = () => {
    
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
        {/*
        window.location.href = '/tweet';
        */}
      },
      error: function (request, errorMsg) {
        console.log(request, errorMsg);
        console.log("error");
      }
    }
    $.ajax(request);
  }

  return (
    <div>
      <h1>Login To Your Account</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail">Username</label>
            <input type="text" className="form-control" id="exampleUsername" placeholder="username" 
              onChange = {event => {
                event.preventDefault();
                setUsername(event.target.value);
            }}/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
              onChange = {event => {
                event.preventDefault();
                setPassword(event.target.value);
              }} />
          </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Login;