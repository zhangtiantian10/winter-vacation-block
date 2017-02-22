import request from 'superagent';

export default store => next => action => {
    if (action.type === "ADD_USENAME") {
        if (typeof (action.data.useName[0]) === "number") {
            alert('用户名不能以数字开头');
        }
        else if (action.data.useName.length < 2 || action.data.useName.length > 6) {
            alert("用户名不能少于2位");
        }
        else if (action.data.password.length < 6 || action.data.password.length > 20) {
            alert('请输入6-20位密码')
        }
        else if (action.data.password != action.data.confirmPassword) {
            alert("两次输入密码格式不正确");
        }
        else {
            request.post('/addUser/addUseName')
                .send(action.data)
                .end((err, res) => {
                    console.log(res.body.value);
                    next({type: 'ADD_USENAME',status: res.body.value})

                });
        }
    }
    else {
        next(action);
    }
}