import React from "react";
import "../assets/styles/firstsection.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from "../assets/images/hero.png";
// images
import one from "../assets/images/1.svg";
import two from "../assets/images/2.svg";
import three from "../assets/images/3.svg";
import four from "../assets/images/4.svg";

export default function FirstSection() {
  return (
    <div className="FirstSection" style={{ paddingLeft: "5%" }}>
      <div className="row">
        {/* First Column */}
        <div className="col-6" style={{ paddingLeft: "2%" }}>
          <h2 className="bigtext">
            Make
            <br />
            remote work.
          </h2>
          <p className="smalltext">
            Get your team in sync no matter your location. Streamline processes,
            create team rituals and watch productivity soar.{" "}
          </p>
          <br />
          <a href="#" className="btn-letsgetstarted">
            Learn More
          </a>
          <br /> <br /> <br />
          <div className="row">
            <div className="col">
              <img src={two} alt="logos" />
            </div>
            <div className="col">
              <img src={one} alt="logos" />
            </div>
            <div className="col">
              <img src={four} alt="logos" />
            </div>
            <div className="col">
              <img src={three} alt="logos" />
            </div>
          </div>
        </div>
        {/* Second Column */}
        <div className="col-6">
          <img className="bannerImg" src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
}
