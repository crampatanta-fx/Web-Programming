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
    // Term: "",
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

  const enrollCourse = () => {
    //if (validateForm()) {
      fetch("http://localhost:3000/api/enrollcourse", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        //body: JSON.stringify(newEnrol),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Course enrolled successfully:", data);
          alert("Course enrolled successfully!");
        })
        .catch((error) => console.error("Error enrolling course:", error));
    };

  // const enrollCourse = () => {
  //   //if (validateForm()) {
  //     fetch("http://localhost:3000/api/enrollcourse", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newEnrol),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Course enrolled successfully:", data);
  //         alert("Course enrolled successfully!");
  //       })
  //       .catch((error) => console.error("Error enrolling course:", error));
  //   };
  //};

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
                              <input type="hidden" name="CourseID" id="CourseID" value={diplomacourselist.CourseID} />
                              <input type="hidden" name="EnrolmentDate" id="EnrolmentDate" value={currentDate} />
                                <Link
              
                                  className="btn btn-danger btn-sm ms-2"
                                  onClick={enrollCourse}>
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
                                <input type="hidden" name="CourseID" id="CourseID" value={diplomacourselist.CourseID} />
                                <input type="hidden" name="EnrolmentDate" id="EnrolmentDate" value={currentDate} />
                                <Link className="btn btn-danger btn-sm ms-2"
                                  onClick={enrollCourse}>
                                  ENROLL
                                </Link>
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
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
                            value="1111"
                            onChange={handleInputChange2}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="EnrolmentDate"
                            id="EnrolmentDate"
                            value={currentDate}
                            onChange={handleInputChange2}
                          />
                        </td>
                        
                        
                        </tr>
                    </tbody>
                  </table>
                  <br />
                  <Link
                    className="btn btn-danger btn-sm ms-2"
                    onClick={enrollCourse}
                  >
                    ENROLL
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
