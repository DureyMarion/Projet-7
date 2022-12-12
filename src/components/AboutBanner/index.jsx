import { Component } from "react"
import aboutBanner from "../../assets/about-background.png"

import "./AboutBanner.scss";


class AboutBanner extends Component {

  render() {
    return (
      <div className="banner">
        <div className="about-banner">
          <img src={aboutBanner} alt="Un paysage de montagne" />
        </div>
      </div>
    );
  }
}

export default AboutBanner;