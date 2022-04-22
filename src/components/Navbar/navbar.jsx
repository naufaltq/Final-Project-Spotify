import React from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useStateProvider } from "../../context/StateProvider";
import "./navbar.css";

function Navbar({ navBackground }) {
  const [{ userInfo }] = useStateProvider();

  return (
    <div className="navbar-container" navBackground={navBackground}>
      <div className="search-bar">
        <FaSearch />
        <input type="text" placeholder="Artists, songs, podcasts" />
      </div>
      <div className="avatar">
        <a className="profile" href="#">
          <CgProfile />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
