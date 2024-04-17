import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with HomeEco</span>
          <span className="secondaryText">
            Your Search Ends Here – Welcome Home!
            <br />
            Unlock Your Dream Home Today
          </span>
          <button className="button" href>
            <a href="mailto:pattnaikananya45@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
