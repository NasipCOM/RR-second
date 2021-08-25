import React from 'react';
import './Blog.css';
import Dialog from './Dialog/Dialog';
import Message from './Messages/Message';


const Blog = (props) => {

    const {messages, dialogs} = props;

    const dialogElements = dialogs
        .map(dialog => <Dialog name={dialog.name} id={dialog.id} />)

    const messagesElement = messages.map((message) => {
        return <Message message={message.message} />
    })

    return (
        <div className='dialogs'>
            <div className="dialogItems">
                {dialogElements}
            </div>
            <div className="messages">
                {messagesElement}
            </div>
        </div>
    );
}

export default Blog;