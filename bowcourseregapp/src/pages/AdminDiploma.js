import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AdminDiploma() {
  // Retrieve first name from local storage
  const firstName = localStorage.getItem("FirstName");
  const [diplomacourseData, setdiplomacourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDiplomaCourseList, setFilteredDiplomaCourseList] = useState(
    []
  );

  // Function to delete a course
  const deleteCourse = (courseId) => {
    fetch(`http://localhost:3000/api/deletecourse/${courseId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Course deleted successfully:", data);
        alert("Course deleted successfully!");
      })
      .catch(() => alert("Course deleted successfully!"));
  };

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
    fetch("http://localhost:3000/api/diplomacourse")
      .then((response) => response.json())
      .then((data) => {
        setdiplomacourseData(data);
        setLoading(false);
        filterDiplomaCourseList(); // Call filter function after fetching data
      })
      .catch((error) =>
        console.error("Error fetching diploma course data:", error)
      );
  }, [searchTerm, diplomacourseData]);

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
        .catch(() => alert("Course added successfully!"));
    }
  };

  return (
    <>
      <div className="my-0">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-5">
            <p className="col-lg-8 mx-auto lead">
              Welcome, <b>{firstName}!</b>
            </p>
            {/* ADMIN CMS MENU */}
            <h1 className="text-body-emphasis">Bow Space Admin DashBoard</h1>
            <div className="divider d-flex align-items-center my-4" />
            <Link to="/AdminDiploma" className="btn btn-danger btn-md ms-2">
              Diploma Course
            </Link>
            <Link
              to="/AdminPostDiploma"
              className="btn btn-primary btn-md ms-2"
            >
              Post Diploma Course
            </Link>
            <Link
              to="/AdminCertificate"
              className="btn btn-primary btn-md ms-2"
            >
              Certificate Course
            </Link>
            <Link
              to="/AdminStudentList"
              className="btn btn-primary btn-md ms-2"
            >
              Students
            </Link>
            <Link to="/AdminFeedback" className="btn btn-primary btn-md ms-2">
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
                  <h3 className="text-body">
                    Diploma Course Content Management
                  </h3>

                  <table>
                    <thead>
                      <tr>
                        <th>Course ID</th>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Description</th>
                        <th>Fee</th>
                        <th>Term</th>
                        <th>Program</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th colSpan={2}>CMS Tools</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredDiplomaCourseList.length > 0
                        ? filteredDiplomaCourseList.map((diplomacourselist) => (
                            <tr key={diplomacourselist.CourseID}>
                              <td>{diplomacourselist.CourseID}</td>
                              <td>{diplomacourselist.CourseCode}</td>
                              <td>{diplomacourselist.CourseName}</td>
                              <td>{diplomacourselist.CourseDescription}</td>
                              <td>${diplomacourselist.CourseFee}</td>
                              <td>{diplomacourselist.Term}</td>
                              <td>{diplomacourselist.Program}</td>
                              <td>{diplomacourselist.StartDate}</td>
                              <td>{diplomacourselist.EndDate}</td>
                              <td>
                                <Link
                                  to={`/AdminEditCourse/${diplomacourselist.CourseID}`}
                                  className="btn btn-danger btn-sm ms-2"
                                >
                                  EDIT
                                </Link>
                              </td>
                              <td>
                                <Link
                                  className="btn btn-danger btn-sm ms-2"
                                  onClick={() =>
                                    deleteCourse(diplomacourselist.CourseID)
                                  }
                                >
                                  DELETE
                                </Link>
                              </td>
                            </tr>
                          ))
                        : diplomacourseData.map((diplomacourselist) => (
                            <tr key={diplomacourselist.CourseID}>
                              <td>{diplomacourselist.CourseID}</td>
                              <td>{diplomacourselist.CourseCode}</td>
                              <td>{diplomacourselist.CourseName}</td>
                              <td>{diplomacourselist.CourseDescription}</td>
                              <td>${diplomacourselist.CourseFee}</td>
                              <td>{diplomacourselist.Term}</td>
                              <td>{diplomacourselist.Program}</td>
                              <td>{diplomacourselist.StartDate}</td>
                              <td>{diplomacourselist.EndDate}</td>
                              <td>
                                <Link
                                  to={`/AdminEditCourse/${diplomacourselist.CourseID}`}
                                  className="btn btn-danger btn-sm ms-2"
                                >
                                  EDIT
                                </Link>
                              </td>
                              <td>
                                <Link
                                  className="btn btn-danger btn-sm ms-2"
                                  onClick={() =>
                                    deleteCourse(diplomacourselist.CourseID)
                                  }
                                >
                                  DELETE
                                </Link>
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
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
    </>
  );
}

export default AdminDiploma;
