const express = require('express');
const router = express.Router();

let users = [{userName:"liyan",password:'123'}];

router.post('/addUseName',(req,res) => {
    users.push(req.body);
    console.log(users);
    res.status(201).end();
})

router.post('/section', function (req, res) {
    const userInformation = req.body;
    users.map((user) => {
        if(user.password != userInformation.password && user.useName != userInformation.password){
            res.json({value: "用户名或密码错误，请重新输入"});
        }
        else{
            res.json({value: "登录成功"});
        }
    });

});

module.exports = router;
