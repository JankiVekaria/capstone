import auth0 from 'auth0-js';

class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'farzinj.auth0.com',
    clientID: 'quaNTI5u7dt6hbaPfy7W7xaruygien5L',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }


  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  setSession = (authResult) => {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('accessToken', authResult.accessToken);
    // Set the time that the access token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.accessToken = authResult.accessToken;
    console.log('authResult.idToken = ', authResult.idToken);
    this.idToken = authResult.idToken;
    localStorage.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    // navigate to the home route
    window.location.pathname = "/advertisement_upload";
  }
}

let auth = new Auth();
export default auth;