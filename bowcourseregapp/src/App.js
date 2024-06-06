import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import StudentDiploma from "./pages/StudentDiploma";
import StudentPostDiploma from "./pages/StudentPostDiploma";
import StudentCertificate from "./pages/StudentCertificate";
import AdminDiploma from "./pages/AdminDiploma";
import AdminPostDiploma from "./pages/AdminPostDiploma";
import AdminCertificate from "./pages/AdminCertificate";
import AdminFeedback from "./pages/AdminFeedback";
import AdminStudentList from "./pages/AdminStudentList";
import Error from "./pages/Error";
import AdminEditCourse from "./pages/AdminEditCourse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentDiplomaRegister from "./pages/StudentDiplomaRegister";
import StudentPostDiplomaRegister from "./pages/StudentPostDiplomaRegister";
import StudentCertificateRegister from "./pages/StudentCertificateRegister";

function App() {
  return (
    <Router>
      <Navigation />
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/StudentDiploma" element={<StudentDiploma />} />
        <Route path="/StudentPostDiploma" element={<StudentPostDiploma />} />
        <Route path="/StudentCertificate" element={<StudentCertificate />} />
        <Route path="/AdminDiploma" element={<AdminDiploma />} />
        <Route path="/AdminPostDiploma" element={<AdminPostDiploma />} />
        <Route path="/AdminCertificate" element={<AdminCertificate />} />
        <Route path="/AdminFeedback" element={<AdminFeedback />} />
        <Route path="/AdminStudentList" element={<AdminStudentList />} />
        <Route
          path="/AdminEditCourse/:courseId"
          element={<AdminEditCourse />}
        />
        <Route path="/*" element={<Error />} />
        <Route
          path="/StudentDiplomaRegister"
          element={<StudentDiplomaRegister />}
        />
        <Route
          path="/StudentPostDiplomaRegister"
          element={<StudentPostDiplomaRegister />}
        />
        <Route
          path="/StudentCertificateRegister"
          element={<StudentCertificateRegister />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
