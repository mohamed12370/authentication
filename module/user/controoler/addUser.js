const userModel = require('../../../DB/model/userModel');

const addUser = async(req, res) => {
    const { fName, lName, email, password } = req.body;
    const findemail = await userModel.findOne({ email });
    if (findemail) {
        res.json({ message: 'email is used' });
    } else {
        const saveUser = await userModel.insertMany({
            fName,
            lName,
            email,
            password,
        });
        res.json({ message: 'saved', saveUser });
    }
};

module.exports = addUser;