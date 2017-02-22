const getAllBlogs = () => {
    return {
        type: "ALL_BLOGS"
    }
};

const deleteBlog = (id) => {
    return {
        type: "DELETE_BLOG",
        id: id
    }
};

module.exports = {
    getAllBlogs,
    deleteBlog
};