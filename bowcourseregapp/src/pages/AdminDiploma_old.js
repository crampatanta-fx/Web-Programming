// import React from "react";
// import { Link } from "react-router-dom";

// function AdminDiploma() {
//   // Retrieve first name from local storage
//   const firstName = localStorage.getItem("FirstName");
//   return (
//     <>
//       <div class="my-5">
//         <div class="p-5 text-center bg-body-tertiary">
//           <div class="container py-5">
//             <p class="col-lg-8 mx-auto lead">
//               Welcome, <b>{firstName}</b>!
//             </p>
//             <h1 class="text-body-emphasis">Bow Space Admin DashBoard</h1>
//             <div class="divider d-flex align-items-center my-4" />
//             <Link to="/AdminDiploma" className="btn btn-danger btn-md ms-2">
//               Diploma Course
//             </Link>

//             <input
//               type="submit"
//               name="PostDiplomaCourses"
//               id="PostDiplomaCourses"
//               class="btn btn-primary btn-md ms-2"
//               value="Post Diploma Course"
//             />

//             <input
//               type="submit"
//               name="CertificateCourses"
//               id="CertificateCourses"
//               class="btn btn-primary btn-md ms-2"
//               value="Certificate Course"
//             />

//             <Link
//               to="/AdminStudentList"
//               className="btn btn-primary btn-md ms-2"
//             >
//               Students
//             </Link>

//             <Link to="/AdminFeedback" className="btn btn-primary btn-md ms-2">
//               Feedback
//             </Link>
//             <br />
//             <div class="divider d-flex align-items-center my-4" />
//             <div class="list-group">
//               <a
//                 href="#"
//                 class="list-group-item list-group-item-action active"
//                 aria-current="true"
//               >
//                 <div class="d-flex w-100 justify-content-between">
//                   <h3 class="mb-1">Course Name</h3>

//                   <h6>Course Dates</h6>
//                 </div>

//                 <p class="mb-1" style={{ textAlign: "left" }}></p>
//               </a>

//               <a href="#" class="list-group-item list-group-item-action py-4">
//                 <div class="d-flex w-100 justify-content-between">
//                   <h5 class="mb-1">Project Management - PR111</h5>

//                   <small class="text-body-secondary">
//                     September 1 - December 20, 2023
//                   </small>
//                 </div>

//                 <br />

//                 <p class="mb-1">
//                   This course introduces the fundamental principles necessary
//                   for successful management of software projects.
//                 </p>

//                 <br />
//                 <input
//                   type="submit"
//                   id="add"
//                   class="btn btn-outline-primary btn-md"
//                   value="Add"
//                 />
//                 <input
//                   type="submit"
//                   id="edit"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Edit"
//                 />
//                 <input
//                   type="submit"
//                   id="delete"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Delete"
//                 />
//               </a>

//               <a href="#" class="list-group-item list-group-item-action py-4">
//                 <div class="d-flex w-100 justify-content-between">
//                   <h5 class="mb-1">C++ Programming Fundamentals - C++111</h5>

//                   <small class="text-body-secondary">
//                     September 1 - December 20, 2023
//                   </small>
//                 </div>

//                 <br />

//                 <p class="mb-1">
//                   Computer programming is central to software development.
//                   <br />
//                   Learners analyze basic software and technology problems and
//                   develop a good programming style and logical thinking
//                   <br />
//                   to write structured instruction that addresses those problems.{" "}
//                 </p>

//                 <br />
//                 <input
//                   type="submit"
//                   id="add"
//                   class="btn btn-outline-primary btn-md"
//                   value="Add"
//                 />
//                 <input
//                   type="submit"
//                   id="edit"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Edit"
//                 />
//                 <input
//                   type="submit"
//                   id="delete"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Delete"
//                 />
//               </a>

//               <a href="#" class="list-group-item list-group-item-action py-4">
//                 <div class="d-flex w-100 justify-content-between">
//                   <h5 class="mb-1">Computer Maintenance - COMPM1111</h5>

//                   <small class="text-body-secondary">
//                     September 1 - December 20, 2023
//                   </small>
//                 </div>

//                 <br />

//                 <p class="mb-1">
//   Learners explore the internet of things through the
//   construction of simple interfaces between computers
//   <br />
//   and the devices they control.
//                 </p>

//                 <br />
//                 <input
//                   type="submit"
//                   id="add"
//                   class="btn btn-outline-primary btn-md"
//                   value="Add"
//                 />
//                 <input
//                   type="submit"
//                   id="edit"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Edit"
//                 />
//                 <input
//                   type="submit"
//                   id="delete"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Delete"
//                 />
//               </a>

