import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./ReduxToolkit/Slices/userSlice";

const clientId =
  "10169129130-vtji558vgofivsphol7hq05u5ucuk83v.apps.googleusercontent.com";

function App() {
  // const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    dispatch(getUser(userObject));
    document.getElementById("signInDiv").hidden = true;
    console.log(user);
  }

  function handleSignOut(e) {
    dispatch(getUser(null));
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "10169129130-vtji558vgofivsphol7hq05u5ucuk83v.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);

  return (
    <div className="App">
      <div className="container_App">
        <div id="signInDiv"></div>
        {user && (
          <div className="signOut">
            <button className="signOut-btn" onClick={(e) => handleSignOut(e)}>
              Sign Out
            </button>
          </div>
        )}
        {user && (
          <div>
            <div className="userInfo">
              <img src={user.picture} alt="userImg" />
              <h3>{user.name}</h3>
            </div>
          </div>
        )}
        <Header />
        {/*<div className="container">*/}
        <Main />
        {/*</div>*/}
      </div>
    </div>
  );
}

export default App;
