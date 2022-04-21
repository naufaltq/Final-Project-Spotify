import React from "react";
import "./sidebar.css";
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import Playlist from "../Playlist/playlist";

function Sidebar() {
  return (
    <div className="sidebar-content">
      <div className="top__links">
        <div className="logo">
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Logo Spotify" />
        </div>
        <ul>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <IoLibrary />
            <span>Your Playlist</span>
          </li>
        </ul>
      </div>
      <Playlist />
    </div>
  );
}

export default Sidebar;
