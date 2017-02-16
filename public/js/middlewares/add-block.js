import request from 'superagent';

export default store => next => action => {
    if(action.type === 'ADD_BLOCK') {
        request.post('/addBlock')
            .send(action.data)
            .end((err,res) => {
          if(res.statusCode === 201) {
              alert("保存成功！");
          } else {
              alert("保存失败！");
          }
        })
    } else {
        next(action);
    }
}