//               <a href="#" class="list-group-item list-group-item-action py-4">
//                 <div class="d-flex w-100 justify-content-between">
//                   <h5 class="mb-1">Information Security 1 - IS1111</h5>

//                   <small class="text-body-secondary">
//                     September 1 - December 20, 2023
//                   </small>
//                 </div>

//                 <br />

//                 <p class="mb-1">
//                   This course provides the learners with a foundation in
//                   networking concepts and technologies,
//                   <br />
//                   with emphasis on terminology, protocols, error
//                   detection/correction and network security.
//                 </p>

//                 <br />
//                 <input
//                   type="submit"
//                   id="add"
//                   class="btn btn-outline-primary btn-md"
//                   value="Add"
//                 />
//                 <input
//                   type="submit"
//                   id="edit"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Edit"
//                 />
//                 <input
//                   type="submit"
//                   id="delete"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Delete"
//                 />
//               </a>
//               <a href="#" class="list-group-item list-group-item-action py-4">
//                 <div class="d-flex w-100 justify-content-between">
//                   <h5 class="mb-1">Networking - NET222</h5>

//                   <small class="text-body-secondary">
//                     January 5 - May 2, 2024
//                   </small>
//                 </div>

//                 <br />

//                 <p class="mb-1">
//                   This course introduces how network systems interconnect
//                   computer related resources, services and users.
//                 </p>

//                 <br />
//                 <input
//                   type="submit"
//                   id="add"
//                   class="btn btn-outline-primary btn-md"
//                   value="Add"
//                 />
//                 <input
//                   type="submit"
//                   id="edit"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Edit"
//                 />
//                 <input
//                   type="submit"
//                   id="delete"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Delete"
//                 />
//               </a>

//               <a href="#" class="list-group-item list-group-item-action py-4">
//                 <div class="d-flex w-100 justify-content-between">
//                   <h5 class="mb-1">Web Technology - WEB222</h5>

//                   <small class="text-body-secondary">
//                     January 5 - May 2, 2024
//                   </small>
//                 </div>

//                 <br />

//                 <p class="mb-1">
//                   This course provides learners with foundational web
//                   programming knowledge and skills.
//                   <br />
//                   Learners focus on basic to advanced JavaScript programming to
//                   build dynamic web application
//                   <br />
//                   and use it as a backend scripting language with one of the
//                   modern JavaScript library node.js.e
//                 </p>

//                 <br />
//                 <input
//                   type="submit"
//                   id="add"
//                   class="btn btn-outline-primary btn-md"
//                   value="Add"
//                 />
//                 <input
//                   type="submit"
//                   id="edit"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Edit"
//                 />
//                 <input
//                   type="submit"
//                   id="delete"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Delete"
//                 />
//               </a>

//               <a href="#" class="list-group-item list-group-item-action py-4">
//                 <div class="d-flex w-100 justify-content-between">
//                   <h5 class="mb-1">Project Management - PR222</h5>

//                   <small class="text-body-secondary">
//                     January 5 - May 2, 2024
//                   </small>
//                 </div>

//                 <br />

//                 <p class="mb-1">
//                   Building on Project Management - PR111, PR222 teaches project
//                   planning, management and execution
//                   <br />
//                   along with control techniques will be discussed and the
//                   application of computers in project management will be
//                   studied.
//                 </p>

//                 <br />
//                 <input
//                   type="submit"
//                   id="add"
//                   class="btn btn-outline-primary btn-md"
//                   value="Add"
//                 />
//                 <input
//                   type="submit"
//                   id="edit"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Edit"
//                 />
//                 <input
//                   type="submit"
//                   id="delete"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Delete"
//                 />
//               </a>

//               <a href="#" class="list-group-item list-group-item-action py-4">
//                 <div class="d-flex w-100 justify-content-between">
//                   <h5 class="mb-1">Advanced Project Management 1 - PR333</h5>

//                   <small class="text-body-secondary">
//                     September 1 - December 20, 2024
//                   </small>
//                 </div>

//                 <br />

//                 <p class="mb-1">
//                   This course builds upon the fundamental principles necessary
//                   for successful management of software projects
//                   <br />
//                   learned in Project Management - PR111. Learners will also
//                   explore the different project management methodologies
//                   <br />
//                   in place to manage projects of different scope.
//                 </p>

//                 <br />
//                 <input
//                   type="submit"
//                   id="add"
//                   class="btn btn-outline-primary btn-md"
//                   value="Add"
//                 />
//                 <input
//                   type="submit"
//                   id="edit"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Edit"
//                 />
//                 <input
//                   type="submit"
//                   id="delete"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Delete"
//                 />
//               </a>

//               <a href="#" class="list-group-item list-group-item-action py-4">
//                 <div class="d-flex w-100 justify-content-between">
//                   <h5 class="mb-1">
//                     Advanced C++ Programming Fundamentals - C++333
//                   </h5>

