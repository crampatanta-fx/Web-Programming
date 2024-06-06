import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AdminStudentList() {
  //Search Function
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudentList, setFilteredStudentList] = useState([]);

  const filterStudentList = () => {
    const filteredList = studentlistData.filter((studentlist) => {
      const fullName = `${studentlist.FirstName} ${studentlist.LastName}`;
      return (
        fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        studentlist.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        studentlist.Department.toLowerCase().includes(
          searchTerm.toLowerCase()
        ) ||
        studentlist.Program.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredStudentList(filteredList);
  };

  // Retrieve first name from local storage
  const firstName = localStorage.getItem("FirstName");
  const [studentlistData, setstudentlistData] = useState([]);
  const [loading, setLoading] = useState(true);

  //NO SEARCH CODE...
  // useEffect(() => {
  //   // Fetch feedback data from the server when the component mounts
  //   fetch("http://localhost:3000/api/studentlist")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setstudentlistData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) =>
  //       console.error("Error fetching student list data:", error)
  //     );
  // }, []);

  //WITH SEARCH CODE...
  useEffect(() => {
    // Fetch feedback data from the server when the component mounts
    fetch("http://localhost:3000/api/studentlist")
      .then((response) => response.json())
      .then((data) => {
        setstudentlistData(data);
        setLoading(false);
        filterStudentList(); // Call filter function after fetching data
      })
      .catch((error) =>
        console.error("Error fetching student list data:", error)
      );
  }, [searchTerm, studentlistData]); // Update dependency array

  return (
    <>
      <div className="my-0">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-5">
            <p className="col-lg-8 mx-auto lead">
              Welcome, <b>{firstName}!</b>
            </p>
            <h1 className="text-body-emphasis">Bow Space Admin DashBoard</h1>
            {/* ADMIN CMS MENU */}
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
            <Link to="/AdminStudentList" className="btn btn-danger btn-md ms-2">
              Students
            </Link>
            <Link to="/AdminFeedback" className="btn btn-primary btn-md ms-2">
              Feedback
            </Link>
            <br />
            <div className="divider d-flex align-items-center my-4" />
            Search Record &nbsp;{" "}
            <input
              type="text"
              className="form border"
              placeholder="Enter Search Keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="divider d-flex align-items-center my-4" />
            <div className="my-0" id="Feedback">
              <div className="p-1 text-center bg-body-tertiary">
                <div className="container py-1">
                  <h3 className="text-body">Student Account Records</h3>

                  <table>
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-Mail</th>
                        <th>Department</th>
                        <th>Program</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudentList.length > 0
                        ? filteredStudentList.map((studentlist) => (
                            <tr key={studentlist.UserID}>
                              <td>{studentlist.FirstName}</td>
                              <td>{studentlist.LastName}</td>
                              <td>{studentlist.Email}</td>
                              <td>{studentlist.Department}</td>
                              <td>{studentlist.Program}</td>
                            </tr>
                          ))
                        : studentlistData.map((studentlist) => (
                            <tr key={studentlist.UserID}>
                              <td>{studentlist.FirstName}</td>
                              <td>{studentlist.LastName}</td>
                              <td>{studentlist.Email}</td>
                              <td>{studentlist.Department}</td>
                              <td>{studentlist.Program}</td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                  <div class="divider d-flex align-items-center my-4">
                    <p class="text-center fw-bold mx-3 mb-0">End of Record</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminStudentList;
