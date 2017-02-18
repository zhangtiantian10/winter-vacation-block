import request from 'superagent';

export default store => next => action => {
    console.log(action.type);
    if(action.type === "ALL_USERS") {
        request.get("/getAllUsers")
            .end((err,res) => {
                console.log(res.body.users)
            });
    } else{
        next(action);
    }
}
