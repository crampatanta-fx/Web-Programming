//Home.js
import React from "react";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <img
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="100%"
                src={card1}
              ></img>
              <div class="card-body text-center">
                <h3>Diploma</h3>
                <p class="card-text">
                  Gain the skills you need to create the latest computer,
                  mobile, and gaming applications. Prepare to transform your
                  ideas into reality all while developing your problem-solving
                  skills.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <Link
                      to="/Courses/#Diploma"
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="100%"
                src={card2}
              ></img>
              <div class="card-body text-center">
                <h3>Post-Diploma</h3>
                <p class="card-text">
                  A post-diploma is a college-level credential acquired by
                  individuals wishing to update their skills, learn a new
                  technology, or learn the management side of their industry.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <Link
                      to="/Courses/#PostDiploma"
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="100%"
                src={card3}
              ></img>
              <div class="card-body text-center">
                <h3>Certificate</h3>
                <p class="card-text">
                  Gain real-world knowledge and practical experience in today’s
                  software industry. Learn web development, mobile application
                  development, and cloud and enterprise computing while working.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <Link
                      to="/Courses/#Certificate"
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
