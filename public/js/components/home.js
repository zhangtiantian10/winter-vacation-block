import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Home extends Component {
    componentWillMount() {
        this.props.getAllBlogs();
    }

    render() {
        return <div>
            <div className="col-md-10 col-md-offset-1">
                <h3>博客列表：</h3>
                {this.props.blogs.map((b, i) => {
                    const path = "readBlog?title=" + b.title + "&content=" + b.content + "&time=" + b.time + "&author=" + b.author;
                    return <div key={i}>
                        <div>
                            <h3>
                                <Link to={path}>{b.title}</Link>
                                <small className="col-md-offset-1">{b.author + "   " + b.time}</small>
                            </h3>
                        </div>
                    </div>
                })}
            </div>
        </div>
    }
}