import { Link } from "react-router-dom";

function Home() {
  
  let isLoggedIn = true;
  
  return (
    <div>
      <Link to="/login">
        <h3 data-testid="login-link"> {isLoggedIn ? "Log in" : "Log out"} </h3>
      </Link>
      <Link to="/dashboard">
        <h3 data-testid="home-link">Home</h3>
      </Link>
    </div>
  );
}
export default Home;
