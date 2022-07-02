const postModel = require('../../../DB/model/postsModel');

const getOne = async(req, res) => {
    const { id } = req.params;
    const find = await postModel.findById(id);
    if (find) {
        res.json({ message: 'post', find });
    } else {
        res.json({ message: 'id not found' });
    }
};

module.exports = getOne;