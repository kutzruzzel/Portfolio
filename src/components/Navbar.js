import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <Link to="/">
          <img src={logo} alt="logo.png" className="logo1"></img>
        </Link>
        <ul>
          <li>
            <Link to="/projects" className="projects">
              Projects
            </Link>{" "}
          </li>
          <li>
            <Link to="/technologies" className="techno">
              Technologies
            </Link>{" "}
          </li>
          <li>
            <Link to="/" className="aboutme">
              About me
            </Link>{" "}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
