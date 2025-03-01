const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let users = {}; // Store username & scores

app.post("/register", (req, res) => {
  const { username, score } = req.body;
  users[username] = score;
  res.json({ message: "User registered!" });
});

app.get("/score/:username", (req, res) => {
  const userScore = users[req.params.username] || 0;
  res.json({ score: userScore });
});

app.listen(5000, () => console.log("Server running on port 5000"));
