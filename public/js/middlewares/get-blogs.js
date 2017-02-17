import request from 'superagent';

export default store => next => action => {
    if(action.type === "ALL_BLOGS") {
        request.get("/getAllBlogs")
            .end((err,res) => {
                next({type: "GET_ALL", blogs: res.body.blogs});
            });
    } else
        next(action);
}