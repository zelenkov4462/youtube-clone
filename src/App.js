import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getVideosAsync } from "./ReduxToolkit/async/getVideosAsync";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
