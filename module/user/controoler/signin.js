const userModel = require('../../../DB/model/userModel');
const jwt = require('jsonwebtoken');

const signin = async(req, res) => {
    const { email, password } = req.body;
    const find = await userModel.findOne({ email });
    if (find) {
        const token = jwt.sign({ email, password, id: find._id }, 'ali', {
            expiresIn: '24h',
        });
        res.json({ message: 'ok', find, token });
    } else {
        res.json({ message: 'email is roung' });
    }
};

module.exports = signin;