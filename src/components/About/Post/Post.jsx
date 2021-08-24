import React from 'react';


const Post = (props) => {

    return (
        <div>
            <div className="">
                <p>
                    {props.message}
                </p>
                <div>
                    {props.likesCount}
                </div>
            </div>
        </div>
    );
}

export default Post;