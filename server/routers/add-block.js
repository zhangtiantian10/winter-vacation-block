const express = require('express');
const router = express.Router();

let datas = [];
let useName = [];

router.post('/addBlock', (req, res) => {
    datas.push(req.body);
    console.log(datas);
    res.status(201).end();
});
router.post('/addUseName',(req,res) => {
    useName.push(req.body);
    console.log(useName);
    res.status(201).end();
})

router.get('/getAllBlocks', (req, res) => {
    res.send({blocks: datas});
});

module.exports = router;