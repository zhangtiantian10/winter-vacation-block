import {connect} from 'react-redux';
import WriteBlog from '../components/write-blog';
import actions from '../actions/add-blog';

const mapStateToProps = (state) => {
    return {
        isSaveSuccess: state.addBlog.isSaveSuccess
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            dispatch(actions.addBlog(data));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(WriteBlog);