const router = require('express').Router();
const getQuote = require('../controllers/getQuote');

router.get('/frase', getQuote);

module.exports = router;