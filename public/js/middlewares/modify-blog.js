import request from 'superagent';

export default store => next => action => {
    if(action.type === "MODIFY_BLOG"){
            request.post('/modifyBlog')
                .send({blog: action.blog})
                .end((err,res) => {
                    alert("修改成功！");
                    next({type: "MODIFY_BLOG_SUCCESS"})
                });
    } else {
        next(action);
    }
}