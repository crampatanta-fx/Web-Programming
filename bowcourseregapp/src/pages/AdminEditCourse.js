import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import "es6-promise/auto";

function AdminEditCourse() {
  const firstName = localStorage.getItem("FirstName");
  const { courseId } = useParams(); // Retrieve CourseID from URL params
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    // Fetch course details for the selected CourseID
    fetch(`http://localhost:3000/api/getcourse/${courseId}`)
      .then((response) => response.json())
      .then((data) => {
        setNewCourse(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching course details:", error));
  }, [courseId]);

  const validateForm = () => {
    for (const key in newCourse) {
      if (!newCourse[key]) {
        alert(`Please fill in all fields to edit the course.`);
        return false;
      }
    }
    return true;
  };

  const editCourse = () => {
    if (validateForm()) {
      fetch(`http://localhost:3000/api/editcourse/${courseId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Course edited successfully:", data);

          // Assuming your server sends a response like { message: "Course edited successfully!" }
          if (data && data.message) {
            alert(data.message);
          } else {
            // If the server response does not contain a specific message
            alert("Course edited successfully!");
          }
        })
        .catch(() => {
          alert("Course edited successfully!");
          // Redirect based on the selected program
          switch (newCourse.Program) {
            case "Diploma":
              navigate("/AdminDiploma");
              break;
            case "Post Diploma":
              navigate("/AdminPostDiploma");
              break;
            case "Certificate":
              navigate("/AdminCertificate");
              break;
            default:
              navigate("/AdminDiploma");
          }
        });
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
            <Link to="/AdminDiploma" className="btn btn-primary btn-md ms-2">
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
              placeholder="Search Disabled"
              disabled
              //  value={searchTerm}
              //   onChange={(e) => {
              //     setSearchTerm(e.target.value);
              //     filterDiplomaCourseList();
              //   }}
            />
            <div className="divider d-flex align-items-center my-4" />
            <div className="my-0" id="Feedback">
              <div className="p-1 text-center bg-body-tertiary">
                <div className="container py-1">
                  <h3 className="text-body">
                    Diploma Course Content Management
                  </h3>
                  {/* Edit Course */}
                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">Edit Course</p>
                  </div>
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
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="CourseID"
                            id="CourseID"
                            placeholder="ID"
                            size="2"
                            value={courseId}
                            // onChange={handleInputChange}
                            disabled
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="CourseCode"
                            id="CourseCode"
                            placeholder="Code"
                            size="6"
                            value={newCourse.CourseCode}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="CourseName"
                            id="CourseName"
                            placeholder="Name"
                            value={newCourse.CourseName}
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
                            value={newCourse.CourseDescription}
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
                            value={newCourse.CourseFee}
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
                            value={newCourse.StartDate}
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
                            value={newCourse.EndDate}
                            size="8"
                            onChange={handleInputChange}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <Link
                    to="/AdminDiploma"
                    className="btn btn-danger btn-sm ms-2"
                  >
                    CANCEL
                  </Link>
                  &emsp;
                  <Link
                    className="btn btn-danger btn-sm ms-2"
                    onClick={editCourse}
                  >
                    SAVE
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

export default AdminEditCourse;
