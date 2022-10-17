import React from "react";

import logo from "../images/logo.svg";

function Banner() {
  return (
    <div className="Banner">
      <div className="BannerHeader">
        <small>My balance</small>
        <h2>$921.48</h2>
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Banner;
