import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Home from './views/home/Home';
import News from './views/news/News';
import About from './views/about/About';

const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Link to="/">Home</Link><br/>
                <Link to="/news">News</Link><br/>
                <Link to="/about">About</Link>

                <Route exact path="/" component={Home}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/about" component={About}/>
            </BrowserRouter>
        </div>
    );
};

export default App;
