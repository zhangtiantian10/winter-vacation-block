const addBlock = (data) => {
    return {
        type: 'ADD_BLOCK',
        data: data
    }
};

module.exports = {
        addBlock
};