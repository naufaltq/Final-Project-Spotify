import React from "react";
import Body from "../Body/body";
import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import Sidebar from "../Sidebar/sidebar";
import "./spotify.css";

function Spotify() {
  return (
    <div className="container">
      <div className="spotify-body">
        <Sidebar />
        <div className="body">
          <Navbar />
          <div className="body-contents">
            <Body />
          </div>
        </div>
      </div>
      <div className="spotify-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Spotify;
