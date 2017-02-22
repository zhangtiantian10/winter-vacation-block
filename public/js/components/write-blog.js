import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class WriteBlock extends Component {
    addBlock() {
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
        return <div className="col-md-6 col-md-offset-3">
            <h1 className="center">写博客</h1>
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="col-md-2 control-label">博客名称</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="title" ref="blogTitle"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">博客内容</label>
                    <div className="col-md-10">
                        <textarea className="form-control" rows="12" id="blogContent"></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">时间</label>
                    <div className="col-md-4">
                        <input type="text" className="form-control" id="time" ref="blogTime"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">作者</label>
                    <div className="col-md-4">
                        <input type="text" className="form-control" id="author" ref="blogAuthor"/>
                    </div>
                </div>
            </form>
            <div className="center">
                <button className="btn btn-default" onClick={this.addBlock.bind(this)}>完成</button>
            </div>
        </div>
    }
}