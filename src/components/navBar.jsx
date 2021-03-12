import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-nav navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">ShowFlix</a>
          <a class="nav-item nav-link ml-auto" href="#">Sign In</a>
          <a class="nav-item nav-link" href="#">Sign Up</a>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
