import React from "react";
import "./login.css";

function Login() {
  const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const scope = [
    "playlist-modify-private",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-position",
    "user-top-read",
    "user-read-email",
    "user-read-private",
  ];
  const redirect_uri = "https://final-project-spotify-five.vercel.app/";

  let url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);

  return (
    <div className="login-page">
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="Logo Spotify" />
      <a className="btn" href={url}>
        LOGIN SPOTIFY
      </a>
    </div>
  );
}

export default Login;
