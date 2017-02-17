import request from 'superagent';

export default store => next => action => {
    console.log(action.type);
    if(action.type === "ALL_BLOCKS") {
        request.get("/getAllBlocks")
            .end((err,res) => {
                console.log(res.body.blocks);
            });
    } else
        next(action);
}