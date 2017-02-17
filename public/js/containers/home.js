import {connect} from 'react-redux';
import Home from '../components/home';
import actions from '../actions/home';

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllBlocks: () => {
            dispatch(actions.getAllBlocks);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);