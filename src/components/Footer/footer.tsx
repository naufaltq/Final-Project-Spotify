import React from "react";
import PlayerControls from "../Player/PlayerControls";
import CurrentTrack from "../Track/CurrentTrack";
import "./footer.css";
import Volume from "../Volume/volume";

function Footer() {
  return (
    <div className="footer-content">
      <CurrentTrack />
      <PlayerControls />
      <Volume />
    </div>
  );
}

export default Footer;
