//Login.js
// FETCHING FROM ARRAY - Assign 1 FRONT END
// import React, { useEffect, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();
//   const loginRef = useRef();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const users = [
//     { username: "Nestle", password: "1111" }, //Student Users
//     { username: "Jess", password: "2222" },
//     { username: "Felix", password: "3333" },
//     { username: "Admin", password: "1234" }, //Admin User
//   ];

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const { email, password } = formData;
//     const user = users.find(
//       (u) => u.username === email && u.password === password
//     );

//     if (user) {
//       if (user.username === "Admin" && user.password === "1234") {
//         navigate("/AdminCourses");
//       } else {
//         navigate("/DiplomaStudent");
//       }
//     } else {
//       alert("Invalid credentials. Please try again.");
//     }
//   };

// FETCHING FROM DB - Assign 2 BACK END
//Login.js
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const loginRef = useRef();
  const [formData, setFormData] = useState({
    Username: "",
    Password: "",
  });

  const [isLoggedIn, setLoggedIn] = useState(false); // Login State

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { Username, Password } = formData;

    try {
      // Fetch user data from the database
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Username, Password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials. Please try again.");
      }

      const user = await response.json();

      if (user) {
        // Store user's first name in local storage
        localStorage.setItem("FirstName", user.FirstName);
        localStorage.setItem("UserID", user.UserID);
        // Check user's ceredentials and redirect
        if (user.Program === "Diploma") {
          navigate("/StudentDiploma");
        } else if (user.Program === "Post Diploma") {
          navigate("/StudentPostDiploma");
        } else if (user.Program === "Certificate") {
          navigate("/StudentCertificate");
        } else if (user.Program === "Admin") {
          navigate("/AdminDiploma");
        }
        setLoggedIn(true);
      } else {
        throw new Error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    // Reset form fields
    setFormData({
      Username: "",
      Password: "",
    });
  };

  useEffect(() => {
    if (loginRef.current) {
      loginRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section id="Lognow" className="bg-light" ref={loginRef}>
      <div class="container pb-4" />
      <div class="row d-flex justify-content-center align-items-center">
        <div class="jumbotron jumbotron-fluid">
          <h3 class="text-muted text-center py-2">Login</h3>
          <div class="container my-3 text-center">
            <h1 class="lead text-center py-0">
              Login using your registered Bow Student account.
            </h1>
          </div>
        </div>
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="login"
          />
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          {/* <form onSubmit={handleFormSubmit}> */}
          <form action="" method="post" onSubmit={handleFormSubmit}>
            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p class="lead fw-normal mb-0 me-3 py-4">Sign in with</p>
              <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
              </button>

              <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-twitter"></i>
              </button>

              <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-linkedin-in"></i>
              </button>
            </div>

            <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            <div class="form-outline mb-4">
              <input
                type="text"
                id="Username"
                name="Username"
                value={formData.Username}
                onChange={handleInputChange}
                className="form-control form-control"
                placeholder="Username"
              />
            </div>

            <div class="form-outline mb-3">
              <input
                type="password"
                id="Password"
                name="Password"
                value={formData.Password}
                onChange={handleInputChange}
                className="form-control form-control"
                placeholder="Password"
              />
            </div>

            <div className="text-center text-lg-start mt-4 pt-2">
              <input
                type="reset"
                className="btn btn-outline-primary"
                value="Reset"
                onClick={handleReset}
              />
              &emsp;
              <input type="submit" className="btn btn-primary" value="Login" />
              <div class="divider d-flex align-items-center my-4" />
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account?{" "}
                <Link
                  to="/Signup/#Signnow"
                  className="link-danger text-decoration-none"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
