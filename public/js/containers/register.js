import {connect} from 'react-redux';
import Register from '../components/register';
import actions from '../actions/add-useName';

const mapStateToProps = (state) => {
    return {
        isSaveSuccess: state.addUseName.isSaveSuccess
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            dispatch(actions.addUseName(data));
        }
    }
};
export default connect(() => {return {}},mapDispatchToProps)(Register);