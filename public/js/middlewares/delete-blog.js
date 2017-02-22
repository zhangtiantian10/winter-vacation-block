import request from 'superagent';

export default store => next => action => {
    if(action.type === "DELETE_BLOG") {
        request.post("/deleteBlog")
            .send({id: action.id})
            .end((err,res) => {
                if(res.statusCode === 201) {
                    alert("删除成功!");
                    next({type: "GET_ALL", blogs: res.body.blogs});
                } else {
                    alert("删除失败!");
                }
            });
    } else {
        next(action);
    }
}