const addBlock = (data) => {
    return {
        type: 'ADDBLOCK',
        data: data
    }
};

module.exports = {
        addBlock
};