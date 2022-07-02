const mongoose = require('mongoose');

const conectDB = () => {
    mongoose
        .connect(`mongodb://localhost:27017/iti`)
        .then((result) => {
            console.log('conecet to DB');
        })
        .catch((er) => {
            console.log('errot from DB' + er);
        });
};

module.exports = conectDB;