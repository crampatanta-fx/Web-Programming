import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isLoggedIn, setLoggedIn] = useState(false); //Login State

  //Signup Auto Scroll Function
  const scrollSignUp = () => {
    const signupElement = document.getElementById("Signnow");

    if (signupElement) {
      signupElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  //Login Auto Scroll Function
  const scrollLogin = () => {
    const loginElement = document.getElementById("Lognow");

    if (loginElement) {
      loginElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="py-1 bg-body-tertiary border-bottom" data-bs-theme="dark">
      <div className="container d-flex flex-wrap">
        <ul className="nav nav-underline me-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link link-body-emphasis px-2">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Courses" className="nav-link link-body-emphasis px-2">
              Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact" className="nav-link link-body-emphasis px-2">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link link-body-emphasis px-2">
              About
            </Link>
          </li>
        </ul>
        <ul className="nav navbar-right">
          <li className="nav-item">
            {isLoggedIn ? (
              <Link />
            ) : (
              <Link
                to="/Login/#Lognow"
                onClick={scrollLogin}
                className="btn btn-outline-light px-2"
              >
                Login
              </Link>
            )}
          </li>
          &nbsp;
          <li className="nav-item">
            {isLoggedIn ? (
              <Link to="/" className="btn btn-danger px-2">
                Logout
              </Link>
            ) : (
              <Link
                to="/Signup/#Signnow"
                onClick={scrollSignUp}
                className="btn btn-primary px-2"
              >
                Signup
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