//                   <small class="text-body-secondary">
//                     September 1 - December 20, 2024
//                   </small>
//                 </div>

//                 <br />

//                 <p class="mb-1">
//                   Building on their knowledge from C++ Programming Fundamentals
//                   - C++111,
//                   <br />
//                   learners will demonstrate their structured coding skills by
//                   writing correct code with clarity and quality.
//                   <br />
//                   They use extensively the structured control flow, repetition,
//                   block structure, and subroutines in this course.
//                 </p>

//                 <br />
//                 <input
//                   type="submit"
//                   id="add"
//                   class="btn btn-outline-primary btn-md"
//                   value="Add"
//                 />
//                 <input
//                   type="submit"
//                   id="edit"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Edit"
//                 />
//                 <input
//                   type="submit"
//                   id="delete"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Delete"
//                 />
//               </a>

//               <a href="#" class="list-group-item list-group-item-action py-4">
//                 <div class="d-flex w-100 justify-content-between">
//                   <h5 class="mb-1">Advanced Computer Maintenance COMPM333</h5>

//                   <small class="text-body-secondary">
//                     September 1 - December 20, 2024
//                   </small>
//                 </div>

//                 <br />

//                 <p class="mb-1">
//                   {" "}
//                   Through the creation of the interfaces built in Computer
//                   Maintenance - COMPM1111, learners gain insight into
//                   <br />
//                   the elements of computer architecture, networking, and the
//                   programs that control device function within that network.
//                 </p>

//                 <br />
//                 <input
//                   type="submit"
//                   id="add"
//                   class="btn btn-outline-primary btn-md"
//                   value="Add"
//                 />
//                 <input
//                   type="submit"
//                   id="edit"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Edit"
//                 />
//                 <input
//                   type="submit"
//                   id="delete"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Delete"
//                 />
//               </a>

//               <a href="#" class="list-group-item list-group-item-action py-4">
//                 <div class="d-flex w-100 justify-content-between">
//                   <h5 class="mb-1">Advanced Information Security 1 - IS333</h5>

//                   <small class="text-body-secondary">
//                     September 1 - December 20, 2024
//                   </small>
//                 </div>

//                 <br />

//                 <p class="mb-1">
//                   To understand the practical aspect of enterprise computing,
//                   the learner will build a<br />
//                   working example of a dynamic, secure web enterprise
//                   application.
//                 </p>
//                 <br />
//                 <input
//                   type="submit"
//                   id="add"
//                   class="btn btn-outline-primary btn-md"
//                   value="Add"
//                 />
//                 <input
//                   type="submit"
//                   id="edit"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Edit"
//                 />
//                 <input
//                   type="submit"
//                   id="delete"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Delete"
//                 />
//               </a>
//               <a href="#" class="list-group-item list-group-item-action py-4">
//                 <div class="d-flex w-100 justify-content-between">
//                   <h5 class="mb-1">Advanced Networking - NET444</h5>

//                   <small class="text-body-secondary">
//                     January 5 - May 2, 2025
//                   </small>
//                 </div>

//                 <br />

//                 <p class="mb-1">
//                   This course will Build on the fundamentals of Networking
//                   learned in Networking - NET222.
//                   <br />
//                   Through course activities, learners develop skills to plan and
//                   implement small networks across a range of applications.
//                 </p>

//                 <br />
//                 <input
//                   type="submit"
//                   id="add"
//                   class="btn btn-outline-primary btn-md"
//                   value="Add"
//                 />
//                 <input
//                   type="submit"
//                   id="edit"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Edit"
//                 />
//                 <input
//                   type="submit"
//                   id="delete"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Delete"
//                 />
//               </a>

//               <a href="#" class="list-group-item list-group-item-action py-4">
//                 <div class="d-flex w-100 justify-content-between">
//                   <h5 class="mb-1">Advanced Web Technology - WEB444</h5>

//                   <small class="text-body-secondary">
//                     January 5 - May 2, 2025
//                   </small>
//                 </div>

//                 <br />

//                 <p class="mb-1">
//                   Learners explore the concept of web application architecture
//                   and other JavaScript libraries like jQuery and Node.js
//                   <br />
//                   packages throughout the course, and build a basic full stack
//                   application.
//                 </p>

//                 <br />
//                 <input
//                   type="submit"
//                   id="add"
//                   class="btn btn-outline-primary btn-md"
//                   value="Add"
//                 />
//                 <input
//                   type="submit"
//                   id="edit"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Edit"
//                 />
//                 <input
//                   type="submit"
//                   id="delete"
//                   class="btn btn-outline-primary btn-md ms-2"
//                   value="Delete"
//                 />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AdminDiploma;
