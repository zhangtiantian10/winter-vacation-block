const modifyBlog = (blog) => {
    return {
        type: "MODIFY_BLOG",
        blog: blog
    };
};

module.exports = {
    modifyBlog
};