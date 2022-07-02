const postModel = require('../../../DB/model/postsModel');

const getAll = async(req, res) => {
    const all = await postModel.find({}).populate('author');
    res.json({ message: 'all post', all });
};

module.exports = getAll;