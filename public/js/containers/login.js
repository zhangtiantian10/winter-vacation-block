import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import Login from '../components/login';
import {connect} from 'react-redux';

Login.PropTypes = {
    onJude: PropTypes.func.isRequied,
};

const mapDispatchProps = (dispatch) => {
    return {
        onJude: (useName, password)=> {
            console.log('dispatch');
            dispatch({type: "LOGIN", useName, password});
        }
    }
};


export default connect(()=> {
    return {}
}, mapDispatchProps)(Login);

