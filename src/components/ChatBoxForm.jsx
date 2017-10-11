import React from 'react';

const ChatBoxForm = ({ onSubmit, nameKeyUp, msgKeyUp, msg }) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" onKeyUp={nameKeyUp} placeholder="Enter your name" />
            <input type="text" onKeyUp={msgKeyUp} placeholder="Type message here" />
            <input type="submit" name="submit" value="Send Message" />
        </form>
    );
};

export default ChatBoxForm;