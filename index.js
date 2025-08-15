const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000


const quotes = [
    "The best way to predict the future is to invent it.",
    "Do what you can, with what you have, where you are.",
    "Act as if what you do makes a difference. It does.",
    "Success is not how high you have climbed, but how you make a positive difference to the world."
];

app.get('/quote', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    res.json({quote: randomQuote});
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})