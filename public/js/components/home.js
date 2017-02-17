import React, {Component} from 'react';

export default class Home extends Component {
    componentWillMount() {
        this.props.getAllBlocks();
    }

    render() {
        return <div>
            博客列表：
        </div>
    }
}