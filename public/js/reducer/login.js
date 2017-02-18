module.exports = (state = {users: []}, action) => {
    console.log("login");
    switch (action.type) {
        case "GET_ALLUSERS":
            state.users = action.users;
            return {
                users: [...state.users]
            };
        default:
            return state;

    }
};