import React, {Component} from 'react';

export default class Home extends Component {
    componentWillMount() {
        this.props.getAllBlocks();
    }

    render() {
        console.log(this.props.blocks);
        return <div>
            博客列表：
            {this.props.blocks.map((b,i) => {
                return <div key={i}>
                    {b.title},{b.content},{b.time},{b.author}
                </div>
            })}
        </div>
    }
}