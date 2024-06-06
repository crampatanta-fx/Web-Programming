//Courses.js
import React, { useEffect, useRef, useState } from "react";
function Courses() {
  const courseRefs = [useRef(), useRef(), useRef()];

  useEffect(() => {
    const scrollToRef = (index) => {
      if (courseRefs[index].current) {
        courseRefs[index].current.scrollIntoView({ behavior: "smooth" });
      }
    };
    scrollToRef(0);
  }, []);

  return (
    <>
      <div class="jumbotron jumbotron-fluid">
        <h3 class="text-muted text-center py-4">Courses Offered</h3>
        <div class="container my-0 text-center">
          <h1 class="lead text-center py-0">
            Find the right program and course for you.
          </h1>
        </div>
      </div>
      <div class="my-0" id="Diploma">
        <div class="p-5 text-center bg-body-tertiary">
          <div class="container py-5">
            <h1 class="text-body-emphasis" ref={courseRefs[0]}>
              Diploma
            </h1>

            <p class="col-lg-8 mx-auto lead">
              Gain the skills you need to create the latest computer, mobile,
              and gaming applications. Prepare to transform your ideas into
              reality all while developing your problem-solving skills.
            </p>

            <br />
            <br />

            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action active"
                aria-current="true"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h4 class="mb-1">Term 1</h4>

                  <small>September 1 - December 20</small>
                </div>

                <p class="mb-1" style={{ textAlign: "left" }}></p>
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Project Management</h5>

                  <small class="text-body-secondary">PR111</small>
                </div>

                <br />

                <p class="mb-1">
                  This course introduces the fundamental principles necessary
                  for successful management of software projects.
                </p>

                <br />
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">C++ Programming Fundamentals</h5>

                  <small class="text-body-secondary">C++111</small>
                </div>

                <br />

                <p class="mb-1">
                  Computer programming is central to software development.
                  <br />
                  Learners analyze basic software and technology problems and
                  develop a good programming style and logical thinking
                  <br />
                  to write structured instruction that addresses those problems.{" "}
                </p>

                <br />
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Computer Maintenance</h5>

                  <small class="text-body-secondary">COMPM1111</small>
                </div>

                <br />

                <p class="mb-1">
                  Learners explore the internet of things through the
                  construction of simple interfaces between computers
                  <br />
                  and the devices they control.
                </p>

                <br />
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Information Security 1</h5>

                  <small class="text-body-secondary">IS1111</small>
                </div>

                <br />

                <p class="mb-1">
                  This course provides the learners with a foundation in
                  networking concepts and technologies,
                  <br />
                  with emphasis on terminology, protocols, error
                  detection/correction and network security.
                </p>

                <br />
              </a>
            </div>

            <br />
            <br />

            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action active"
                aria-current="true"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h4 class="mb-1">Term 2</h4>

                  <small>January 5 - May 2</small>
                </div>

                <p class="mb-1" style={{ textAlign: "left" }}></p>
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Networking</h5>

                  <small class="text-body-secondary">NET222</small>
                </div>

                <br />

                <p class="mb-1">
                  This course introduces how network systems interconnect
                  computer related resources, services and users.
                </p>

                <br />
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Web Technology</h5>

                  <small class="text-body-secondary">WEB222</small>
                </div>

                <br />

                <p class="mb-1">
                  This course provides learners with foundational web
                  programming knowledge and skills.
                  <br />
                  Learners focus on basic to advanced JavaScript programming to
                  build dynamic web application
                  <br />
                  and use it as a backend scripting language with one of the
                  modern JavaScript library node.js.e
                </p>

                <br />
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Project Management</h5>

                  <small class="text-body-secondary">PR222</small>
                </div>

                <br />

                <p class="mb-1">
                  Building on Project Management - PR111, PR222 teaches project
                  planning, management and execution
                  <br />
                  along with control techniques will be discussed and the
                  application of computers in project management will be
                  studied.
                </p>

                <br />
              </a>
            </div>

            <br />
            <br />

            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action active"
                aria-current="true"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h4 class="mb-1">Term 3</h4>

                  <small>September 1 - December 20</small>
                </div>

                <p class="mb-1" style={{ textAlign: "left" }}></p>
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Advanced Project Management 1</h5>

                  <small class="text-body-secondary">PR333</small>
                </div>

                <br />

                <p class="mb-1">
                  This course builds upon the fundamental principles necessary
                  for successful management of software projects
                  <br />
                  learned in Project Management - PR111. Learners will also
                  explore the different project management methodologies
                  <br />
                  in place to manage projects of different scope.
                </p>

                <br />
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Advanced C++ Programming Fundamentals</h5>

                  <small class="text-body-secondary">C++333</small>
                </div>

                <br />

                <p class="mb-1">
                  Building on their knowledge from C++ Programming Fundamentals
                  - C++111,
                  <br />
                  learners will demonstrate their structured coding skills by
                  writing correct code with clarity and quality.
                  <br />
                  They use extensively the structured control flow, repetition,
                  block structure, and subroutines in this course.
                </p>

                <br />
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Advanced Computer Maintenance</h5>

                  <small class="text-body-secondary">COMPM333</small>
                </div>

                <br />

                <p class="mb-1">
                  {" "}
                  Through the creation of the interfaces built in Computer
                  Maintenance - COMPM1111, learners gain insight into
                  <br />
                  the elements of computer architecture, networking, and the
                  programs that control device function within that network.
                </p>

                <br />
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Advanced Information Security 1</h5>

                  <small class="text-body-secondary">IS333</small>
                </div>

                <p class="mb-1">
                  {" "}
                  <br />
                  <p class="mb-1">
                    To understand the practical aspect of enterprise computing,
                    the learner will build a<br />
                    working example of a dynamic, secure web enterprise
                    application.
                  </p>
                  <br />
                </p>
              </a>
            </div>

            <br />
            <br />

            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action active"
                aria-current="true"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h4 class="mb-1">Term 4</h4>

                  <small>January 5 - May 2</small>
                </div>

                <p class="mb-1" style={{ textAlign: "left" }}></p>
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Advanced Networking</h5>

                  <small class="text-body-secondary">NET444</small>
                </div>

                <br />

                <p class="mb-1">
                  This course will Build on the fundamentals of Networking
                  learned in Networking - NET222.
                  <br />
                  Through course activities, learners develop skills to plan and
                  implement small networks across a range of applications.
                </p>

                <br />
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Advanced Web Technology</h5>

                  <small class="text-body-secondary">WEB444</small>
                </div>

                <br />

                <p class="mb-1">
                  Learners explore the concept of web application architecture
                  and other JavaScript libraries like jQuery and Node.js
                  <br />
                  packages throughout the course, and build a basic full stack
                  application.
                </p>

                <br />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="my-5" id="PostDiploma">
        <div class="p-5 text-center bg-body-tertiary">
          <div class="container py-5">
            <h1 class="text-body-emphasis" ref={courseRefs[1]}>
              Post-Diploma
            </h1>

            <p class="col-lg-8 mx-auto lead">
              A post-diploma is a college-level credential acquired by
              individuals wishing to update their skills, learn a new
              technology, or learn the management side of their industry.
            </p>

            <br />
            <br />

            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action active"
                aria-current="true"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h4 class="mb-1">Term 1</h4>

                  <small>September 1 - December 20</small>
                </div>

                <p class="mb-1" style={{ textAlign: "left" }}></p>
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Advanced Project Management 1</h5>

                  <small class="text-body-secondary">PR333</small>
                </div>

                <br />

                <p class="mb-1">
                  This course builds upon the fundamental principles necessary
                  for successful management of software projects
                  <br />
                  learned in Project Management - PR111 and PR222. Learners will
                  also explore the different project management methodologies
                  <br />
                  in place to manage projects of different scope.
                </p>

                <br />
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Advanced C++ Programming Fundamentals</h5>

                  <small class="text-body-secondary">C++333</small>
                </div>

                <br />

                <p class="mb-1">
                  Building on their knowledge from C++ Programming Fundamentals
                  - C++111,
                  <br />
                  learners will demonstrate their structured coding skills by
                  writing correct code with clarity and quality.
                  <br />
                  They use extensively the structured control flow, repetition,
                  block structure, and subroutines in this course.
                </p>

                <br />
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Advanced Computer Maintenance</h5>

                  <small class="text-body-secondary">COMPM333</small>
                </div>

                <br />

                <p class="mb-1">
                  {" "}
                  Through the creation of the interfaces built in Computer
                  Maintenance - COMPM1111, learners gain insight into
                  <br />
                  the elements of computer architecture, networking, and the
                  programs that control device function within that network.
                </p>

                <br />
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Advanced Information Security 1</h5>

                  <small class="text-body-secondary">IS333</small>
                </div>

                <br />

                <p class="mb-1">
                  To understand the practical aspect of enterprise computing,
                  the learner will build a<br />
                  working example of a dynamic, secure web enterprise
                  application.
                </p>

                <br />
              </a>
            </div>

            <br />
            <br />

            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action active"
                aria-current="true"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h4 class="mb-1">Term 2</h4>

                  <small>January 5 - May 2</small>
                </div>

                <p class="mb-1" style={{ textAlign: "left" }}></p>
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Advanced Networking</h5>

                  <small class="text-body-secondary">NET444</small>
                </div>
                <br />
                <p class="mb-1">
                  This course will Build on the fundamentals of Networking
                  learned in Networking - NET222.
                  <br />
                  Through course activities, learners develop skills to plan and
                  implement small networks across a range of applications.
                </p>
                <br />{" "}
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Advanced Web Technology</h5>

                  <small class="text-body-secondary">WEB444</small>
                </div>

                <br />

                <p class="mb-1">
                  Learners explore the concept of web application architecture
                  and other JavaScript libraries like jQuery and Node.js
                  <br />
                  packages throughout the course, and build a basic full stack
                  application.
                </p>

                <br />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="my-5" id="Certificate">
        <div class="p-5 text-center bg-body-tertiary">
          <div class="container py-5">
            <h1 class="text-body-emphasis" ref={courseRefs[3]}>
              Certificate
            </h1>

            <p class="col-lg-8 mx-auto lead">
              Gain real-world knowledge and practical experience in today’s
              software industry. Learn web development, mobile application
              development, and cloud and enterprise computing while working.
            </p>

            <br />
            <br />

            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action active"
                aria-current="true"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h4 class="mb-1">Term 1</h4>

                  <small>September 1 - December 20</small>
                </div>

                <p class="mb-1" style={{ textAlign: "left" }}></p>
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Project Management</h5>

                  <small class="text-body-secondary">PR111</small>
                </div>

                <br />

                <p class="mb-1">
                  This course introduces the fundamental principles necessary
                  for successful management of software projects.
                </p>
                <br />
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">C++ Programming Fundamentals</h5>

                  <small class="text-body-secondary">C++111</small>
                </div>

                <br />

                <p class="mb-1">
                  Computer programming is central to software development.
                  <br />
                  Learners analyze basic software and technology problems and
                  develop a good programming style and logical thinking
                  <br />
                  to write structured instruction that addresses those problems.{" "}
                </p>
                <br />
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Computer Maintenance</h5>

                  <small class="text-body-secondary">COMPM1111</small>
                </div>

                <br />

                <p class="mb-1">
                  Learners explore the internet of things through the
                  construction of simple interfaces between computers
                  <br />
                  and the devices they control.
                </p>
                <br />
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Information Security 1</h5>

                  <small class="text-body-secondary">IS1111</small>
                </div>

                <br />

                <p class="mb-1">
                  This course provides the learners with a foundation in
                  networking concepts and technologies,
                  <br />
                  with emphasis on terminology, protocols, error
                  detection/correction and network security.
                </p>

                <br />
              </a>
            </div>

            <br />
            <br />

            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action active"
                aria-current="true"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h4 class="mb-1">Term 2</h4>

                  <small>January 5 - May 2</small>
                </div>

                <p class="mb-1" style={{ textAlign: "left" }}></p>
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Networking</h5>

                  <small class="text-body-secondary">NET222</small>
                </div>
                <br />
                <p class="mb-1">
                  This course introduces how network systems interconnect
                  computer related resources, services and users.
                </p>
                <br />{" "}
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Web Technology</h5>

                  <small class="text-body-secondary">WEB222</small>
                </div>

                <br />

                <p class="mb-1">
                  This course provides learners with foundational web
                  programming knowledge and skills.
                  <br />
                  Learners focus on basic to advanced JavaScript programming to
                  build dynamic web application
                  <br />
                  and use it as a backend scripting language with one of the
                  modern JavaScript library node.js.e
                </p>

                <br />

                {/* <small class="text-body-secondary">And some muted small print.</small> */}
              </a>

              <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Project Management</h5>

                  <small class="text-body-secondary">PR222</small>
                </div>

                <br />

                <p class="mb-1">
                  Building on Project Management - PR111, PR222 teaches project
                  planning, management and execution
                  <br />
                  along with control techniques will be discussed and the
                  application of computers in project management will be
                  studied.
                </p>
                <br />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
