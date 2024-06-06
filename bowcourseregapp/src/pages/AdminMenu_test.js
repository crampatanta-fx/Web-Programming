import React from "react";
import { Link } from "react-router-dom";

function AdminMenu() {
  <>
    <h1 className="text-body-emphasis">Bow Space Admin DashBoard</h1>

    <div className="divider d-flex align-items-center my-4" />
    <Link to="/AdminDiploma" className="btn btn-primary btn-md ms-2">
      Diploma Course
    </Link>

    <Link to="/AdminPostDiploma" className="btn btn-primary btn-md ms-2">
      Post Diploma Course
    </Link>

    <Link to="/AdminCertificate" className="btn btn-primary btn-md ms-2">
      Certificate Course
    </Link>

    <Link to="/AdminStudentList" className="btn btn-primary btn-md ms-2">
      Students
    </Link>

    <Link to="/AdminFeedback" className="btn btn-danger btn-md ms-2">
      Feedback
    </Link>
    <div className="divider d-flex align-items-center my-4" />
  </>;
}

export default AdminMenu;
