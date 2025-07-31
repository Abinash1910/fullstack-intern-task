const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let users = [];

app.post("/users", (req, res) => {
  const { name, email, password, department } = req.body;
  if (!name || !email || !password || !department) {
    return res.status(400).json({ error: "All fields are required" });
  }
  users.push({ name, email, department });
  res.status(201).json({ message: "User registered" });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(5000, () => console.log("Server running on port 5000"));
