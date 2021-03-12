import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSectionTeam_precos";
import Price from "../components/TeamMember/precos";
import ContactSection from "../components/Contact";
import TrustedCompany from "../components/TrustedCompany/TrustedCompany";
import SubscribeSection from "../components/Subscribe";
import FooterSection from "../components/Footer";
//<ContactSection /><TrustedCompany /><SubscribeSection />
class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <HeroSection />
          <Price/>       
        </div>    
        <FooterSection />
      </React.Fragment>
    );
  }
}

export default Theme;
