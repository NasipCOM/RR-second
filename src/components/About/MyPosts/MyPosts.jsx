import React from 'react';
import Post from '../Post/Post';
import './MyPosts.css';

const MyPosts = () => {

    const posts = [
        { id: 1, message: 'Hi, how are you?', likesCount: 5 },
        { id: 2, message: 'Hi, how is it going?', likesCount: 12 },
        { id: 3, message: 'Hi, is everything okay?', likesCount: 9 }
    ]

    const postsElements = posts.map((post) => {
        return (
            <Post message={post.message} likesCount={post.likesCount} />
        )
    })

    return (
        <div className='wrapper'>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Hello</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;