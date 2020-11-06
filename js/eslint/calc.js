const { model } = require('./model');

const namesWithMassParam = (mass) => {
    model.forEach(element => {
        element.mass < mass ? console.log(element.name) : true;
    })
};

module.exports = { namesWithMassParam }