import {connect} from 'react-redux';
import Home from '../components/home';
import actions from '../actions/home';

const mapStateToProps = (state) => {
    return {
        blogs: state.getAllBlogs.blogs
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllBlogs: () => {
            dispatch(actions.getAllBlogs());
        },
        deleteBlog: (id) => {
            dispatch(actions.deleteBlog(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);