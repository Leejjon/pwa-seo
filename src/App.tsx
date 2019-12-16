import React, {useState, useEffect} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import intl from 'react-intl-universal';
import Home from './views/home/Home';
import News from './views/news/News';
import About from './views/about/About';

const locales = {
    "en-US": require('./locales/en-US.json'),
    "nl-NL": require('./locales/nl-NL.json'),
};

const App: React.FC = () => {
    const [loading, doneLoading] = useState(false);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        async function initMessages() {
            await intl.init({
                currentLocale: "en-US",
                locales
            }).then(() => {
                doneLoading(true);
            });
        }

        initMessages().then(() => console.log('Done loading messages'));
    }, [loading] /* Passing sure we don't run this side effect unless the loading is changed */ );

    return (
        loading &&
        <div className="App">
            <BrowserRouter>
                <Link id="linkToHome" to="/">{intl.get('HOME_LINK')}</Link><br/>
                <Link id="linkToNews" to="/news">News</Link><br/>
                <Link id="linkToAbout" to="/about">About</Link>

                <Route exact path="/" component={Home}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/about" component={About}/>
            </BrowserRouter>
        </div>
    );
};

export default App;
