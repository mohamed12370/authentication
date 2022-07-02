const userModel = require('../../../DB/model/userModel');

const update = async(req, res) => {
    const { id } = req.params;
    const { fName, lName, email, password } = req.body;
    const finduser = await userModel.findById(id);
    if (finduser) {
        const save = await userModel.updateOne({ _id: id }, { fName, lName, email, password }, { new: true });
        res.json({ mseeage: 'update user', save });
    } else {
        res.json({ mseeage: 'id not found' });
    }
};

module.exports = update;