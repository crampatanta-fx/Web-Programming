// Signup.js
import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const signupRef = useRef();
  const navigate = useNavigate();

  const validatePasswordMatch = () => {
    const password = document.getElementById("Password").value;
    const passwordChk = document.getElementById("PasswordChk").value;

    if (password !== passwordChk) {
      alert("Passwords do not match. Please re-enter.");
      return false;
    }

    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validatePasswordMatch()) {
      return;
    }

    const formData = new FormData(e.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      await axios.post("http://localhost:3000/api/signup", formObject);
      alert("Registration successful!");
      navigate("/Login");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Error registering user. Please try again.");
    }
  };

  useEffect(() => {
    if (signupRef.current) {
      signupRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section id="Signnow" className="h-100 bg-light" ref={signupRef}>
      <div class="jumbotron jumbotron-fluid">
        <h3 class="text-muted text-center py-4">Sign up</h3>
        <div class="container my-3 text-center">
          <h1 class="lead text-center py-0">
            Register your Bow Student account.
          </h1>
        </div>
      </div>

      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card card-registration my-4">
              <div class="row g-0">
                <div class="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="signup"
                    class="img-fluid"
                  />
                </div>

                <div class="col-xl-6">
                  <div class="card-body p-md-5 text-black">
                    {/* <form action="/api/signup" method="post"> */}
                    <form action="" method="post" onSubmit={handleFormSubmit}>
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <h6 class="form-label" for="FirstName">
                              First Name
                            </h6>
                            <input
                              type="text"
                              id="FirstName"
                              name="FirstName"
                              class="form-control form-control"
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <h6 class="form-label" for="LastName">
                            Last Name
                          </h6>
                          <div class="form-outline">
                            <input
                              type="text"
                              name="LastName"
                              id="LastName"
                              class="form-control form-control"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <h6 class="form-label" for="Email">
                            E-Mail
                          </h6>
                          <div class="form-outline">
                            <input
                              type="e-mail"
                              name="Email"
                              id="Email"
                              class="form-control form-control"
                              placeholder="E-Mail"
                            />
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <h6 class="form-label" for="Phone">
                            Phone Number
                          </h6>
                          <div class="form-outline">
                            <input
                              type="phone"
                              name="Phone"
                              id="Phone"
                              class="form-control form-control"
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="form-outline mb-4">
                        <h6 class="form-label" for="Address">
                          Address
                        </h6>
                        <input
                          type="text"
                          name="Address"
                          id="Address"
                          class="form-control form-control"
                          placeholder="Address"
                        />
                      </div>

                      <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <h6 class="mb-0 me-4">Gender </h6>

                        <div class="form-check form-check-inline mb-0 me-4">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="Gender"
                            id="Gender"
                            value="Female"
                          />
                          <label class="form-check-label" for="femaleGender">
                            Female
                          </label>
                        </div>

                        <div class="form-check form-check-inline mb-0 me-4">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="Gender"
                            id="Gender"
                            value="Male"
                          />
                          <label class="form-check-label" for="maleGender">
                            Male
                          </label>
                        </div>
                      </div>

                      <div class="form-outline mb-4">
                        <h6 class="form-label" for="DateofBirth">
                          Date of Birth
                        </h6>
                        <input
                          type="date"
                          name="DateofBirth"
                          id="DateofBirth"
                          class="form-control form-control"
                          placeholder="Date of Birth"
                        />
                      </div>

                      <div class="row">
                        <div class="col-md-7 mb-4">
                          <h6 class="mb-0 me-0">
                            Department&nbsp;
                            <select
                              class="select"
                              name="Department"
                              id="Department"
                            >
                              <option value="" disabled>
                                Department
                              </option>
                              <option value="Business Administration">
                                Business Administration
                              </option>
                              <option value="Community Studies">
                                Community Studies
                              </option>
                              <option value="Entertainment Arts">
                                Entertainment Arts
                              </option>
                              <option value="Health and Wellness">
                                Health and Wellness
                              </option>
                              <option value="Software Development">
                                Software Development
                              </option>
                            </select>
                          </h6>
                        </div>
                        <div class="col-md-5 mb-4">
                          <h6 class="mb-0 me-0">
                            Program&nbsp;
                            <select class="select" name="Program" id="Program">
                              <option value="" disabled>
                                Program
                              </option>
                              <option value="Diploma">Diploma</option>
                              <option value="Post Diploma">Post Diploma</option>
                              <option value="Certificate">Certificate</option>
                            </select>
                          </h6>
                        </div>
                      </div>

                      <div class="form-outline mb-4">
                        <h6 class="form-label" for="Username">
                          Username
                        </h6>
                        <input
                          type="text"
                          name="Username"
                          id="Username"
                          class="form-control form-control-lg"
                        />
                      </div>

                      <h6 class="form-label" for="Password">
                        Password
                      </h6>
                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          name="Password"
                          id="Password"
                          class="form-control form-control"
                        />
                      </div>

                      <h6 class="form-label" for="PasswordChk">
                        Re-enter Password
                      </h6>
                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          name="PasswordChk"
                          id="PasswordChk"
                          class="form-control form-control"
                        />
                      </div>

                      <div class="d-flex justify-content-end pt-3">
                        <input
                          type="reset"
                          id="reset"
                          class="btn btn-outline-primary btn-md"
                          value="Clear Form"
                        />
                        <input
                          type="submit"
                          id="submit"
                          class="btn btn-primary btn-md ms-2"
                          value="Register"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
