import React from 'react';
import Head from '../Head/Head';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import About from '../About/About';
import Blog from '../Blog/Blog';

const App = (props) => {
    console.log(props)
    const { profilePage, messagesPage } = props.state;

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Head name="Жаркоооо" />
                <div className="flex">
                    <Navbar />
                    <div className='content'>
                        <Route exact path='/' render={() => <Home />} />
                        <Route path='/about' render={() => <About posts={profilePage.posts} />} />
                        <Route path='/blog' render={() => <Blog messages={messagesPage.messages} dialogs={profilePage.dialogs} />} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;