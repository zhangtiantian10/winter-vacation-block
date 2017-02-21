import {connect} from 'react-redux';
import EditBlog from '../components/edit-blog';
import actions from '../actions/modify-blog';

const mapDispatchToProps = (dispatch) => {
    return {
        onModify: (blog) => {
            dispatch(actions.modifyBlog(blog));
        }
    }
}

export default connect(() => {return {}}, mapDispatchToProps)(EditBlog);