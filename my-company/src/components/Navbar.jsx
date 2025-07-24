import { Link, NavLink } from "react-router-dom";
import React from "react";
const styles = {
  navbar: {
    backgroundColor: "#333",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
  },
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "10px 15px",
};

const activeStyle = {
  fontWeight: "bold",
  color: "#61dafb",
};

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={linkStyle}>
        MyWebsite
      </Link>
      <div>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
