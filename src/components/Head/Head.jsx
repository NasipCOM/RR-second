import React from 'react';
import './Head.css';

const Head = (props) => {
    return (
        <div className="head">
            Здесь будет {props.name}
        </div>
    )
}

export default Head;
