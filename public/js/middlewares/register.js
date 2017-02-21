import request from 'superagent';

export default store => next => action => {
    if (action.type === "ADD_USENAME") {
            request.post('/addUser/addUseName')
                .send(action.data)
                .end((err, res) => {
                    console.log(res.body.value);
                    next({type: 'ADD_USENAME',status: res.body.value})

                });
        }
    else {
        next(action);
    }
}