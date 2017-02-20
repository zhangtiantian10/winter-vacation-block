import React, {Component} from 'react';

export default class Home extends Component {
    jude(){
        var useName = document.getElementById("useName").value;
        var password = document.getElementById("password").value;
        this.props.onJude(useName,password);
    }

    render(){
        return <div className="row">
            <div className="col-md-offset-4 col-md-4">
                姓名：<input type="text" id="useName" ref="useName"/>
            </div>
            <div className="col-md-offset-4 col-md-4">
                密码:<input type="password" id="password" ref="password"/>
            </div>
            <div className="col-md-offset-4 col-md-4">
                <button type="submit" onClick={this.jude.bind(this)}>登录</button>
            </div>
        </div>
    }
}
