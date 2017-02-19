import React, {Component} from 'react';

export default class Home extends Component {
    verify(){
        var myName = document.getElementById("useName").value;
        var myPassword = document.getElementById("password").value;
        var users=this.props.users;
        console.log(users);
        for(var i=0;i < users.length;i++){
            if(users[i].userName === myName && users[i].password === myPassword){
                alert("登录成功");
            }
            else{
                alert("用户名或密码错误");
            }
        }
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
                <button type="submit" onClick={this.verify.bind(this)}>登录</button>
            </div>
        </div>
    }
}
