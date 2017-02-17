module.exports = (state = {blocks: []}, action) => {
    switch (action.type) {
        case "GET_ALL":
            state.blocks = action.blocks;
            return {
                blocks: [...state.blocks]
            };
        default:
            return state;

    }
};