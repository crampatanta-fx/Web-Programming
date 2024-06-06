import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AdminFeedback() {
  const firstName = localStorage.getItem("FirstName");
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFeedbackData, setFilteredFeedbackData] = useState([]);

  const filterFeedbackData = () => {
    const filteredList = feedbackData.filter((feedback) => {
      return (
        feedback.FullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feedback.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feedback.Subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feedback.ContactNo.toString().includes(searchTerm) ||
        feedback.Message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredFeedbackData(filteredList);
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/feedback")
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data);
        setLoading(false);
        filterFeedbackData();
      })
      .catch((error) => console.error("Error fetching feedback data:", error));
  }, [searchTerm, feedbackData]);

  return (
    <>
      <div className="my-0">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-5">
            <p className="col-lg-8 mx-auto lead">
              Welcome, <b>{firstName}!</b>
            </p>
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
            <Link to="/AdminFeedback" className="btn btn-danger btn-md ms-2">
              Feedback
            </Link>
            <div className="divider d-flex align-items-center my-4" />
            Search Record &nbsp;
            <input
              type="text"
              className="form border"
              placeholder="Enter Search Keyword"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                filterFeedbackData();
              }}
            />
            <div className="divider d-flex align-items-center my-4" />
            <div className="my-0" id="Feedback">
              <div className="p-1 text-center bg-body-tertiary">
                <div className="container py-1">
                  <h3 className="text-body">Feedback and Inquiry Records</h3>

                  <table>
                    <thead>
                      <tr>
                        <th>Feedback ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Contact No</th>
                        <th>Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredFeedbackData.length > 0
                        ? filteredFeedbackData.map((feedback) => (
                            <tr key={feedback.FeedbackID}>
                              <td>{feedback.FeedbackID}</td>
                              <td>{feedback.FullName}</td>
                              <td>{feedback.Email}</td>
                              <td>{feedback.Subject}</td>
                              <td>{feedback.ContactNo}</td>
                              <td>{feedback.Message}</td>
                            </tr>
                          ))
                        : feedbackData.map((feedback) => (
                            <tr key={feedback.FeedbackID}>
                              <td>{feedback.FeedbackID}</td>
                              <td>{feedback.FullName}</td>
                              <td>{feedback.Email}</td>
                              <td>{feedback.Subject}</td>
                              <td>{feedback.ContactNo}</td>
                              <td>{feedback.Message}</td>
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

export default AdminFeedback;
