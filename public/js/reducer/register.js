module.exports = (state = {},action) => {
    switch(action.type){
        case 'ADD_USENAME':{
            console.log(action.status);
            alert(action.status);
        }
        default:
            return state;
    }
};
