import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import LoginButton from "./api/login";
import LogoutButton from "./api/logout";

import { gapi } from "gapi-script";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRatingAsync } from "./ReduxToolkit/Slices/videoSlice";

const clientId =
  "10169129130-vtji558vgofivsphol7hq05u5ucuk83v.apps.googleusercontent.com";

function App() {
  const dispatch = useDispatch();
  const selectedVideo = useSelector((state) => state.videos.selectedVideo);

  useEffect(() => {
    function start() {
      gapi.client.init({
        client_Id: clientId,
        scope: "",
      });
      dispatch(getRatingAsync(selectedVideo));
    }
    gapi.load("client:auth2", start);
  });

  // var accessToken = gapi.auth.getToken().access_token;

  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Header />
      <Main />
    </div>
  );
}

export default App;
