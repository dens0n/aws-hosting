const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// New endpoint
app.get("/data", (req, res) => {
    res.json({ message: "This is the data from the server" });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
