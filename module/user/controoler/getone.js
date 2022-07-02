const userModel = require('../../../DB/model/userModel');

const getOne = async(req, res) => {
    const { id } = req.params;
    const find = await userModel.findById(id);
    if (find) {
        res.json({ message: 'user ', find });
    } else {
        res.json({ message: 'user id not find' });
    }
};

module.exports = getOne;