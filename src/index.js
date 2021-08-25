import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

const posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 5 },
    { id: 2, message: 'Hi, how is it going?', likesCount: 12 },
    { id: 3, message: 'Hi, is everything okay?', likesCount: 9 }
]

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

ReactDOM.render(
    <React.StrictMode> <App posts={posts} dialogs={dialogs} messages={messages}/></React.StrictMode>,
    document.getElementById('root')
);

