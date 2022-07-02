const postModel = require('../../../DB/model/postsModel');

const deleted = async(req, res) => {
    const { id } = req.params;
    const find = await postModel.findById(id);
    if (find) {
        const del = await postModel.deleteOne({ _id: id });
        res.json({ message: 'ok ', del });
    } else {
        res.json({ message: 'id found ' });
    }
};

module.exports = deleted;