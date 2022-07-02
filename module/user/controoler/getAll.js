const userModel = require('../../../DB/model/userModel');

const getall = async(req, res) => {
    const all = await userModel.find({});
    res.json({ message: 'all users', all });
};

module.exports = getall;