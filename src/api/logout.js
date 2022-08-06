import { GoogleLogout } from "react-google-login";

const clientId =
  "10169129130-vtji558vgofivsphol7hq05u5ucuk83v.apps.googleusercontent.com";

function Logout() {
  const onSuccess = (res) => {
    console.log("Log out successfull!");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
