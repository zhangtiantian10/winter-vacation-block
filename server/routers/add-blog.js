const express = require('express');
const router = express.Router();

let datas = [
    {
        title: "今天真的很开心",
        content: "因为今天放假了，可以好好的睡懒觉了真的很开心",
        time: "2017-2-17 16:40",
        author: "张甜"
    }
];

router.post('/addBlog', (req, res) => {
    datas.push(req.body);
    console.log(datas);
    res.status(201).end();
});
router.post('/addUseName',(req,res) => {
    console.log(req.body);
})

router.get('/getAllBlogs', (req, res) => {
    res.send({blogs: datas});
});

module.exports = router;