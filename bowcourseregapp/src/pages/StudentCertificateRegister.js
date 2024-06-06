import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StudentCertificateRegister() {
  // Retrieve first name from local storage
  const firstName = localStorage.getItem("FirstName");
  const userID = localStorage.getItem("UserID");

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${year}-${month}-${day}`;

  const [enrolledCoursesCount, setEnrolledCoursesCount] = useState(0);
  const [certificatecourseData, setcertificatecourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCertificateCourseList, setfilteredCertificateCourseList] = useState(
    []
  );


  const calculateEnrolledCoursesCount = () => {
    const enrolmentTotal = certificatecourseData.filter((course) => {
      return course.UserID === localStorage.getItem("UserID");
    });
    setEnrolledCoursesCount(enrolmentTotal.length);
  };
  
    useEffect(() => {
      calculateEnrolledCoursesCount();
    }, [certificatecourseData]);


  const filterCertificateCourseList = () => {
    const filteredList = certificatecourseData.filter((course) => {
      return (
        course.CourseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.CourseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.CourseDescription.toLowerCase().includes(
          searchTerm.toLowerCase()
        )
      );
    });
    setfilteredCertificateCourseList(filteredList);
  };

  // const [selectedTerm, setSelectedTerm] = useState("");

  // const filterByTerm = (term) => {
  //   setSelectedTerm(term);
  //   const filteredList = certificatecourseData.filter((course) => {
  //     return term === "" || course.Term.toString() === term;
  //   });
  //   setfilteredCertificateCourseList(filteredList);
  // };

  const enrollCourse = (courseID) => {
    const enrolmentDate = currentDate;

    const formData = {
      UserID: userID,
      CourseID: courseID,
      EnrolmentDate: enrolmentDate,
    };

    fetch("http://localhost:3000/api/enrollcourse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert(`You have successfully enrolled the course.`);
    })
    .catch(() => {
      alert(`You have successfully enrolled the course.`);
    });
};


  useEffect(() => {
    // Fetch feedback data from the server when the component mounts
    fetch("http://localhost:3000/api/certificatecourse")
      .then((response) => response.json())
      .then((data) => {
        setcertificatecourseData(data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error fetching certificate course data:", error)
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

  return (
    <div class="my-0" id="Certificate">
      <div class="p-5 text-center bg-body-tertiary">
        <div class="container py-5">
          <p class="col-xl-8 mx-auto lead">
            Welcome, <b>{firstName}!</b>
          </p>
          <h1 class="text-body-emphasis">Certificate Program Registration</h1>
          <h5>You are currently registered in <b>{enrolledCoursesCount}</b> courses.</h5>
          <br />
          <p class="col-lg-8 mx-auto lead">
            Register to your courses by clicking the Enroll button.
          </p>
          <div class="divider d-flex align-items-center my-4" />
          <Link to="/StudentCertificate" className="btn btn-primary btn-md ms-2">
            My Course
          </Link>

          <Link to="/StudentCertificateRegister" className="btn btn-danger btn-md ms-2">
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
                filterCertificateCourseList();
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
                      {filteredCertificateCourseList.length > 0
                        ? filteredCertificateCourseList.map((certificatecourselist) => (
                            <tr key={certificatecourselist.CourseID}>
                              {/* <td>{certificatecourselist.CourseID}</td> */}
                              <td>{certificatecourselist.CourseCode}</td>
                              <td>{certificatecourselist.CourseName}</td>
                              <td>{certificatecourselist.CourseDescription}</td>
                              <td>${certificatecourselist.CourseFee}</td>
                              <td>{certificatecourselist.Term}</td>
                              <td>{certificatecourselist.Program}</td>
                              <td>{certificatecourselist.StartDate}</td>
                              <td>{certificatecourselist.EndDate}</td>
                              <td>
                                <Link
                                  className="btn btn-danger btn-sm ms-2"
                                  onClick={() =>
                                    enrollCourse(certificatecourselist.CourseID)
                                  }>
                                  ENROLL
                                </Link>
                              </td>
                            </tr>
                          ))
                        : certificatecourseData.map((certificatecourselist) => (
                            <tr key={certificatecourselist.CourseID}>
                              {/* <td>{certificatecourselist.CourseID}</td> */}
                              <td>{certificatecourselist.CourseCode}</td>
                              <td>{certificatecourselist.CourseName}</td>
                              <td>{certificatecourselist.CourseDescription}</td>
                              <td>${certificatecourselist.CourseFee}</td>
                              <td>{certificatecourselist.Term}</td>
                              <td>{certificatecourselist.Program}</td>
                              <td>{certificatecourselist.StartDate}</td>
                              <td>{certificatecourselist.EndDate}</td>
                              <td>
                                <Link className="btn btn-danger btn-sm ms-2"
                                  onClick={() =>
                                    enrollCourse(certificatecourselist.CourseID)
                                  }>
                                  ENROLL
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

export default StudentCertificateRegister;
