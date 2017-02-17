import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class WriteBlock extends Component {
    addBlog() {
        const title = this.refs.blogTitle.value;
        const content = document.getElementById("blogContent").value;
        const time = this.refs.blogTime.value;
        const author = this.refs.blogAuthor.value;
        console.log(title, content, time, author);
        this.props.onSubmit({title, time, content, author});
    }

    componentWillUpdate(nextProps) {
        if (nextProps.isSaveSuccess) {
            browserHistory.push('/');
        }
    }

    render() {
        return <div>
            <div>
                标题：
                <input type="text" id="blogTitle" ref="blogTitle"/>
            </div>
            <div>
                内容：
                <textarea name="blogContent" id="blogContent" cols="30" rows="5" ref="blogContent"></textarea>
            </div>
            <div>
                时间：
                <input type="text" id="blogTime" ref="blogTime"/>
            </div>
            <div>
                作者：
                <input type="text" id="blogAuthor" ref="blogAuthor"/>
            </div>
            <div>
                <button onClick={this.addBlog.bind(this)}>完成</button>
            </div>
        </div>
    }
}