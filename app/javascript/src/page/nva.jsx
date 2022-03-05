import React from 'react'
import $ from 'jquery';
import './nva.scss';

const Nva = () => {

  const handleLogout = () => {

    var request = {
      type: 'DELETE',
      url: 'api/sessions',
      headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      },
      success: function (response) {
        console.log("logout")
        window.location.href = '/';
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
      <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#"><i className="fab fa-twitter fa-2x"></i></a>
          <button type="button" className="btn btn-dark text-right" onClick={() => {handleLogout()}}>Log Out</button>
      </nav>
    </React.Fragment>
  )
}

export default Nva;