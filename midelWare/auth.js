const jwt = require('jsonwebtoken');

const auth = async(req, res, next) => {
    const headerToken = req.headers['authorization'];
    if (!headerToken ||
        headerToken === undefined ||
        headerToken === null ||
        !headerToken.startsWith('Bearer')
    ) {
        res.json({ message: 'in-valid token' });
    } else {
        const token = headerToken.split(' ')[1];
        const decode = jwt.verify(token, 'ali');
        req.body.user = decode;
        next();
    }
};
module.exports = auth;