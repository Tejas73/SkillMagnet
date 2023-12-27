const jwt = require('jsonwebtoken');
const adminSecKey = 'ad035kj3min';
const userSecKey = 'us035kj3er';

const authenticateJwt = (secretKey, req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

const adminAuthenticateJwt = (req, res, next) => {
    authenticateJwt(adminSecKey, req, res, next);
    console.log("INSIDE ADMINAUTHENTICATEJWT")
};

const userAuthenticateJwt = (req, res, next) => {
    authenticateJwt(userSecKey, req, res, next);
};

module.exports = {
    adminSecKey,
    adminAuthenticateJwt,
    userAuthenticateJwt,
};
