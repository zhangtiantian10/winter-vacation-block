import React, {Component} from 'react';

export default class WriteBlock extends Component {
    addBlock() {
        const title = this.refs.blockTitle.value;
        const content = document.getElementById("blockContent").value;
        const time = this.refs.blockTime.value;
        const author = this.refs.blockAuthor.value;
        console.log(title, content, time, author);
        this.props.onSubmit({title, time, content, author});
    }

    render() {
        return <div>
            <div>
                标题：
                <input type="text" id="blockTitle" ref="blockTitle"/>
            </div>
            <div>
                内容：
                <textarea name="blockContent" id="blockContent" cols="30" rows="5" ref="blockContent"></textarea>
            </div>
            <div>
                时间：
                <input type="text" id="blockTime" ref="blockTime"/>
            </div>
            <div>
                作者：
                <input type="text" id="blockAuthor" ref="blockAuthor"/>
            </div>
            <div>
                <button onClick={this.addBlock.bind(this)}>完成</button>
            </div>
        </div>
    }
}