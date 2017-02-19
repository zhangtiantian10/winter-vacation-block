import React, {Component} from 'react';

export default class ReadBlog extends Component {
    render() {
        console.log(this.props.location.query.title);
        console.log(this.props.location.query.content);
        console.log(this.props.location.query.time);
        console.log(this.props.location.query.author);
        const blog = this.props.location.query;
        return <div>
            <div className="col-md-6 col-md-offset-3">
                <div className="center">
                    <h1>{blog.title}</h1>
                </div>
                <div>
                    {blog.author + "   " + blog.time}
                </div>
                <div>
                    <p className="lineHeight">{blog.content}</p>
                </div>
            </div>
        </div>
    }
}