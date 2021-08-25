import React from 'react';
import Head from '../Head/Head';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import About from '../About/About';
import Blog from '../Blog/Blog';

const App = (props) => {

    const { posts, messages, dialogs } = props;

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Head name="Жаркоооо" />
                <div className="flex">
                    <Navbar />
                    <div className='content'>
                        <Route exact path='/' render={() => <Home />} />
                        <Route path='/about' render={() => <About posts={posts} />} />
                        <Route path='/blog' render={() => <Blog messages={messages} dialogs={dialogs} />} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;