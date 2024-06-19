const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1993minte@",
  database: "ridesharingapp",
});
// passegener registration page
app.post("/PassangerRegisterPage", (req, res) => {
  const sql = "INSERT INTO users (name, email, password, confirmPassword, phone_Number) VALUES (?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.confirmPassword,
    req.body.phoneNumber, // Ensure consistent naming
  ];

  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Database error");
    }
    return res.status(200).json(data);
  });
});
// for the passenger Login page
app.post("/PassangerLoginPage", (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    
    db.query(sql, [email, password], (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json("Database error");
      }
      if (data.length > 0) {
        return res.status(200).json({ message: "Login successful", user: data[0] });
      } else {
        return res.status(401).json({ message: "Invalid email or password" });
      }
    });
});
  
//for driver registration
app.post("/DriverRegisterPage", (req, res) => {
    const { name, email, password, driver_License, license_Plate, carModel, carYear,no_site} = req.body;
  
    // Insert into drivers table
    const sqlDrivers = "INSERT INTO drivers (name, email, password, driver_license) VALUES (?, ?, ?, ?)";
    const driverValues = [name, email, password, driver_License];
  
    db.query(sqlDrivers, driverValues, (err, result) => {
      if (err) {
        console.error("Error inserting into drivers table:", err);
        return res.status(500).json("Database error");
      }
  
      const driver_id = result.insertId;
  
      // Insert into car_info table
      const sqlCarInfo = "INSERT INTO car_info (driver_id, car_model, car_year, license_plate,no_site) VALUES (?, ?, ?, ?)";
      const carInfoValues = [driver_id, carModel, carYear, license_Plate,no_site];
  
      db.query(sqlCarInfo, carInfoValues, (err, result) => {
        if (err) {
          console.error("Error inserting into car_info table:", err);
          return res.status(500).json("Database error");
        }
  
        return res.status(200).json("Driver registered successfully");
      });
    });
});
  
//for driver login

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
