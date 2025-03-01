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
  },
  {
    name: "Sydney",
    clues: ["Home to the iconic Opera House", "Largest city in Australia"],
    choices: ["Melbourne", "Sydney", "Brisbane", "Perth"],
    funFact: "The Sydney Harbour Bridge is nicknamed 'The Coathanger'."
  },
  {
    name: "Rome",
    clues: ["Known as the Eternal City", "Home to the Colosseum"],
    choices: ["Rome", "Venice", "Florence", "Milan"],
    funFact: "Rome has more fountains than any other city in the world."
  },
  {
    name: "London",
    clues: ["Home to Big Ben and the Tower of London", "Capital of the United Kingdom"],
    choices: ["London", "Manchester", "Edinburgh", "Birmingham"],
    funFact: "The London Underground is the oldest metro system in the world."
  },
  {
    name: "Berlin",
    clues: ["Capital of Germany", "Famous for the Berlin Wall"],
    choices: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
    funFact: "Berlin has more bridges than Venice."
  },
  {
    name: "Moscow",
    clues: ["Capital of Russia", "Home to the Kremlin and Red Square"],
    choices: ["Moscow", "St. Petersburg", "Novosibirsk", "Yekaterinburg"],
    funFact: "Moscow's metro system is one of the most beautiful in the world."
  },
  {
    name: "Beijing",
    clues: ["Capital of China", "Home to the Forbidden City"],
    choices: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"],
    funFact: "Beijing is one of the oldest cities in the world, with over 3,000 years of history."
  },
  {
    name: "Dubai",
    clues: ["Known for its luxury shopping and modern architecture", "Home to the Burj Khalifa"],
    choices: ["Dubai", "Abu Dhabi", "Doha", "Riyadh"],
    funFact: "Dubai has the world's tallest building, the Burj Khalifa."
  },
  {
    name: "Istanbul",
    clues: ["City that spans two continents (Europe and Asia)", "Home to the Hagia Sophia"],
    choices: ["Istanbul", "Ankara", "Izmir", "Bursa"],
    funFact: "Istanbul was formerly known as Constantinople."
  },
  {
    name: "Athens",
    clues: ["Capital of Greece", "Birthplace of democracy"],
    choices: ["Athens", "Thessaloniki", "Patras", "Heraklion"],
    funFact: "Athens is one of the oldest cities in the world, with a recorded history of over 3,400 years."
  },
  {
    name: "Buenos Aires",
    clues: ["Capital of Argentina", "Known for tango dancing"],
    choices: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
    funFact: "Buenos Aires is often called the 'Paris of South America'."
  },
  {
    name: "Lisbon",
    clues: ["Capital of Portugal", "Known for its colorful tiles and trams"],
    choices: ["Lisbon", "Porto", "Braga", "Coimbra"],
    funFact: "Lisbon is one of the oldest cities in Europe, predating Rome."
  },
  {
    name: "Mexico City",
    clues: ["Capital of Mexico", "Built on the ruins of the Aztec city Tenochtitlán"],
    choices: ["Mexico City", "Guadalajara", "Monterrey", "Puebla"],
    funFact: "Mexico City is sinking at a rate of 1 meter per year due to groundwater extraction."
  },
  {
    name: "Seoul",
    clues: ["Capital of South Korea", "Known for K-pop and high-tech innovations"],
    choices: ["Seoul", "Busan", "Incheon", "Daegu"],
    funFact: "Seoul has the fastest internet speeds in the world."
  },
  {
    name: "Bangkok",
    clues: ["Capital of Thailand", "Known for its vibrant street life and temples"],
    choices: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya"],
    funFact: "Bangkok's full ceremonial name is the longest city name in the world."
  },
  {
    name: "Singapore",
    clues: ["Known for its cleanliness and strict laws", "Home to Marina Bay Sands"],
    choices: ["Singapore", "Kuala Lumpur", "Jakarta", "Manila"],
    funFact: "Singapore is one of the world's only city-states."
  },
];

app.get("/api/questions", (req, res) => {
  let shuffled = [...questions].sort(() => 0.5 - Math.random());
  res.json(shuffled.slice(0, 10));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
