import React from "react";
import PlayerControls from "../Player/PlayerControls";
import CurrentTrack from "../Track/CurrentTrack";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-content">
      <CurrentTrack />
      <PlayerControls />
    </div>
  );
}

export default Footer;
