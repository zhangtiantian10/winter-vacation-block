import request from 'superagent';

export default store => next => action => {
    if(action.type === 'ADD_USENAME') {
        request.post('/addUser/addUseName')
            .send(action.data)
            .end((err,res) => {
                if(res.statusCode === 201) {
                    alert("注册成功！");
                    next({type: 'SAVE_SUCCESS_USER'});
                } else {
                    alert("注册失败！")
                    next({type: 'SAVE_ERROR_USER'});
                }
            })
    } else {
        next(action);
    }
}