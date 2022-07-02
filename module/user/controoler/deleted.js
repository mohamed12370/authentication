const userModel = require('../../../DB/model/userModel');

const deleted = async(req, res) => {
    const { id } = req.params;
    const findUser = await userModel.findById(id);
    if (findUser) {
        const del = await userModel.deleteOne({ _id: id });
        res.json({ message: 'delete user', del });
    } else {
        res.json({ message: 'id not find' });
    }
};

module.exports = deleted;