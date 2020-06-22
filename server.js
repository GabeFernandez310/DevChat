/*
STARTS EXPRESS APP AND CREATES PORT CONNECTION
TO PREPARE BACK-END FOR HTTP REQUESTS
*/

//imports
const express = require("express");
const connectDB = require("./config/db");

//start Express application
app = express();

//Create connection to database
connectDB();

//Initialize middleware that allows you to ready request body json
app.use(express.json({ extended: false }));

//HTTP GET request to root of application
app.get("/", (req, res) => res.send("Backend is running"));

//Application routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

//set port to send requests to as the one defined by the process or port localhost:5000 as fallback
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
