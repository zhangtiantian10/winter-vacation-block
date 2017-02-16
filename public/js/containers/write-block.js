import {connect} from 'react-redux';
import WriteBlock from '../components/write-block';
import actions from '../actions/add-block';

const mapStateToProps = (state) => {
    return {
        isSaveSuccess: state.addBlock.isSaveSuccess
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            dispatch(actions.addBlock(data));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(WriteBlock);