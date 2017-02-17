const express = require('express');
const router = express.Router();

let datas = [];

router.post('/addBlock', (req, res) => {
    datas.push(req.body);
    console.log(datas);
    res.status(201).end();
});

router.get('/getAllBlocks', (req, res) => {
    res.send({blocks: datas});
});

let users = [];

router.post('/addUseName',(req,res) => {
    users.push(req.body);
    console.log(users);
    res.status(201).end();
})

router.get('/getAllUsers', (req, res) => {
    res.send({users: users});
});

module.exports = router;