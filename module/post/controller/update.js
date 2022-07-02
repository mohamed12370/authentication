const postModel = require('../../../DB/model/postsModel');

const update = async(req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    const find = await postModel.findById(id);
    if (find) {
        const upd = await postModel.updateOne({ _id: id }, { title, author }, { new: true });
        res.json({ mseeage: 'update post', upd });
    } else {
        res.json({ message: 'id not found' });
    }
};

module.exports = update;