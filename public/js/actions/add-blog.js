const addBlog = (data) => {
    return {
        type: 'ADD_BLOG',
        data: data
    }
};

module.exports = {
        addBlog
};