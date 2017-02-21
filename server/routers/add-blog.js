const express = require('express');
const router = express.Router();

let id = 1;

let datas = [
    {
        id: id,
        title: "今天真的很开心",
        content: "因为今天放假了，可以好好的睡懒觉了真的很开心",
        time: "2017-2-17 16:40",
        author: "张甜"
    }
];

router.post('/addBlog', (req, res) => {
    id++;
    let blog = {
        id: id,
        title: req.body.title,
        content: req.body.content,
        time: req.body.time,
        author: req.body.author
    }
    datas.push(blog);
    res.status(201).end();
});

router.get('/getAllBlogs', (req, res) => {
    res.send({blogs: datas});
});

router.post('/modifyBlog', (req, res) => {
     let newDatas = datas.map( d => {
        if(d.id === req.body.blog.id) {
            return req.body.blog;
        }
    });
    datas = newDatas;
    console.log(datas);
    res.status(201).end();
})

module.exports = router;