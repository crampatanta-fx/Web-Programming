//server.js
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
// Enable parsing of JSON data
app.use(bodyParser.json());

const db = new sqlite3.Database("C:/sqlite/bowcourseregappDB.db");

//Fetch Users Data API - JSON File Output
app.get("/api/studentlist", (req, res) => {
  db.all("SELECT * FROM Users", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(rows); //Print Users Table Data in JSON format
    }
  });
});

//Signup API
app.post("/api/signup", (req, res) => {
  const formData = req.body;

  // Insert data into the Users table
  const stmt = db.prepare(`
    INSERT INTO Users (
      FirstName, LastName, Email, Phone, Address, Gender,
      DateofBirth, Department, Program, Username, Password, PasswordChk
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    formData.FirstName,
    formData.LastName,
    formData.Email,
    formData.Phone,
    formData.Address,
    formData.Gender,
    formData.DateofBirth,
    formData.Department,
    formData.Program,
    formData.Username,
    formData.Password,
    formData.PasswordChk,
    (err) => {
      if (err) {
        console.error("Error inserting data:", err);
        res.status(500).send("Error inserting data");
      } else {
        res.status(200).send("Registration successful!");
      }
    }
  );

  stmt.finalize();
});

// Login API
app.post("/api/users", (req, res) => {
  const { Username, Password } = req.body;

  console.log("Received login request:", { Username, Password });

  db.get(
    "SELECT * FROM Users WHERE Username = ? AND Password = ? COLLATE NOCASE",
    [Username, Password],
    (err, row) => {
      if (err) {
        console.error("Error querying database:", err);
        res.status(500).send("Internal Server Error");
      } else if (row) {
        console.log("Login successful:", row);
        res.json(row);
      } else {
        console.log("Invalid credentials. Please try again.");
        res.status(401).send("Invalid credentials. Please try again.");
      }
    }
  );
});

// Feedback Insert API
app.post("/api/feedback", (req, res) => {
  const formData = req.body;

  // Insert data into the Feedback table
  const stmt = db.prepare(`
    INSERT INTO Feedback (FullName, Email, Subject, ContactNo, Message)
    VALUES (?, ?, ?, ?, ?)
  `);

  stmt.run(
    formData.FullName,
    formData.Email,
    formData.Subject,
    formData.ContactNo,
    formData.Message,
    (err) => {
      if (err) {
        console.error("Error inserting feedback:", err);
        res.status(500).send("Error inserting feedback");
      } else {
        res.status(200).send("Feedback submitted successfully!");
      }
    }
  );

  stmt.finalize();
});

// Fetch Feedback Data API - JSON File Output
app.get("/api/feedback", (req, res) => {
  db.all("SELECT * FROM Feedback ORDER BY FeedbackID DESC", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(rows);
    }
  });
});

//Fetch Diploma Course Data API - JSON File Output
app.get("/api/diplomacourse", (req, res) => {
  db.all(
    "SELECT * FROM Courses WHERE Program = 'Diploma' ORDER BY Term ASC",
    (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500).send("Internal Server Error");
      } else {
        res.json(rows); //Print Courses Table Data in JSON format
      }
    }
  );
});

//Fetch Post-Diploma Course Data API - JSON File Output
app.get("/api/postdiplomacourse", (req, res) => {
  db.all(
    "SELECT * FROM Courses WHERE Program = 'Post Diploma' ORDER BY Term ASC",
    (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500).send("Internal Server Error");
      } else {
        res.json(rows); //Print Courses Table Data in JSON format
      }
    }
  );
});

//Fetch Certificate Course Data API - JSON File Output
app.get("/api/certificatecourse", (req, res) => {
  db.all(
    "SELECT * FROM Courses WHERE Program = 'Certificate' ORDER BY Term ASC",
    (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500).send("Internal Server Error");
      } else {
        res.json(rows); //Print Courses Table Data in JSON format
      }
    }
  );
});

// Add Course API
app.post("/api/addcourse", (req, res) => {
  const formData = req.body;

  // Convert formData.Term to an integer
  formData.Term = parseInt(formData.Term, 10);

  // Insert data into the Courses table
  const stmt = db.prepare(`
    INSERT INTO Courses (
      CourseCode, CourseName, CourseDescription, CourseFee,
      Term, Program, StartDate, EndDate
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    formData.CourseCode,
    formData.CourseName,
    formData.CourseDescription,
    formData.CourseFee,
    formData.Term,
    formData.Program,
    formData.StartDate,
    formData.EndDate,
    (err) => {
      if (err) {
        console.error("Error adding course:", err);
        res.status(500).send("Error adding course");
      } else {
        res.status(200).send("Course added successfully!");
      }
    }
  );

  stmt.finalize();
});

// Delete Course API
app.delete("/api/deletecourse/:id", (req, res) => {
  const courseId = req.params.id;

  // Delete data from the Courses table based on the CourseID
  const stmt = db.prepare("DELETE FROM Courses WHERE CourseID = ?");

  stmt.run(courseId, (err) => {
    if (err) {
      console.error("Error deleting course:", err);
      res.status(500).send("Error deleting course");
    } else {
      res.status(200).send("Course deleted successfully!");
    }
  });

  stmt.finalize();
});

//Fetch Diploma Course Data API - JSON File Output
app.get("/api/mycourse", (req, res) => {
  db.all(
    // "SELECT * FROM Courses WHERE Term = 1 AND Program = 'Diploma' ORDER BY Term ASC",
    "SELECT * FROM Courses JOIN Enrolment ON Courses.CourseID = Enrolment.CourseID JOIN Users ON Users.UserID = Enrolment.UserID",
    (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500).send("Internal Server Error");
      } else {
        res.json(rows); //Print Courses Table Data in JSON format
      }
    }
  );
});

