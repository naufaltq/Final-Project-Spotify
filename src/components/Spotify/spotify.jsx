import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { reducerCases } from "../../context/constants";
import { useStateProvider } from "../../context/StateProvider";
import Body from "../Body/body";
import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import Sidebar from "../Sidebar/sidebar";
import "./spotify.css";

function Spotify() {
  const [{ token }, dispatch] = useStateProvider();
  const bodyRef = useRef();
  const [navBackground, setNavBackground] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30 ? setNavBackground(true) : setHeaderBackground(false);
    bodyRef.current.scrollTop >= 268 ? setHeaderBackground(true) : setHeaderBackground(false);
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
      };
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [dispatch, token]);

  return (
    <div className="container">
      <div className="spotify-body">
        <Sidebar />
        <div className="body" ref={bodyRef} onScroll={bodyScrolled}>
          <Navbar navBackground={navBackground} />
          <div className="body-contents">
            <Body headerBackground={headerBackground} />
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
