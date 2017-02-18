import request from 'superagent';

export default store => next => action => {
    console.log(2);
    if(action.type === 'ADD_BLOG') {
        request.post('/addBlog')
            .send(action.data)
            .end((err,res) => {
          if(res.statusCode === 201) {
              alert("保存成功！");
              next({type: 'SAVE_SUCCESS'});
          } else {
              alert("保存失败！");
              next({type: 'SAVE_ERROR'});
          }
        })
    } else {
        next(action);
    }
}