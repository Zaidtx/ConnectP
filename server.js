const express = require("express");
const connectDB = require("./config/db");

const app = express();
// connect DB

connectDB();

// init Middleware
app.use(express.json({ extended: false }));

// test the server

app.get("/", (req, res) => res.send("API Running"));

// look for port to delpoy
const PORT = process.env.PORT || 5000;

// Define Routs
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
