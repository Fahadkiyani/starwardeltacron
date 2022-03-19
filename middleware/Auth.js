const express = require('express');
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.body.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const username = decodedToken?.username;
        if (req.body.userData.username !== username) {
            throw 'Invalid User';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};