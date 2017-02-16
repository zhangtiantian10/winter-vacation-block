module.exports = (state = {},action) => {
    switch(action.type){
        case 'ADD_BLOCK':
            console.log(action.data);
    }
    return {}
};