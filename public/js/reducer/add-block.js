module.exports = (state = {},action) => {
    switch(action.type){
        case 'ADDBLOCK':
            console.log(action.data);
    }
    return {}
};