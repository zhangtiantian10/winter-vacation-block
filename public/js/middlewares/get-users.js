import request from 'superagent';

export default store => next => action => {
    console.log('login2');
    if(action.type === "ALL_USERS") {
        request.get("/addUser/getAllUsers")
            .end((err,res) => {
                next({type: "GET_ALLUSERS", users: res.body.users});
            });
    } else{
        next(action);
    }
}
