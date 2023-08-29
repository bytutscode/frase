const quotes = require('../database/quotes');

const getQuote = (req, res) => {
    const random = Math.ceil(Math.random() * quotes.length - 1);
    const quote = quotes[random]
    res.json({ quote })
}



module.exports = getQuote;