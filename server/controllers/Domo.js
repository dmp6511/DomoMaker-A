// controller for the domo page
const models = require('../models');
const Domo = models.Domo;

const makerPage = (req, res) => {
    res.render('app');
};

// exports
module.exports = {
    makerPage,
};