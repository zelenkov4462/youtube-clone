import { GoogleLogin } from "react-google-login";

const clientId =
  "10169129130-vtji558vgofivsphol7hq05u5ucuk83v.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("LOGIN success! Current user: ", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("LOGIN Failed! res: ", res);
  };
  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
