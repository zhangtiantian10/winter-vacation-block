module.exports = (state = {isSaveSuccess: false},action) => {
    console.log(1);
    switch(action.type){
        case 'SAVE_SUCCESS':
            console.log(action.data);
            return {
                isSaveSuccess: true
            };
        case 'SAVE_ERROR':
            return {
                isSaveSuccess: false
            };
        default:
            return state;
    }
};