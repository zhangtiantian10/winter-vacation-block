module.exports = (state = {},action) => {
    switch(action.type){
        case 'SAVE_SUCCESS_USER':
            console.log(action.data);
            return {
                isSaveSuccess: true
            };
        case 'SAVE_ERROR_USER':
            return {
                isSaveSuccess: false
            };
        default:
            return state;
    }
};
