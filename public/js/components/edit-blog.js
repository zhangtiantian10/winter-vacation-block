import React, {Component} from 'react';

export default class EditBlog extends Component {
    componentDidMount() {
        const blog = this.props.location.query;
        document.getElementById('title').value = blog.title;
        document.getElementById('content').value = blog.content;
        document.getElementById('time').value = blog.time;
        document.getElementById('author').value = blog.author;
    }

    modifyBlog() {
        const id = parseInt(this.props.location.query.id);
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const time = document.getElementById('time').value;
        const author = document.getElementById('author').value;
        this.props.onModify({id, title, content, time, author});
    }

    render() {
        return <div className="col-md-6 col-md-offset-3">
            <div className="center">
                <h1>修改博客</h1>
            </div>
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="col-md-2 control-label">博客名称</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="title"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">博客内容</label>
                    <div className="col-md-10">
                        <textarea className="form-control" rows="12" id="content"></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">修改时间</label>
                    <div className="col-md-4">
                        <input type="text" className="form-control" id="time"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-md-2 control-label">修改人</label>
                    <div className="col-md-4">
                        <input type="text" className="form-control" id="author"/>
                    </div>
                </div>
            </form>
            <div className="center">
                <button className="btn btn-default" onClick={this.modifyBlog.bind(this)}>保存</button>
            </div>
        </div>
    }
}