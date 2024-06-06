// import React, { useState } from "react";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     contactnum: "",
//     message: "",
//   });

import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Contact() {
  const feedbackRef = useRef();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      await axios.post("http://localhost:3000/api/feedback", formObject);
      alert("Feedback Sent!");
      navigate("/Contact");
    } catch (error) {
      console.error("Error sending feedback:", error);
      alert("Error sending feedback. Please try again.");
    }
  };

  return (
    <>
      <div class="jumbotron jumbotron-fluid">
        <h3 class="text-muted text-center py-4">Contact Us</h3>
        <div class="container my-3 text-center">
          <h1 class="lead text-center py-0">Find our school in Calgary.</h1>
        </div>
      </div>

      <div class="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.333771916214!2d-114.05857222396867!3d51.04692454423879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717ad00ad231a9%3A0x34c6c179aae00af8!2sBow%20Valley%20College%2C%20South%20Campus!5e0!3m2!1sen!2sca!4v1697816239019!5m2!1sen!2sca"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="container-fluid bg-light my-3 py-4 px-5">
        <section class="mb-4 my-3 bg-light px-5">
          <h1 class="lead text-center my-3">
            For program or course inquiries and feedback. Please do not hesitate
            to contact us directly or sign the form below.
          </h1>

          <div class="row">
            <div class="col-md-9 mb-md-0 mb-5">
              {/* <form
                id="contact-form"
                name="contact-form"
                onSubmit={handleSubmit}
              > */}
              <form
                id="contact-form"
                name="contact-form"
                action=""
                method="post"
                onSubmit={handleFormSubmit}
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="FullName"
                        name="FullName"
                        class="form-control"
                        placeholder="Full Name"
                        required
                      />

                      <label for="name" class="">
                        &nbsp;
                      </label>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="email"
                        id="Email"
                        name="Email"
                        class="form-control"
                        placeholder="E-mail"
                        required
                      />

                      <label for="email" class="">
                        &nbsp;
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="Subject"
                        name="Subject"
                        class="form-control"
                        placeholder="Subject"
                      />

                      <label for="subject" class="">
                        &nbsp;
                      </label>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="number"
                        id="ContactNo"
                        name="ContactNo"
                        class="form-control"
                        placeholder="Contact Number"
                        required
                      />

                      <label for="name" class="">
                        &nbsp;
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form">
                      <textarea
                        type="text"
                        id="Message"
                        name="Message"
                        rows="4"
                        class="form-control md-textarea"
                        placeholder="Message Inquiry"
                      ></textarea>

                      <label for="message">&nbsp;</label>
                    </div>
                  </div>
                </div>

                <div class="text-center text-md-left">
                  <input
                    class="btn btn-outline-primary"
                    type="reset"
                    name="reset"
                    value="Clear Form"
                  />
                  &emsp;
                  <input
                    class="btn btn-primary"
                    type="submit"
                    name="submit"
                    value="Send Message"
                  />
                </div>
              </form>
            </div>

            <div class="col-md-3 text-center">
              <ul class="list-unstyled mb-0">
                <li>
                  <i class="fas fa-map-marker-alt fa-2x"></i>

                  <p>345 6 Ave SE, Calgary, AB T2G 4V1</p>
                </li>

                <li>
                  <i class="fas fa-phone mt-4 fa-2x"></i>

                  <p>+14034101400</p>
                </li>

                <li>
                  <i class="fas fa-envelope mt-4 fa-2x"></i>

                  <p>info@bowvalleycollege.ca</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
