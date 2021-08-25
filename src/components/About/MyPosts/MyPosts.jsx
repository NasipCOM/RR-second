import React from 'react';
import Post from '../Post/Post';
import './MyPosts.css';

const MyPosts = (props) => {

    const posts = props.posts;

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