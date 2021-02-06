import React from 'react';
import "./Message.css";
import * as timeago from 'timeago.js';

const Message = ({id, content:{timestamp, message}}) => {
    return (
        <div className="message">
            <div className="message-content">
                <div className="message-container">
                    <h4>{message}</h4>
                </div>
                <small>{timeago.format(new Date(timestamp?.toDate()).toLocaleString())}</small>
            </div>
        </div>
    );
}

export default Message;
