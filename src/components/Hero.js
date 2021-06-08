import React from "react";

import logo from "../assets/logo.png";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4"> BAT Cloud AAutomation</h1>

    <p className="lead">
        <a href="">BAT CLoud Self-Service</a>
    </p>
  </div>
);

export default Hero;
