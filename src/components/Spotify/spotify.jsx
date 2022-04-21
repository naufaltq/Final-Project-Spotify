import axios from "axios";
import React, { useEffect } from "react";
import { reducerCases } from "../../context/constants";
import { useStateProvider } from "../../context/StateProvider";
import Body from "../Body/body";
import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import Sidebar from "../Sidebar/sidebar";
import "./spotify.css";

function Spotify() {
  const [{ token }, dispatch] = useStateProvider();
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
      console.log(userInfo);
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [dispatch, token]);

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
