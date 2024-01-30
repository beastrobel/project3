// Importing the 'decode' function from the 'jwt-decode' library
import decode from "jwt-decode";

// Class definition for AuthService
class AuthService {
  // Function to get the user profile from the decoded token
  getProfile() {
    return decode(this.getToken());
  }

  // Function to check if the user is logged in by verifying the token
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // Function to check if the token has expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  // Function to get the token from local storage
  getToken() {
    return localStorage.getItem("id_token");
  }

  // Function to handle user login by storing the token in local storage and redirecting to the dashboard
  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/Dashboard");
  }

  // Function to handle user logout by removing the token from local storage and redirecting to the home page
  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

// Export an instance of the AuthService class
export default new AuthService();
