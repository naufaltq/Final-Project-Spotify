import React from "react";
import "./login.css";

function Login() {
  const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const scope = "playlist-modify-private";
  const redirect_uri = "http://localhost:3000/";

  let url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);

  return (
    <div className="login-page">
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="Logo Spotify" />
      <a href={url}>LOGIN SPOTIFY</a>
    </div>
  );
}

export default Login;
