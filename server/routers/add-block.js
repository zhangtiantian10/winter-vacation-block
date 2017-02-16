const express = require('express');
const router = express.Router();

let datas = [];

router.post('/addBlock', (req, res) => {
    datas.push(req.body);
    console.log(datas);
    res.status(201).end();
});

module.exports = router;