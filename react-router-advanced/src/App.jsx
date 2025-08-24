import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ import

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
            <Link to="/logout"> Logout</Link>
          </li>
          <li>
            <Link to="/blog/1"> Blog Post 1</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile /> {/* ✅ protected */}
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
