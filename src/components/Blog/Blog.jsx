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
    return (
        <div className='dialogs'>
            <div className="dialogItems">
                <Dialog name='Nasip' id='2' />
                <Dialog name='Aidar' id='2' />
                <Dialog name='Ramazan' id='2' />
                <Dialog name='Emil' id='2' />
                <Dialog name='Nasip' id='2' />
            </div>
            <div className="messages">
                <Message message='Hello' />
                <Message message='How are you?' />
                <Message message='How is it going?' />
                <Message message='Great job' />
            </div>
        </div>
    );
}

export default Blog;