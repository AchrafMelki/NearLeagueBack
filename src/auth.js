const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;

const generateJWT = (user) => {
    const payload = {
        userId: user.id,
        username: user.username,
        role: user.role,
    };

    return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
};

module.exports = { generateJWT };
