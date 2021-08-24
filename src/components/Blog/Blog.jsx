import React from 'react';
import './Blog.css';
import Dialog from './Dialog/Dialog';
import Message from './Messages/Message';


const Blog = () => {

    let dialogs = [
        { id: 1, name: 'Nasip' },
        { id: 2, name: 'Aidar' },
        { id: 3, name: 'Ramazan' },
        { id: 4, name: 'Emil' },
        { id: 5, name: 'Ernest' },
        { id: 6, name: 'Kadyr' }
    ]

    let messages = [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'How is it going?' },
        { id: 4, message: 'Great job' }
    ]
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