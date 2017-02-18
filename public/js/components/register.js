import React, {Component} from 'react';

export default class Register extends Component {
    addUseName(){
        const useName=this.refs.useName.value;
        const password=document.getElementById("password").value;
        const confirmPassword=document.getElementById("confirmPassword").value;
        console.log(useName,password);
        if(password === confirmPassword){
            this.props.onSubmit({useName,password});
        }
        else{
            alert("两次输入的密码不同")
        }
    }
    componentWillUpdate(nextProps) {
        if (nextProps.isSaveSuccess) {
            browserHistory.push('/');
        }
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
                确认密码：<input type="password" id="confirmPassword" ref="confirmPassword"/>
            </div>
            <div className="col-md-offset-4 col-md-4">
                <button type="submit" onClick={this.addUseName.bind(this)}>注册</button>
            </div>
        </div>
    }
}