module.exports = (state = {},action) => {
    switch(action.type){
        case 'ADD_USENAME':
            console.log(action.data);
    }
    return {}
};
