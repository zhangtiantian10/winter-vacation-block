import {connect} from "react-redux";
import Login from "../components/login";
import actions from "../actions/login";

const mapStateToProps = (state) => {
    return {users:state.getAllUsers.users};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers:()=>{
            dispatch(actions.getAllUsers());
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Login);


