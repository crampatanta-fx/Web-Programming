import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function StudentDiplomaRegister() {
  // Retrieve first name from local storage
  const firstName = localStorage.getItem("FirstName");
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${year}-${month}-${day}`;
  let courseId = "1987";

  const [diplomacourseData, setdiplomacourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDiplomaCourseList, setFilteredDiplomaCourseList] = useState(
    []
  );

  const filterDiplomaCourseList = () => {
    const filteredList = diplomacourseData.filter((course) => {
      return (
        course.CourseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.CourseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.CourseDescription.toLowerCase().includes(
          searchTerm.toLowerCase()
        )
      );
    });
    setFilteredDiplomaCourseList(filteredList);
  };

  useEffect(() => {
    // Fetch feedback data from the server when the component mounts
    fetch("http://localhost:3000/api/diplomacourse")
      .then((response) => response.json())
      .then((data) => {
        setdiplomacourseData(data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error fetching diploma course data:", error)
      );
  }, []); // Empty dependency array ensures the effect runs only once

  const [newCourse, setNewCourse] = useState({
    CourseCode: "",
    CourseName: "",
    CourseDescription: "",
    CourseFee: "",
    Term: "",
    Program: "",
    StartDate: "",
    EndDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const validateForm = () => {
    for (const key in newCourse) {
      if (!newCourse[key]) {
        alert(`Please fill in all fields to add course.`);
        return false;
      }
    }
    return true;
  };

  const addCourse = () => {
    if (validateForm()) {
      fetch("http://localhost:3000/api/addcourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Course added successfully:", data);
          alert("Course added successfully!");
        })
        .catch((error) => console.error("Error adding course:", error));
    }
  };

  const [newEnrol, setNewEnrol] = useState({
    CourseID: "",
    EnrolmentID: "",
  });

  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setNewEnrol((prevEnrol) => ({
      ...prevEnrol,
      [name]: value,
    }));
  };

  const validateForm2 = () => {
    for (const key in newEnrol) {
      if (!newEnrol[key]) {
        alert(`Please fill in all fields to add enrol.`);
        return false;
      }
    }
    return true;
  };

  const enrollCourse = () => {
    //if (validateForm2()) {
      fetch("http://localhost:3000/api/enrollcourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEnrol),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Course enrolled successfully:", data);
          alert("Course enrolled successfully!");
        })
        .catch((error) => console.error("Error enrolling course:", error));
    //}
  };

  return (
    <div class="my-0" id="Diploma">
      <div class="p-5 text-center bg-body-tertiary">
        <div class="container py-5">
          <p class="col-xl-8 mx-auto lead">
            Welcome, <b>{firstName}!</b>
          </p>
          <h1 class="text-body-emphasis">Diploma Program Registration</h1>

          <p class="col-lg-8 mx-auto lead">
            Register to your courses by clicking the Enroll button.
          </p>
          <div class="divider d-flex align-items-center my-4" />
          <Link to="/StudentDiploma" className="btn btn-primary btn-md ms-2">
            My Course
          </Link>

          <Link to="/StudentDiplomaRegister" className="btn btn-danger btn-md ms-2">
            Register Course
          </Link>

          <Link to="/Contact" className="btn btn-primary btn-md ms-2">
            Feedback
          </Link>
          <div className="divider d-flex align-items-center my-4" />
          Search Course&nbsp;
            <input
              type="text"
              className="form border"
              placeholder="Enter Search Keyword"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                filterDiplomaCourseList();
              }}
            />
          <div className="divider d-flex align-items-center my-4" />
            <div className="my-0" id="Feedback">
              <div className="p-1 text-center bg-body-tertiary">
                <div className="container py-1">
                <table>
                    <thead>
                      <tr>
                        {/* <th>Course ID</th> */}
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Description</th>
                        <th>Fee</th>
                        <th>Term</th>
                        <th>Program</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>CMS Tools</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredDiplomaCourseList.length > 0
                        ? filteredDiplomaCourseList.map((diplomacourselist) => (
                            <tr key={diplomacourselist.CourseID}>
                              {/* <td>{diplomacourselist.CourseID}</td> */}
                              <td>{diplomacourselist.CourseCode}</td>
                              <td>{diplomacourselist.CourseName}</td>
                              <td>{diplomacourselist.CourseDescription}</td>
                              <td>${diplomacourselist.CourseFee}</td>
                              <td>{diplomacourselist.Term}</td>
                              <td>{diplomacourselist.Program}</td>
                              <td>{diplomacourselist.StartDate}</td>
                              <td>{diplomacourselist.EndDate}</td>
                              <td>
                              {/* <input type="hidden" name="CourseID" id="CourseID" value={diplomacourselist.CourseID} />
                              <input type="hidden" name="EnrolmentDate" id="EnrolmentDate" value={currentDate} /> */}
                                <Link
              
                                  className="btn btn-danger btn-sm ms-2"
                                  onClick={addCourse}>
                                  ENROLL
                                </Link>
                              </td>
                            </tr>
                          ))
                        : diplomacourseData.map((diplomacourselist) => (
                            <tr key={diplomacourselist.CourseID}>
                              {/* <td>{diplomacourselist.CourseID}</td> */}
                              <td>{diplomacourselist.CourseCode}</td>
                              <td>{diplomacourselist.CourseName}</td>
                              <td>{diplomacourselist.CourseDescription}</td>
                              <td>${diplomacourselist.CourseFee}</td>
                              <td>{diplomacourselist.Term}</td>
                              <td>{diplomacourselist.Program}</td>
                              <td>{diplomacourselist.StartDate}</td>
                              <td>{diplomacourselist.EndDate}</td>
                              <td>
                                {/* <input type="hidden" name="CourseID" id="CourseID" value={diplomacourselist.CourseID} />
                                <input type="hidden" name="EnrolmentDate" id="EnrolmentDate" value={currentDate} /> */}
                                <Link className="btn btn-danger btn-sm ms-2"
                                  onClick={addCourse}>
                                  ENROLL
                                </Link>
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                  {/* Enroll New Course */}
                    <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">
                      Enroll New Course
                    </p>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        {/* <th>Course ID</th> */}
                        <th>Course ID</th>
                        <th>Enrolment Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="CourseID"
                            id="CourseID"
                            value={courseId}
                            //size="6"
                            onChange={handleInputChange2}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="EnrolmentDate"
                            id="EnrolmentDate"
                            value={currentDate}
                            //size="12"
                            onChange={handleInputChange2}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <Link
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => enrollCourse}
                  >
                    ENROLL
                  </Link>
                  {/* Add New Course */}
                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">
                      Add New Course
                    </p>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        {/* <th>Course ID</th> */}
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Description</th>
                        <th>Fee</th>
                        <th>Term</th>
                        <th>Program</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {/* <td>
                          <input
                            type="text"
                            name="CourseID"
                            id="CourseID"
                            placeholder="ID"
                            size="2"
                            onChange={handleInputChange}
                          />
                        </td> */}
                        <td>
                          <input
                            type="text"
                            name="CourseCode"
                            id="CourseCode"
                            placeholder="Code"
                            size="6"
                            onChange={handleInputChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="CourseName"
                            id="CourseName"
                            placeholder="Name"
                            size="12"
                            onChange={handleInputChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="CourseDescription"
                            id="CourseDescription"
                            placeholder="Description"
                            size="40"
                            onChange={handleInputChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="CourseFee"
                            id="CourseFee"
                            placeholder="Fee"
                            size="4"
                            onChange={handleInputChange}
                          />
                        </td>
                        <td>
                          <select
                            className="select"
                            name="Term"
                            id="Term"
                            onChange={handleInputChange}
                            value={newCourse.Term}
                          >
                            <option value="" disabled>
                              Term
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </td>
                        <td>
                          <select
                            className="select"
                            name="Program"
                            id="Program"
                            onChange={handleInputChange}
                            value={newCourse.Program}
                          >
                            <option value="" disabled>
                              Program
                            </option>
                            <option value="Diploma">Diploma</option>
                            <option value="Post Diploma">Post Diploma</option>
                            <option value="Certificate">Certificate</option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="date"
                            name="StartDate"
                            id="StartDate"
                            placeholder="Start"
                            size="8"
                            onChange={handleInputChange}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            name="EndDate"
                            id="EndDate"
                            placeholder="End"
                            size="8"
                            onChange={handleInputChange}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <Link
                    className="btn btn-danger btn-sm ms-2"
                    onClick={addCourse}
                  >
                    ADD COURSE
                  </Link>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDiplomaRegister;
