import React from 'react';
import Head from '../Head/Head';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import About from '../About/About';
import Blog from '../Blog/Blog';

const App = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Head name="Жаркоооо" />
                <div className="flex">
                    <Navbar />
                    <div className='content'>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/blog' component={Blog} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;