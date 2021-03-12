import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSection6";
import PromoSection from "../components/PromoSection";
import AboutSection from "../components/AboutUs/AboutUs6";
import FeatureSection from "../components/Features/Feature6";
import PricingSection from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import Screenshots from "../components/Screenshots";
import DownloadSection from "../components/Download";
import TeamMember from "../components/TeamMember";
import ContactSection from "../components/Contact";
import TrustedCompany from "../components/TrustedCompany/TrustedCompany";
import SubscribeSection from "../components/Subscribe";
import FooterSection from "../components/Footer";
import Login from './login1';

//<PricingSection hideFaq={true} faq="four" bgColor="gray" />

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">      
          <HeroSection />
          <PromoSection />
          <AboutSection />
          <FeatureSection />
          <Testimonial />
          <Screenshots />
          <DownloadSection />
          <TeamMember />
          <ContactSection />
          <TrustedCompany />
        </div>
        <SubscribeSection />
        <FooterSection />
      </React.Fragment>
    );
  }
}

export default Theme;
