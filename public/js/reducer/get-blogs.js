module.exports = (state = {blogs: []}, action) => {
    switch (action.type) {
        case "GET_ALL":
            state.blogs = action.blogs;
            return {
                blogs: [...state.blogs]
            };
        default:
            return state;

    }
};