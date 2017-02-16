import React, {Component} from 'react';

export default class Register extends Component {
    addUseName(){
        const useName=this.refs.useName.value;
        const password=document.getElementById("password").value;
        console.log(useName,password);
        this.props.onSubmit({useName,password});
    }
    render(){
        return <div className="row">
            <div className="col-md-offset-4 col-md-4">
                用户名:<input type="text" id="useName" ref="useName"/>
            </div>
            <div className="col-md-offset-4 col-md-4">
                密码:<input type="password" id="password" ref="password"/>
            </div>
            <div className="col-md-offset-4 col-md-4">
                <button type="submit" onClick={this.addUseName.bind(this)}>注册</button>
            </div>
        </div>
    }
}