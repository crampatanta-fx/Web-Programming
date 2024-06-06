import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StudentPostDiploma() {
  // Retrieve first name from local storage
  const firstName = localStorage.getItem("FirstName");
  const userID = localStorage.getItem("UserID");
  const [enrolledCoursesCount, setEnrolledCoursesCount] = useState();
  const [postdiplomacourseData, setpostdiplomacourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPostDiplomaCourseList, setfilteredPostDiplomaCourseList] = useState(
    []
  );

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;

  // Function to drop a course
  const dropCourse = (courseId) => {
    fetch(`http://localhost:3001/api/dropcourse/${courseId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Course dropped successfully:", data);
        alert("Course dropped successfully!");
      })
      .catch(() => alert("Course dropped successfully!"));
    };


  const calculateEnrolledCoursesCount = () => {
    const enrolmentTotal = postdiplomacourseData.filter((course) => {
      return course.UserID === localStorage.getItem("UserID");
    });
    setEnrolledCoursesCount(enrolmentTotal.length);
  };
  
    useEffect(() => {
      calculateEnrolledCoursesCount();
    }, [postdiplomacourseData]);


  const filterPostDiplomaCourseList = () => {
    const filteredList = postdiplomacourseData.filter((course) => {
      return (
        course.CourseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.CourseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.CourseDescription.toLowerCase().includes(
          searchTerm.toLowerCase()
        )
      );
    });
    setfilteredPostDiplomaCourseList(filteredList);
  };


  const fetchPostDiplomaCourseData = async () => {
    try {
      // Get the logged-in user's ID
      const loggedInUserID = localStorage.getItem("UserID");

      // Fetch data from the server using the user ID
      const response = await fetch(
        `http://localhost:3001/api/mycourse?userID=${loggedInUserID}`
      );
      const data = await response.json();

      setpostdiplomacourseData(data);
      setLoading(false);
    } catch (error){
      console.error("Error fetching diploma course data:", error);
    }
  };
  const loggedInUserID = userID;
  useEffect(() => {
    fetchPostDiplomaCourseData();
  }, [loggedInUserID, searchTerm, postdiplomacourseData]);

  // useEffect(() => {
  //   // Fetch feedback data from the server when the component mounts
  //   fetch("http://localhost:3000/api/mycourse")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setpostdiplomacourseData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) =>
  //       console.error("Error fetching post diploma course data:", error)
  //     );
  // }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div class="my-0" id="PostDiploma">
      <div class="p-5 text-center bg-body-tertiary">
        <div class="container py-5">
          <p class="col-xl-8 mx-auto lead">
            Welcome, <b>{firstName}!</b>
            <br />
            <br />
            Logged ID:<b>{userID}</b>
            &emsp; Date:<b>{currentDate}</b>
          </p>
          <h1 class="text-body-emphasis">My Registered Courses</h1>
          <h5>You are currently registered in <b>{enrolledCoursesCount}</b> courses.</h5>
          <br />
          <p class="col-lg-8 mx-auto lead">
            Remove your registered courses by clicking Drop button.
          </p>
          <div class="divider d-flex align-items-center my-4" />
          <Link to="/StudentPostDiploma" className="btn btn-danger btn-md ms-2">
            My Course
          </Link>

          <Link to="/StudentPostDiplomaRegister" className="btn btn-primary btn-md ms-2">
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
                filterPostDiplomaCourseList();
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
                      {filteredPostDiplomaCourseList.length > 0
                        ? filteredPostDiplomaCourseList.map((postdiplomacourselist) => (
                            <tr key={postdiplomacourselist.CourseID}>
                              {/* <td>{postdiplomacourselist.CourseID}</td> */}
                              <td>{postdiplomacourselist.CourseCode}</td>
                              <td>{postdiplomacourselist.CourseName}</td>
                              <td>{postdiplomacourselist.CourseDescription}</td>
                              <td>${postdiplomacourselist.CourseFee}</td>
                              <td>{postdiplomacourselist.Term}</td>
                              <td>{postdiplomacourselist.Program}</td>
                              <td>{postdiplomacourselist.StartDate}</td>
                              <td>{postdiplomacourselist.EndDate}</td>
                              <td>
                                <Link
                                  className="btn btn-danger btn-sm ms-2"
                                  onClick={() =>
                                    dropCourse(postdiplomacourselist.CourseID)
                                  }>
                                  DROP
                                </Link>
                              </td>
                            </tr>
                          ))
                        : postdiplomacourseData.map((postdiplomacourselist) => (
                            <tr key={postdiplomacourselist.CourseID}>
                              {/* <td>{postdiplomacourselist.CourseID}</td> */}
                              <td>{postdiplomacourselist.CourseCode}</td>
                              <td>{postdiplomacourselist.CourseName}</td>
                              <td>{postdiplomacourselist.CourseDescription}</td>
                              <td>${postdiplomacourselist.CourseFee}</td>
                              <td>{postdiplomacourselist.Term}</td>
                              <td>{postdiplomacourselist.Program}</td>
                              <td>{postdiplomacourselist.StartDate}</td>
                              <td>{postdiplomacourselist.EndDate}</td>
                              <td>
                                <Link className="btn btn-danger btn-sm ms-2"                                  onClick={() =>
                                    dropCourse(postdiplomacourselist.CourseID)
                                  }>
                                  DROP
                                </Link>
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPostDiploma;
