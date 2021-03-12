import React, { Component } from 'react';
import "./App.css";
import NavBar from "./components/navBar";
import HomeApp from "./components/homePage";
import FooterModule from "./components/footer"

class App extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <HomeApp />
        <FooterModule />
      </React.Fragment>
    );
  }
}

export default App;
