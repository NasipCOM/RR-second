import React from 'react';
import { NavLink } from 'react-router-dom';
import './Blog.css';

const Dialog = (props) => {
    let path = "dialog/" + props.id;

    return (
        <div>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div>
            <div className="">{props.message}</div>
        </div>
    )
}

const Blog = () => {

    let dialogsData = [
        { id: 1, name: 'Nasip' },
        { id: 2, name: 'Aidar' },
        { id: 3, name: 'Ramazan' },
        { id: 4, name: 'Emil' },
        { id: 5, name: 'Ernest' },
        { id: 6, name: 'Kadyr' }
    ]

    const dialogElements = dialogsData
        .map(dialog => <Dialog name={dialog.name} id={dialog.id} />)

    let messages = [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'How is it going?' },
        { id: 4, message: 'Great job' }
    ]

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