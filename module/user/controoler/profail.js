const userModel = require('../../../DB/model/userModel');

const prof = async(req, res) => {
    const { id } = req.body.user;
    const x = req.body.user.id;
    const find = await userModel.findById(id);
    if (find) {
        res.json({ message: ' user', find });
    } else {
        res.json({ message: ' signin first' });
    }
};

module.exports = prof;