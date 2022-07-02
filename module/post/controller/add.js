const postModel = require('../../../DB/model/postsModel');

const add = async(req, res) => {
    const { title, author } = req.body;
    const addpost = await postModel.insertMany({ title, author });
    res.json({ message: 'add', addpost });
};

module.exports = add;