import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

export default class Home extends Component {
    componentWillMount() {
        this.props.getAllBlogs();
    }

    jumpToEditPage(blog) {
        const path = "editBlog?title=" + blog.title + "&content=" + blog.content + "&time=" + blog.time + "&author=" + blog.author + "&id=" + blog.id;
        browserHistory.push(path);
    }

    deleteBlog(id) {
        let isdelete = confirm('是否删除？');
        if(isdelete) {
            this.props.deleteBlog(id);
        }
    }

    render() {
        return <div>
            <div className="col-md-10 col-md-offset-1">
                <h3>博客列表：</h3>
                {this.props.blogs.map((b, i) => {
                    const path = "readBlog?title=" + b.title + "&content=" + b.content + "&time=" + b.time + "&author=" + b.author + "&id=" + b.id;
                    return <div key={i}>
                        <div>
                            <h3 className="inline">
                                <Link to={path}>{b.title}</Link>
                                <small className="col-md-offset-1">{b.author + "   " + b.time}</small>
                            </h3>
                            <div className="iconColor">
                                <span className="glyphicon glyphicon-trash" data-toggle="tooltip"
                                      data-placement="bottom" title="删除" onClick={this.deleteBlog.bind(this, b.id)}></span>
                                <div className="iconColor">
                                    <span className="glyphicon glyphicon-pencil" data-toggle="tooltip"
                                          data-placement="bottom" title="编辑"
                                          onClick={this.jumpToEditPage.bind(this, b)}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    }
}