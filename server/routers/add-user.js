const insertUsers = require('../dbs/add-user');
const findUsers = require('../dbs/find-users');
const express = require('express');

const router = express.Router();

router.post('/addUseName', function (req, res) {
    const userInformation = req.body;
    findUsers(userInformation, (result)=> {
        if (result.length != 0) {
            res.json({value: "用户已存在"});
        }
        else {
            insertUsers(userInformation, (result)=> {
                console.log(result);
                res.json({value: "注册成功"});
            });
        }
    });

});

router.post('/section', function (req, res) {
    const userInformation = req.body;
    findUsers(userInformation, (result) => {
        if (result.length === 0) {
            console.log("hah");
            res.json({value: "用户不存在"});
        }
        else if(result[0].password != userInformation.password){
            res.json({value: "密码错误，请重新输入"});
        }
        else{
            res.json({value: "登录成功"});
        }
    });

});

module.exports = router;