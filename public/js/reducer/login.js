module.exports = (state = {users: []}, action) => {
    console.log("login");
    switch (action.type) {
        case 'LOGIN':{
            console.log(action.status);
            alert(action.status);
        }
        default:
            return state;
    }
};