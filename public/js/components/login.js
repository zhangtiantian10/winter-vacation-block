import React, {Component} from 'react';

export default class Home extends Component {
    render(){
        return <div className="row">
            <div className="col-md-offset-4 col-md-4">
                姓名：<input type="text" id="useName" ref="useName"/>
            </div>
            <div className="col-md-offset-4 col-md-4">
                密码:<input type="password" id="password" ref="password"/>
            </div>
            <div className="col-md-offset-4 col-md-4">
                <button type="submit">登录</button>
            </div>
        </div>
    }
}
