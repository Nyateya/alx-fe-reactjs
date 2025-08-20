import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Profile from "./components/Profile";


function Login() {
  const handleLogin = () => {
    localStorage.setItem("authToken", "sample_token"); 
    window.location.href = "/profile"; 
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function Logout() {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/"; 
  };

  return (
    <div>
      <h2>Logout Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/profile"> Profile</Link>
          </li>
          <li>
            <Link to="/login"> Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
