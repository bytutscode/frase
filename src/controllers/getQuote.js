const quotes = require('../database/quotes');

const getQuote = (req, res) => {
    const random = Math.ceil(Math.random() * quotes.length - 1);

    const quote = {
        frase: quotes[random].frase,
        autor: quotes[random].autor,
        ano: quotes[random].ano
    }
    res.json({ quote })
}



module.exports = getQuote;