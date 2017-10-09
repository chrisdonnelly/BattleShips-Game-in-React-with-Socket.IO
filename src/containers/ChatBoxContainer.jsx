import React, { Component } from 'react';
import ChatBoxForm from '../components/ChatBoxForm.jsx';
import Message from '../components/MessageComponent.jsx';
import io from 'socket.io-client';

class ChatBoxContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            name: null,
            msg: null
        }
        this.socket = io('http://localhost:3000/');
        this.socket.on('chat', this.addMessage.bind(this));

        this.submitForm = this.submitForm.bind(this);
        this.nameKeyUp = this.nameKeyUp.bind(this);
        this.msgKeyUp = this.msgKeyUp.bind(this);
    }

    nameKeyUp(event) {
        this.setState({
            name: event.target.value
        });
    }

    msgKeyUp(event) {
        this.setState({
            msg: event.target.value
        });
    }

    submitForm(event) {
        event.prevenetDefault();
        if (this.state.name && this.state.msg) {
            let newMessage = { author: this.state.name, text: this.state.msg }
            this.socket.emit('chat', newMessage);
        }
    }

    addMessage(message) {
        var messages = this.state.messages;
        let newMessages = [message, ...messages];
        this.setState({
            messages: newMessages
        });
    }

    render() {
        const messages = this.state.messages.map((message, index)=> {
            return <Message key={index} author={message.author} text={message.text} />
        });
        return (
            <div className="chatbox">
                <ChatBoxForm
                    nameKeyUp={this.nameKeyUp}
                    msgKeyUp={this.msgKeyUp}
                    onSubmit={this.submitForm}
                />
                {messages}
            </div>
        );
    }
}

export default ChatBoxContainer;