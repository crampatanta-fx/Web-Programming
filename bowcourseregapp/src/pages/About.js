import React from "react";
import nestle from "../images/nestle.png";
import jess from "../images/jess.png";
import felix from "../images/felix.png";

function About() {
  return (
    <>
      <div class="jumbotron jumbotron-fluid">
        <h3 class="text-muted text-center py-4">About Us</h3>
        <div class="container my-3 text-center">
          <h1 class="lead text-center py-0">Meet our development team.</h1>
        </div>
      </div>
      <div class="container my-4 py-4 text-center text-muted">
        <div class="row">
          <div class="col-lg-4">
            <img
              class="rounded-circle"
              src={nestle}
              alt="Generic placeholder image"
              width="200"
              height="200"
            />
            <h2>Nestle Juco</h2>
            <p>Software Development</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">
                View Bio &raquo;
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <img
              class="rounded-circle"
              src={jess}
              alt="Generic placeholder image"
              width="200"
              height="200"
            />
            <h2>Jessica Wilkinson</h2>
            <p>Software Development</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">
                View Bio &raquo;
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <img
              class="rounded-circle"
              src={felix}
              alt="Generic placeholder image"
              width="200"
              height="200"
            />
            <h2>Felix Crampatanta</h2>
            <p>Software Development</p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">
                View Bio &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
