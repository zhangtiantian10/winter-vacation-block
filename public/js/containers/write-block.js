import {connect} from 'react-redux';
import WriteBlock from '../components/write-block';
import actions from '../actions/add-block';

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            dispatch(actions.addBlock(data));
        }
    }
};
export default connect(() => {return {}},mapDispatchToProps)(WriteBlock);