// Fetch Course Details API for Editing Course
app.get("/api/getcourse/:id", (req, res) => {
  const courseId = req.params.id;

  db.get("SELECT * FROM Courses WHERE CourseID = ?", [courseId], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(row);
    }
  });
});

// Edit Course API
app.put("/api/editcourse/:id", (req, res) => {
  const courseId = req.params.id;
  const formData = req.body;

  // Update data in the Courses table based on the CourseID
  const stmt = db.prepare(`
    UPDATE Courses
    SET
      CourseCode = ?,
      CourseName = ?,
      CourseDescription = ?,
      CourseFee = ?,
      Term = ?,
      Program = ?,
      StartDate = ?,
      EndDate = ?
    WHERE CourseID = ?
  `);

  stmt.run(
    formData.CourseCode,
    formData.CourseName,
    formData.CourseDescription,
    formData.CourseFee,
    formData.Term,
    formData.Program,
    formData.StartDate,
    formData.EndDate,
    courseId,
    (err) => {
      if (err) {
        console.error("Error editing course:", err);
        res.status(500).send("Error editing course");
      } else {
        res.status(200).send("Course edited successfully!");
      }
    }
  );

  stmt.finalize();
});

//Fetch My Course Data API - JSON File Output
app.get("/api/mycourse", (req, res) => {
  db.all(
    "SELECT * FROM Courses JOIN Enrolment ON Courses.CourseID = Enrolment.CourseID JOIN Users ON Users.UserID = Enrolment.UserID",
    (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500).send("Internal Server Error");
      } else {
        res.json(rows); //Print Enrolment Table Data in JSON format
      }
    }
  );
});

// Enroll Course API
app.post("/api/enrollcourse", (req, res) => {
  const formData = req.body;

  // Insert data into the Enrolment table
  const stmt = db.prepare(`
    INSERT INTO Enrolment (
      UserID, CourseID, EnrolmentDate
    ) VALUES (?, ?, ?)
  `);

  stmt.run(
    formData.UserID,
    formData.CourseID,
    formData.EnrolmentDate,
    (err) => {
      if (err) {
        console.error("Error enrolling course:", err);
        res.status(500).send("Error enrolling course");
      } else {
        res.status(200).json({ message: "Course enrolled successfully!" });
      }
    }
  );

  stmt.finalize();
});

// Drop Course API
app.delete("/api/dropcourse/:id", (req, res) => {
  const courseId = req.params.id;

  // Delete data from the Enrolment table based on the CourseID
  const stmt = db.prepare("DELETE FROM Enrolment WHERE CourseID = ?");

  stmt.run(courseId, (err) => {
    if (err) {
      console.error("Error dropping course:", err);
      res.status(500).send("Error dropping course");
    } else {
      res.status(200).send("Course dropped successfully!");
    }
  });

  stmt.finalize();
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
