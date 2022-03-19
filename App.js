require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const app = express();

let userData = {
    username: 'admin',
    password: 'admin',
    accessToken: '',
}

//  files import 
const Auth = require('./middleware/Auth');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(require('path')
            .resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.post('/auth', (req, res, next) => { req.body.userData = userData; next() }), (req, res) => {
    res.send({ CODE: "SUCCESS", Result: "valid user" })
}

app.post('/login', (req, res) => {
    console.log(process.env.ACCESS_TOKEN_SECRET);
    if (req.body.username == userData.username && req.body.password == userData.password) {
        let accessToken = jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET)
        userData.accessToken = accessToken;
        res.send({
            CODE: 'SUCCES', Result: {
                accessToken
            }
        })
    } else res.send({ CODE: 'INVALID_USER', Result: 'Failed' })
})

app.post('/logout', (req, res, next) => { req.body.userData = userData; next(); }, Auth, (req, res) => {
    console.log("userData,req.body:", userData, req.body);
    if (userData.accessToken === req.body.authorization) {
        userData.accessToken = ""
    }
    res.status(202).json({
        message: "User Logout"
    });
})

// ENDPOINTS FOR PEOPLE
app.post('/people', (req, res, next) => { req.body.userData = userData; next(); }, Auth, (req, res) => {
    let d = null;
    console.log(userData);
    axios.get(`${process.env.BASE_URL}people/`).then(({ data }) => { res.send(data) }).catch(err => res.send({ CODE: 'ERROR', Message: "Could Not Find Results" }))
})

app.post('/people/details', (req, res, next) => { req.body.userData = userData; next(); }, Auth, (req, res) => {
    let d = null;
    console.log(userData);
    axios.get(req.body.route).then(({ data }) => { res.send(data) }).catch(err => res.send({ CODE: 'ERROR', Message: "Could Not Find Results" }))
})

// ENDPOINTS FOR STARSHIPS
app.post('/starships', (req, res, next) => { req.body.userData = userData; next(); }, Auth, (req, res) => {
    let d = null;
    axios.get(`${process.env.BASE_URL}starships/`).then(({ data }) => { res.send(data) }).catch(err => res.send({ CODE: 'ERROR', Message: "Could Not Find Results" }))
})

app.post('/starships/details', (req, res, next) => { req.body.userData = userData; next(); }, Auth, (req, res) => {
    let d = null;
    console.log(userData);
    axios.get(req.body.route).then(({ data }) => { res.send(data) }).catch(err => res.send({ CODE: 'ERROR', Message: "Could Not Find Results" }))
})

// ENDPOINTS FOR STARSHIPS
app.post('/planets', (req, res, next) => { req.body.userData = userData; next(); }, Auth, (req, res) => {
    let d = null;
    axios.get(`${process.env.BASE_URL}planets/`).then(({ data }) => { res.send(data) }).catch(err => res.send({ CODE: 'ERROR', Message: "Could Not Find Results" }))
})

app.post('/planets/details', (req, res, next) => { req.body.userData = userData; next(); }, Auth, (req, res) => {
    let d = null;
    console.log(userData);
    axios.get(req.body.route).then(({ data }) => { res.send(data) }).catch(err => res.send({ CODE: 'ERROR', Message: "Could Not Find Results" }))
})




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} ${process.env.LOGIN_USER}`))