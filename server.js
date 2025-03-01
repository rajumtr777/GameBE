// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const questions = [
  {
    name: "Paris",
    clues: ["Home to a famous tower finished in 1889", "Called the City of Light"],
    choices: ["Paris", "London", "Rome", "Berlin"],
    funFact: "The Louvre is the world's largest art museum."
  },
  {
    name: "Tokyo",
    clues: ["Capital city with over 13 million residents", "Known for high-tech, anime, and cherry blossoms"],
    choices: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
    funFact: "It's the most populous metropolitan area in the world."
  },
  {
    name: "New York",
    clues: ["Known as 'The Big Apple'", "Home to Times Square"],
    choices: ["Los Angeles", "Chicago", "New York", "Miami"],
    funFact: "The Statue of Liberty was a gift from France."
  },
  {
    name: "Cairo",
    clues: ["Famous for its pyramids", "Capital of Egypt"],
    choices: ["Cairo", "Dubai", "Istanbul", "Athens"],
    funFact: "The Great Pyramid of Giza is one of the Seven Wonders of the Ancient World."
  },
  {
    name: "Rio de Janeiro",
    clues: ["Home to Christ the Redeemer statue", "Famous for its Carnival festival"],
    choices: ["Buenos Aires", "Rio de Janeiro", "Lisbon", "Mexico City"],
    funFact: "Copacabana Beach is one of the most famous beaches in the world."
  }
];

// API to get random questions
app.get("/api/questions", (req, res) => {
  let shuffled = [...questions].sort(() => 0.5 - Math.random());
  res.json(shuffled.slice(0, 3)); // Send 3 random questions
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
