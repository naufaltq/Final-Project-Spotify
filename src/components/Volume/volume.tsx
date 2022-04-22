import axios from "axios";
import React from "react";
import { useStateProvider } from "../../context/StateProvider";
import "./volume.css";

function Volume() {
  const [{ token }] = useStateProvider();

  const setVolume = async (e) => {
    await axios.put(
      `https://api.spotify.com/v1/me/player/volume`,
      {},
      {
        params: {
          volume_percent: parseInt(e.target.value),
        },
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <div className="volume-container">
      <input type="range" min={0} max={100} onMouseUp={(e) => setVolume(e)} />
    </div>
  );
}

export default Volume;
