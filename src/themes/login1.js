import React, { Component } from "react";
import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSectionLogin1";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <HeroSection />
        </div>  
      </React.Fragment>
    );
  }
}

export default Login;
