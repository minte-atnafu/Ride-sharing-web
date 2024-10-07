const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1993minte@",
  database: "ridesharingapp",
});
db.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    // Optionally, you can terminate the application here or handle the error in some other way
    process.exit(1);
  }
  console.log('Connected to MySQL database.');
});

// passegener registration page
app.post("/PassangerRegisterPage", async(req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const sql = "INSERT INTO users (name, email, password, phone_Number) VALUES (?)";
    const values = [
      req.body.name,
      req.body.email,
      hashedPassword,
      req.body.phoneNumber, // Ensure consistent naming
    ];

    db.query(sql, [values], (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json("Database error");
      }
      return res.status(200).json({ token_id: data.insertId });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json("Internal server error")
  }  
});
// for the passenger Login page
app.post("/PassengerLoginPage", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], async (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Database error");
    }
    if (data.length > 0) {
      const user = data[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        return res
          .status(200)
          .json({ message: "Login successful", token_id: user.user_id });
      } else {
        return res.status(401).json({ message: "Invalid email or password" });
      }
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  });
});
  //--------------------------------
// Driver registration
app.post("/DriverRegisterPage", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const {
      name,
      email,
      driver_license,
      license_plate,
      car_model,
      carYear,
      numberOfSite,
      preferences,
    } = req.body;

    // Insert into drivers table
    const sqlDrivers =
      "INSERT INTO drivers (name, email, password, driver_license) VALUES (?, ?, ?, ?)";
    const driverValues = [name, email, hashedPassword, driver_license];

    db.query(sqlDrivers, driverValues, (err, result) => {
      if (err) {
        console.error("Error inserting into drivers table:", err);
        return res.status(500).json("Database error");
      }
      const driver_id = result.insertId; // Get the driver_id from the result

      // Insert into carinfo table
      const sqlCarInfo =
        "INSERT INTO carinfo (driver_id, car_model, carYear, license_plate, numberOfSite) VALUES (?, ?, ?, ?, ?)";
      const carInfoValues = [
        driver_id,
        car_model,
        carYear,
        license_plate,
        numberOfSite,
      ];

      db.query(sqlCarInfo, carInfoValues, (err, result) => {
        if (err) {
          console.error("Error inserting into carinfo table:", err);
          return res.status(500).json("Database error");
        }
        // Insert into preferences table
        const sqlPreferences =
          "INSERT INTO preferences(driver_id, smoking, music, pet_friendly) VALUES (?, ?, ?, ?)";
        const preferencesValues = [
          driver_id,
          preferences.smoking,
          preferences.music,
          preferences.pet_friendly,
        ];

        db.query(sqlPreferences, preferencesValues, (err, result) => {
          if (err) {
            console.error("Error inserting into preferences table:", err);
            return res.status(500).json("Database error");
          }
          return res.status(200).json({
            message: "Driver registered successfully",
            token_id: driver_id,
          });
        });
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json("Internal server error");
  }
});



//for driver login
app.post("/DriverLoginPage", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM drivers WHERE email = ?";

  db.query(sql, [email], async (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Database error");
    }
    if (data.length > 0) {
      const driver = data[0];
      const isPasswordValid = await bcrypt.compare(password, driver.password);
      if (isPasswordValid) {
        return res
          .status(200)
          .json({ message: "Login successful", token_id: driver.driver_id });
      } else {
        return res.status(401).json({ message: "Invalid email or password" });
      }
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  });
});


// for preferences issues
app.post("/DriverRegisterPage", (req, res) => {
  const { driver_id, preferences } = req.body;

  // Delete existing preferences for this driver
  db.query("DELETE FROM preferences WHERE driver_id = ?", [driver_id], (err, result) => {
    if (err) {
      console.error("Error deleting existing preferences:", err);
      return res.status(500).json("Database error");
    }

    // Insert new preferences into the database
    const values = preferences.map((preferences) => [driver_id, preferences]);
    db.query("INSERT INTO preferences (driver_id, preferences) VALUES ?", [values], (err, result) => {
      if (err) {
        console.error("Error inserting new preferences:", err);
        return res.status(500).json("Database error");
      }
      return res.status(200).json("Preferences updated successfully");
    });
  });
});


//For Ride request from the dashboard
// Endpoint to fetch ride requests
app.get("/ride-request", (req, res) => {
  const query =
  "SELECT rr.user_id AS id, u.name AS passangerName, rr.s_address, rr.d_address, rr.numberOfSite FROM riderequest rr JOIN users u ON rr.user_id = u.user_id;"
  db.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(results);
  });
});


//From database to ride history
app.get("/ride-history", (req, res) => {
  const query =
    "SELECT rh.ride_id, rh.s_address, rh.d_address, u.name, ci.car_model AS car, p.amount AS fare, p.pay_method AS paymentMethod, rh.status, rh.travel_date FROM ridehistory rh INNER JOIN Users u ON rh.user_id = u.user_id INNER JOIN carinfo ci ON rh.driver_id = ci.driver_id INNER JOIN payment p ON rh.ride_id = p.ride_id;";

  db.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database query error" });

    }
    res.json(results);
  });
});
// from the joint database requestListing the Drivers with preference
app.get("/ride-listings", (req, res) => {
  const query = "SELECT d.name, rl.s_address, rl.d_address, ci.car_model, ci.numberOfSite, p.smoking, p.music, p.pet_friendly, ci.license_plate FROM drivers d join preferences p  ON p.driver_id=d.driver_id JOIN locations rl ON rl.driver_id=d.driver_id JOIN carinfo ci ON rl.driver_id = ci.driver_id;"
  db.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(results);
  });

});





// for the functionalities of select

app.post("/createRideRequest", (req, res) => {
  const { user_id, s_address, d_address, numberOfSite } = req.body;

  const insertRequestSql =
    "INSERT INTO riderequest (user_id, s_address, d_address, numberOfSite) VALUES (?, ?, ?, ?)";
  const values = [user_id, s_address, d_address, numberOfSite];

  db.query(insertRequestSql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(200).json({ message: "Ride request created successfully" });
  });
});



//-decline accept
app.delete("/ride-requests-deletes", async (req, res) => {
  const id = req.body.requestId;
  const status = req.body.status;
  const driver_id = req.body.token_id;
  const deleteQuery = "DELETE FROM riderequest WHERE user_id = ?";
  const updateQuery = "UPDATE ridehistory SET status = ? SET driver_id=? WHERE user_id = ?";

  db.query(deleteQuery, [id], (error) => {
    if (error) {
      return res.status(500).json({ error: "Database query error" });
    }
    db.query(updateQuery, [status,driver_id, id], (error) => {
      if (error) {
        return res.status(500).json({ error: "Database query error" });
      }
      res.json("delete is su");
    });
  });
});


app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
